import { parse } from 'vue-docgen-api';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const componentPath = path.resolve(__dirname, `../node_modules/uview-ui/components/${process.argv[2]}/${process.argv[2]}.vue`);
async function extractComponentInfo() {
  try {
    console.log(`开始解析 ${componentPath}`);
    const componentInfo = await parse(componentPath);
    fs.writeFileSync(`docs/parse/${process.argv[2]}.json`, JSON.stringify(componentInfo, null, 2))
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