import { CodeGenerator } from '@babel/generator'
import * as types from '@babel/types'
import { CodeGeneratorFunction } from '../../../types'

export const generator: CodeGeneratorFunction<types.Node> = (ast) => {
  const babelGenerator = new CodeGenerator(ast, { jsescOption: { minimal: true } })
  const { code } = babelGenerator.generate()
  return code
}
