import { createProjectGenerator } from 'capy-project-generator'
import { createHTMLComponentGenerator } from 'capy-component-generator-html'
import { createComponentGenerator } from 'capy-component-generator'
import { createStyleSheetPlugin } from 'capy-plugin-css'
import prettierHTML from 'capy-postprocessor-prettier-html'
import HTMLTemplate from './project-template'
import { pluginCloneGlobals, ProjectPluginCloneGlobals } from './plugin-clone-globals'
import { pluginHomeReplace } from './plugin-home-replace'
import { htmlErrorPageMapping } from './error-page-mapping'

const createHTMLProjectGenerator = () => {
  const generator = createProjectGenerator({
    id: 'teleport-project-html',
    components: {
      generator: createHTMLComponentGenerator,
      path: ['components'],
    },
    pages: {
      generator: createHTMLComponentGenerator,
      path: [''],
      options: {
        useFileNameForNavigation: true,
      },
    },
    static: {
      prefix: 'public',
      path: ['public'],
    },
    projectStyleSheet: {
      generator: createComponentGenerator,
      plugins: [createStyleSheetPlugin({ fileName: 'style', relativeFontPath: true })],
      fileName: 'style',
      path: [''],
      importFile: true,
    },
    entry: {
      postprocessors: [prettierHTML],
      fileName: 'index',
      path: [''],
    },
  })

  return generator
}

export {
  createHTMLProjectGenerator,
  HTMLTemplate,
  pluginCloneGlobals,
  pluginHomeReplace,
  htmlErrorPageMapping,
  ProjectPluginCloneGlobals,
}