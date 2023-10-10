import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { exec,execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const componentPath = path.resolve(__dirname, `../src/uni_modules/uview-ui/components/${process.argv[2]}/${process.argv[2]}.vue`);
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
  const cpath = path.resolve(__dirname, `../src/uni_modules/uview-ui/components`);
  let directories = fs.readdirSync(cpath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

    directories.forEach(e=>{
      if(e.indexOf("--" == -1)){
        console.log(`npm run parse ${e}`);
      }
    });
}
//getDirectories()
extractComponentInfo();