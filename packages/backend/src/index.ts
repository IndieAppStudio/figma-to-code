import { createHTMLComponentGenerator } from "capy-component-generator-html";
// import {createHTMLProjectGenerator} from "capy-project-generator-html";
import fs from 'fs';

const currentDir = process.cwd();
const jsonString  = fs.readFileSync(`${currentDir}/examples/component.json`, 'utf-8');
const exampleData = JSON.parse(jsonString);

const generator = createHTMLComponentGenerator();




// const projectGenerator = createHTMLProjectGenerator()
// let result: string;
await generator.generateComponent(exampleData).then(res => console.log(res))

// console.log(projectGenerator)
// await projectGenerator.generateProject(exampleData).then(res => console.log(res))

// console.log(`Result is ${result}`)