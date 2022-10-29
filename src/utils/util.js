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
