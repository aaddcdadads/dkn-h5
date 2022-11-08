/**
 * 转换成小写驼峰
 */
 export function toCamelCase (str) {
	let STR = str.toLowerCase()
		.trim()
		.split(/[ -_]/g)
		.map(word => word.replace(word[0], word[0].toString().toUpperCase()))
		.join('');
	return STR.replace(STR[0], STR[0].toLowerCase());
};

export function upperFirst(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

function isFunction(val) {
  return Object.prototype.toString.call(val) === '[object Function]'
}
function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}
function isArray(val) {
  return Object.prototype.toString.call(val) === '[object Array]'
}
function isSet(val) {
  return Object.prototype.toString.call(val) === '[object Set]'
}
function isMap(val) {
  return Object.prototype.toString.call(val) === '[object Map]'
}
function isSymbol(val) {
  return Object.prototype.toString.call(val) === '[object Symbol]'
}
function isDate(val) {
  return Object.prototype.toString.call(val) === '[object Date]'
}

function ArrayBuffer(val) {
  return Object.prototype.toString.call(val) === '[object ArrayBuffer]'
}

const forEachValue = (obj, fn) =>  Object.keys(obj).forEach(key => fn(obj[key], key))
  
export function cloneDeep(val, weakMap = new WeakMap()) {
  if (isDate(val)) return new Date(+val)
    
  if (isMap(val)) {
    const map = new Map()
    for (const item of val) map.set(cloneDeep(item[0], weakMap), cloneDeep(item[1], weakMap))
    return map
  }

  if (isSet(val)) {
    const set = new Set()
    val.forEach(item => set.add(cloneDeep(item), weakMap))
    return set
  }

  if (isSymbol(val)) return Symbol(val.description)

  if (isFunction(val)) {
    if (/^function|^\(\)/.test(val.toString())) {
      return new Function(`return ${val.toString()}`)()
    } else {
      return new Function(`return function ${val.toString()}`)()
    }
  }
    
  if (!isObject(val)) return val
  
  const obj = isArray(val) ? [] : {}

  if(weakMap.has(val)) return weakMap.get(val)

  weakMap.set(val, obj)
  forEachValue(val, (val, key) => obj[key] = cloneDeep(val, weakMap))

  const symbols = Object.getOwnPropertySymbols(val)
  forEachValue(symbols, key => obj[Symbol(key.description)] = cloneDeep(symbols[key], weakMap))

  return obj
}

export function convertCssToVueStyle(css) {
  if (!css) {
    return {
      backgroundColor: 'inherit'
    }
  }

  let items = css.split(';')
  let style = {}
  items.forEach(item => {
    let cssItem = item.trim()
    if (!cssItem) {
      return;
    }

    style[toCamelCase(cssItem.split(':')[0].trim())] = cssItem.split(':')[1].trim()
  })
  return style;
}
