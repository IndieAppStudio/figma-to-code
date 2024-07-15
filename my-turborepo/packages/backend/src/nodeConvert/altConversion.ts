type ParentType = (BaseNode & ChildrenMixin) | null;

export let globalTextStyleSegments: Record<string, StyledTextSegment[]> = {};


export const cloneNode = <T extends BaseNode>(node: T): T => {
    // Create the cloned object with the correct prototype
    const cloned = {} as T;
    // Create a new object with only the desired descriptors (excluding 'parent' and 'children')
    for (const prop in node) {
      if (
        prop !== "parent" &&
        prop !== "children" &&
        prop !== "horizontalPadding" &&
        prop !== "verticalPadding" &&
        prop !== "mainComponent" &&
        prop !== "masterComponent" &&
        prop !== "variantProperties" &&
        prop !== "componentPropertyDefinitions" &&
        prop !== "exposedInstances" &&
        prop !== "componentProperties" &&
        prop !== "componenPropertyReferences"
      ) {
        cloned[prop as keyof T] = node[prop as keyof T];
      }
    }
  
    return cloned;
};

// auto convert Frame to Rectangle when Frame has no Children
const frameToRectangleNode = (
    node: FrameNode | InstanceNode | ComponentNode | ComponentSetNode,
    parent: ParentType
  ): RectangleNode => {
    const clonedNode = cloneNode(node);
    if (parent) {
      assignParent(clonedNode, parent);
    }
    overrideReadonlyProperty(clonedNode, "type", "RECTANGLE");
  
    return clonedNode as unknown as RectangleNode;
};

/**
 * Identify all nodes that are inside Rectangles and transform those Rectangles into Frames containing those nodes.
 */
export const convertNodesOnRectangle = (
    node: FrameNode | GroupNode | InstanceNode | ComponentNode | ComponentSetNode
  ): FrameNode | GroupNode | InstanceNode | ComponentNode | ComponentSetNode => {
    if (node.children.length < 2) {
      return node;
    }
    if (!node.id) {
      throw new Error(
        "Node is missing an id! This error should only happen in tests."
      );
    }
  
    // TODO Make a return?
    // const colliding = retrieveCollidingItems(node.children);
  
    // const parentsKeys = Object.keys(colliding);
    // // start with all children. This is going to be filtered.
    // let updatedChildren: Array<SceneNode> = [...node.children];
  
    // console.log("colliding are", parentsKeys);
  
    // parentsKeys.forEach((key) => {
    //   // dangerous cast, but this is always true
    //   const parentNode = node.children.find((d) => d.id === key) as RectangleNode;
  
    //   // retrieve the position. Key should always be at the left side, so even when other items are removed, the index is kept the same.
    //   // const indexPosition = updatedChildren.findIndex((d) => d.id === key);
  
    //   // filter the children to remove those that are being modified
    //   updatedChildren = updatedChildren.filter(
    //     (d) => !colliding[key].map((dd) => dd.id).includes(d.id) && key !== d.id
    //   );
  
    //   console.log("updatedChildren is now ", updatedChildren);
    //   const frameNode = convertRectangleToFrame(parentNode);
  
    //   // todo when the soon-to-be-parent is larger than its parent, things get weird. Happens, for example, when a large image is used in the background. Should this be handled or is this something user should never do?
    //   overrideReadonlyProperty(frameNode, "children", [...colliding[key]]);
  
    //   colliding[key].forEach((d) => {
    //     overrideReadonlyProperty(d, "parent", frameNode);
    //     d.x = d.x - frameNode.x;
    //     d.y = d.y - frameNode.y;
    //   });
    // });
  
    // if (updatedChildren.length > 0) {
    //   overrideReadonlyProperty(node, "children", updatedChildren);
    // }
  
    return node;
  };

export const frameNodeTo = (
    node: FrameNode | InstanceNode | ComponentNode | ComponentSetNode,
    parent: ParentType
  ):
    | RectangleNode
    | FrameNode
    | InstanceNode
    | ComponentNode
    | GroupNode
    | ComponentSetNode => {
    if (node.children.length === 0) {
      // if it has no children, convert frame to rectangle
      return frameToRectangleNode(node, parent);
    }
    const clone = standardClone(node, parent);
  
    overrideReadonlyProperty(
      clone,
      "children",
      convertToNodes(node.children, clone)
    );
    return convertNodesOnRectangle(clone);
  };

export const overrideReadonlyProperty = <T, K extends keyof T>(
    obj: T,
    prop: K,
    value: any
  ): void => {
    Object.defineProperty(obj, prop, {
      value: value,
      writable: true,
      configurable: true,
    });
  };

