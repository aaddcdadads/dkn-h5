#!/usr/bin/env node
import path from 'path';
import fs from 'fs';


console.log(import.meta);
import url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//node命令传递过来的参数[ DIR,LIMIT ]
let componentName = process.argv[2]
let split = componentName.split("-");
let propFileName = split[split.length - 1];
//读取配置
const srcFile = path.resolve(__dirname, `../docs/parse/${componentName}.json`);
const propFile = path.resolve(__dirname, `../docs/props/${componentName}-props.json`);
const defaultValFile = path.resolve(__dirname, `../docs/props/${componentName}-default.json`);
const config = JSON.parse(fs.readFileSync(srcFile, 'utf8'));
const propsPath = path.resolve(__dirname, `../src/uni_modules/uview-ui/components/${componentName}/props.js`);
const defaultPropsPath = path.resolve(__dirname, `../src/uni_modules/uview-ui/libs/config/props/${propFileName}.js`);
console.log(propsPath);
console.log(defaultPropsPath);

async function parseProps() {
   console.log(`----------->${componentName}`)
    
    let propsContent = fs.readFileSync(propsPath, 'utf8');

    parseJsonStr(propsContent);
    const propsJson = JSON.parse(fs.readFileSync(propFile, 'utf8')).props;

    //默认值
    let defaultVal = {};
    try{
    
    let defaultContent = fs.readFileSync(defaultPropsPath, 'utf8');
    defaultContent = defaultContent.replace("export default","");

    parseDefaultValJson(defaultContent);
    let defaultVal = JSON.parse(fs.readFileSync(defaultValFile, 'utf8'));
    }catch(e){
        defaultVal ={};
    }
    //console.log(defaultVal.hairline)
    let props = [];
    console.log("propsJson:");
    for(let key in propsJson){
        let item = propsJson[key];
        props.push({
            "kind": "prop",
            "description": "",
            "keywords": [],
            "visibility": "public",
            "name": key,
            "type": item.type,
            "default": defaultVal[key],
            "required": false,
            "describeModel": false
        }) 
    }

    config.props = props;
    //console.log("config.props :");
    //console.log(props)

    fs.writeFileSync(srcFile, JSON.stringify(config, null, 2))

}

async function parseDefaultValJson(propsContent){
    propsContent = propsContent.replace("export default","");
    // 使用正则表达式匹配并替换注释内容为空字符串
    propsContent = propsContent.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '');
    
    // 使用正则表达式添加双引号
    propsContent = propsContent.replace(/([{,]\s*)([A-Za-z0-9_\-]+)(\s*:)/g, '$1"$2"$3');
    propsContent = propsContent.replace(/'/g, '"');
   
    let propsContentJson = JSON.parse(propsContent);
    fs.writeFileSync(defaultValFile, JSON.stringify(propsContentJson[propFileName], null, 2))
    return propsContentJson;
}

async function parseJsonStr(propsContent){
    propsContent = propsContent.replace("export default","");
    // 使用正则表达式匹配并替换注释内容为空字符串
    propsContent = propsContent.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '');
    // 使用正则表达式匹配并替换以"default:"开头的行为空字符串
    propsContent = propsContent.replace(/default:.*$/gm, '');
    // 使用正则表达式将所有的"}"替换成"##"
    propsContent = propsContent.replace(/},/g, '##');
    propsContent = propsContent.replace(/\[Boolean, String, Number\]/g, "String");
    propsContent = propsContent.replace(/\[String, Number, Boolean\]/g, "String");
    propsContent = propsContent.replace(/\[Number, String, Boolean\]/g, "String");
    propsContent = propsContent.replace(/\[String, Number, Array, null\]/g, "String");
    propsContent = propsContent.replace(/\[String, Number, null\]/g, "String");
    propsContent = propsContent.replace(/\[Number, String, Array\]/g, "String");
    propsContent = propsContent.replace(/\[Object, Function, Array\]/g, "String");
    propsContent = propsContent.replace(/\[Function, null\]/g, "String");
    propsContent = propsContent.replace(/\[Function, null\]/g, "String");
    propsContent = propsContent.replace(/\[String, Boolean\]/g, "String");
    propsContent = propsContent.replace(/\[String, Object\]/g, "String");
    propsContent = propsContent.replace(/\[Object, String\]/g, "String");
    propsContent = propsContent.replace(/\[String, Number\]/g, "String");
    propsContent = propsContent.replace(/\[Number, String\]/g, "String");
    propsContent = propsContent.replace(/\[String, Function\]/g, "String");
    propsContent = propsContent.replace(/\[Boolean, String\]/g, "String");
    propsContent = propsContent.replace(/\[String, null\]/g, "String");
    propsContent = propsContent.replace(/\[Array, String\]/g, "String");
    // 使用正则表达式匹配并替换除了"}"后面的逗号之外的所有逗号符号为一个空格
    propsContent = propsContent.replace(/,/g, '"');
    propsContent = propsContent.replace(/##/g, '},');
    if(propsContent.endsWith("\"")){
        propsContent=propsContent.substring(0,propsContent.length-1);
    }
    propsContent = propsContent.replace(/type: /g, '"type": "');
    propsContent = propsContent.replace(/}",/g, '},');
    propsContent = propsContent.replace(/"{/g, '{');
    // 使用正则表达式添加双引号
    propsContent = propsContent.replace(/([{,]\s*)([A-Za-z0-9_\-]+)(\s*:)/g, '$1"$2"$3');
    //console.log(propsContent);
    let propsContentJson = JSON.parse(propsContent);
    fs.writeFileSync(propFile, JSON.stringify(propsContentJson, null, 2))
    return  propsContentJson;
}
 
parseProps();



