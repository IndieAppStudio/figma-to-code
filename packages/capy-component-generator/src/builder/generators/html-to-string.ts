// @ts-ignore
import toHTML from '@starptech/prettyhtml-hast-to-html'
import { CodeGeneratorFunction, HastNode } from 'capy-types'

export const generator: CodeGeneratorFunction<HastNode> = (htmlObject) => {
  return toHTML(htmlObject)
}