const assignParent = (node: SceneNode, parent: ParentType) => {
    if (parent) {
      overrideReadonlyProperty(node, "parent", parent);
    }
  };

const standardClone = <T extends SceneNode>(node: T, parent: ParentType): T => {
    const clonedNode = cloneNode(node);
    if (parent !== null) {
      assignParent(clonedNode, parent);
    }
    return clonedNode;
  };

export const convertToNodes = (
    sceneNode: ReadonlyArray<SceneNode>,
    parent: ParentType = null
): Array<SceneNode> => {
    const mapped: Array<SceneNode | null> = sceneNode.map((node: SceneNode) => {
        switch (node.type) {
            case "RECTANGLE":
            case "ELLIPSE":
              return standardClone(node, parent);
            case "LINE":
              return standardClone(node, parent);
            case "FRAME":
            case "INSTANCE":
            case "COMPONENT":
            case "COMPONENT_SET":
              // TODO Fix asset export. Use the new API.
              // const iconToRect = iconToRectangle(node, parent);
              // if (iconToRect != null) {
              //   return iconToRect;
              // }
              return frameNodeTo(node, parent);
            case "GROUP":
              if (node.children.length === 1 && node.visible) {
                // if Group is visible and has only one child, Group should disappear.
                // there will be a single value anyway.
                return convertToNodes(node.children, parent)[0];
              }
      
              // TODO see if necessary.
              const iconToRect = iconToRectangle(node, parent);
              if (iconToRect != null) {
                return iconToRect;
              }
      
              const clone = standardClone(node, parent);
      
              overrideReadonlyProperty(
                clone,
                "children",
                convertToNodes(node.children, clone)
              );
      
              // try to find big rect and regardless of that result, also try to convert to autolayout.
              // There is a big chance this will be returned as a Frame
              // also, Group will always have at least 2 children.
              return convertNodesOnRectangle(clone);
            case "TEXT":
              globalTextStyleSegments[node.id] = node.getStyledTextSegments([
                "fontName",
                "fills",
                "fontSize",
                "fontWeight",
                "hyperlink",
                "indentation",
                "letterSpacing",
                "lineHeight",
                "listOptions",
                "textCase",
                "textDecoration",
                "textStyleId",
                "fillStyleId",
                "openTypeFeatures"
              ]);
              return standardClone(node, parent);
            case "STAR":
            case "POLYGON":
            case "VECTOR":
              return standardClone(node, parent);
            case "SECTION":
              const sectionClone = standardClone(node, parent);
              overrideReadonlyProperty(
                sectionClone,
                "children",
                convertToNodes(node.children, sectionClone)
              );
              return sectionClone;
            case "BOOLEAN_OPERATION":
              const clonedOperation = standardClone(node, parent);
              overrideReadonlyProperty(clonedOperation, "type", "RECTANGLE");
              clonedOperation.fills = [
                {
                  type: "IMAGE",
                  scaleMode: "FILL",
                  imageHash: "0",
                  opacity: 1,
                  visible: true,
                  blendMode: "NORMAL",
                  imageTransform: [
                    [1, 0, 0],
                    [0, 1, 0],
                  ],
                },
              ];
              return clonedOperation;
            default:
              return null;
          }
    })

    return mapped.filter(notEmpty);
}

const iconToRectangle = (
    node: FrameNode | InstanceNode | ComponentNode | GroupNode,
    parent: ParentType
  ): RectangleNode | null => {
    // TODO Fix this.
    if (false && node.children.every((d) => d.type === "VECTOR")) {
      // const node = new RectangleNode();
      // node.id = node.id;
      // node.name = node.name;
      // if (Parent) {
      //   node.parent = Parent;
      // }
      // convertBlend(Node, node);
      // // width, x, y
      // convertLayout(Node, node);
      // // Vector support is still missing. Meanwhile, add placeholder.
      // node.cornerRadius = 8;
      // node.strokes = [];
      // node.strokeWeight = 0;
      // node.strokeMiterLimit = 0;
      // node.strokeAlign = "CENTER";
      // node.strokeCap = "NONE";
      // node.strokeJoin = "BEVEL";
      // node.dashPattern = [];
      // node.fillStyleId = "";
      // node.strokeStyleId = "";
      // node.fills = [
      //   {
      //     type: "IMAGE",
      //     imageHash: "",
      //     scaleMode: "FIT",
      //     visible: true,
      //     opacity: 0.5,
      //     blendMode: "NORMAL",
      //   },
      // ];
      // return node;
    }
    return null;
  };


export function notEmpty<TValue>(
    value: TValue | null | undefined
  ): value is TValue {
    return value !== null && value !== undefined;
  }