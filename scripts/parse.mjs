import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { exec,execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const componentPath = path.resolve(__dirname, `../node_modules/uview-ui/components/${process.argv[2]}/${process.argv[2]}.vue`);
const output = path.resolve(__dirname, `../docs/parse/${process.argv[2]}.json`);
async function extractComponentInfo() {
  try {
    console.log(`开始解析 ${componentPath}`);
    let command = `block component parse -c ${componentPath} -o ${output}`;
    execSync(command, {stdio: 'inherit'});
  } catch (e) {
    console.error(e);
  }

}

//生成parsh.sh脚本内容
function getDirectories() {
  let directories = fs.readdirSync('/Users/mac/sili/project-workspcae/设计云/workspace-fork/uniapp-uview-vite/node_modules/uview-ui/components', { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

    directories.forEach(e=>{
      console.log(`npm run parse ${e}`);
    });
}

extractComponentInfo();