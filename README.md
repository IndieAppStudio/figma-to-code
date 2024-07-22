# figma-to-code

# Current flow
(Parse 1) - Figma design 
(Parse 2)-> Figma json -> builder json, UIDL (TeleportHQ) or custome UI scheme
(Parse 3)-> html code via (Builder API or Teleport component generator)
(Parse 4)-> Convert to React code
(Parse 5)-> Other frameworks via Mitosis


# TODO
- Collect Figma JSON
- Figma to UIDL -> Generate html code
- FIX ('Generic type 'IReactionOptions' requires 2 type argument(s))