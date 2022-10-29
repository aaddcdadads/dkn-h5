import _ from 'lodash';

export function convertCssToVueStyle(css) {
  if (!css) {
    return {
      backgroundColor: 'inherit'
    }
  }

  let items = css.split(';')
  let style = {}
  _.each(items, item => {
    let cssItem = _.trim(item)
    if (!cssItem) {
      return;
    }

    style[_.camelCase(_.trim(cssItem.split(':')[0]))] = _.trim(cssItem.split(':')[1])
  })
  return style;
}

export function getAntTableFlattenedColumns(columns) {
  let self = this;
  if (typeof columns === 'undefined') {
    columns = this.columns;
  }
  let flattenedColumns = JSON.parse(JSON.stringify(columns))
  _.each(columns, column => {
    if (column.children && column.children.length > 0) {
      flattenedColumns = _.concat(flattenedColumns, self.getFlattenedColumns(column.children))
    }
  })
  return flattenedColumns;
}

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