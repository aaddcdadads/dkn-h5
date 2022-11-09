import moment from 'moment'

export function getFilterValue(item, obj) {
  let {type, value, code} = item;
  // 处理input组件
  if (isInput(type) && type !='InputNumber') {
    obj[code] = `*${value}*`;
    return;
  }

  // 处理范围日期组件
  if (isRangeDate(type)) {
    obj[`${code}_begin`] = value?.[0]?.format('YYYY-MM-DD HH:mm:ss');
    obj[`${code}_end`] = value?.[1]?.format('YYYY-MM-DD HH:mm:ss');
    return;
  }

  obj[code] = value;
}

function isSelect(type) {
  return type.indexOf("Select") > -1;
}

function isInput(type) {
  return type.indexOf("Input") > -1;
}

function isDate(type) {
  return type == "DatePicker";
}

function isTime(type) {
  return type == "TimePicker";
}

function isRangeDate(type) {
  return type == "RangePicker";
}

function isRangeTime(type) {
  return type == "RangePicker";
}