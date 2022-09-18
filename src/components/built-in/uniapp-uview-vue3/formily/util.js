import moment from 'moment'

export function getFilterValue(type, values, key) {
  // 处理input组件
  if (isInput(type) && type !='InputNumber') {
    values[key] = `*${values[key]}*`;
    return;
  }
  // 处理日期组件
  if (isDate(type)) {
    values[key] = values[key]?.format('YYYY-MM-DD HH:mm:ss');
    return;
  }
  // 处理时间组件
  if (isTime(type)) {
    values[key] = values[key]?.format('HH:mm:ss');
    return;
  }
  // 处理范围日期组件
  if (isRangeDate(type)) {
    values[`${key}_begin`] = values[key]?.[0]?.format('YYYY-MM-DD HH:mm:ss');
    values[`${key}_end`] = values[key]?.[1]?.format('YYYY-MM-DD HH:mm:ss');
    values[key] = undefined;
    return;
  }
}

export function getFeiqiFilterValue(type, values, key) {
  // 处理日期组件
  if (isDate(type)) {
    values[key] = values[key]?.format('YYYY-MM-DD HH:mm:ss');
    return;
  }
  // 处理时间组件
  if (isTime(type)) {
    values[key] = values[key]?.format('HH:mm:ss');
    return;
  }
}

export function getFormValue(type, values, key) {
  // 处理日期组件
  if (isDate(type) && values[key]) {
    values[key] = values[key].format('YYYY-MM-DD HH:mm:ss');
    return;
  }
  // 处理时间组件
  if (isTime(type) && values[key]) {
    values[key] = values[key].format('HH:mm:ss');
    return;
  }
}

export function setFormValue(type, values, key) {
  // 处理日期\时间组件
  if (isDate(type) || isTime(type)) {
    return moment(values[key]);
  }

  // 处理日期\时间组件
  // if (isSelect(type) && typeof values[key] == 'number') {
  //     return String(values[key]);
  // }

  return values[key];
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