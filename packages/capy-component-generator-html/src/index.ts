import { createCSSPlugin } from 'capy-plugin-css'
import { createHTMLBasePlugin } from 'capy-plugin-html-base-component'
import importStatementsPlugin from 'capy-plugin-import-statements-html'
// import { createPrettierHTMLPostProcessor } from 'capy-postprocessor-prettier-html';
import {
  HTMLComponentGeneratorInstance,
  HTMLComponentGenerator,
  ComponentUIDL,
  GeneratorFactoryParams,
  GeneratorOptions,
} from 'capy-types'
import { createComponentGenerator } from 'capy-component-generator'
import { StringUtils } from 'capy-shared'
import { Parser } from 'capy-uidl-validator'
import { Resolver } from 'capy-uidl-resolver'
import { PlainHTMLMapping } from './plain-html-mapping'

const createHTMLComponentGenerator: HTMLComponentGeneratorInstance = ({
  mappings = [],
  plugins = [],
  postprocessors = [],
  // strictHtmlWhitespaceSensitivity = false,
}: GeneratorFactoryParams = {}): HTMLComponentGenerator => {
  const generator = createComponentGenerator()
  const resolver = new Resolver()
  resolver.addMapping(PlainHTMLMapping)
  mappings.forEach((mapping) => resolver.addMapping(mapping))

  // const prettierHTML = createPrettierHTMLPostProcessor({
  //   strictHtmlWhitespaceSensitivity,
  // })

  Object.defineProperty(generator, 'addExternalComponents', {
    value: (params: {
      externals: Record<string, ComponentUIDL>
      assets?: GeneratorOptions['assets']
    }) => {
      const { externals = {}, assets = {} } = params
      const componentUIDLs: Record<string, ComponentUIDL> = {}

      for (const uidlKey of Object.keys(externals)) {
        // Parsig the VUIDL or unknown JSON, and converting it into proper ComponentUIDL
        const componentUIDL = Parser.parseComponentJSON(
          externals[uidlKey] as unknown as Record<string, unknown>
        )

        const resolvedUIDL = resolver.resolveUIDL(componentUIDL, { assets })
        componentUIDLs[
          StringUtils.dashCaseToUpperCamelCase(resolvedUIDL.outputOptions.componentClassName)
        ] = resolvedUIDL
      }

      addExternals(componentUIDLs, plugins)
    },
  })

  const { htmlComponentPlugin, addExternals } = createHTMLBasePlugin()
  generator.addPlugin(htmlComponentPlugin)
  generator.addPlugin(
    createCSSPlugin({
      templateChunkName: 'html-chunk',
      declareDependency: 'import',
      forceScoping: true,
      templateStyle: 'html',
      staticPropReferences: true,
    })
  )

  plugins.forEach((plugin) => generator.addPlugin(plugin))
  mappings.forEach((mapping) => generator.addMapping(mapping))
  generator.addMapping(PlainHTMLMapping)

  generator.addPlugin(importStatementsPlugin)

  postprocessors.forEach((postProcessor) => generator.addPostProcessor(postProcessor))
  // generator.addPostProcessor(prettierHTML)

  return generator as HTMLComponentGenerator
}

export { createHTMLComponentGenerator, PlainHTMLMapping }