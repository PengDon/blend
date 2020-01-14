/*
 * @Author: don 
 * @Date: 2020-01-06 14:04:23 
 * @Last Modified by:   don 
 * @Last Modified time: 2020-01-06 14:04:23 
 * @Desc: 常用校验封装 
 */

const toString = Object.prototype.toString;
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export const isObject = (obj: { [propsName: string]: any }) => {
  return Object.is(toString.call(obj), '[object Object]');
};

export const isRegExp = (v: RegExp) => {
  return Object.is(toString.call(v), '[object RegExp]');
};

/**
 * Check if val is a valid array index.
 */
export const isValidArrayIndex = (val: number) => {
  const n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
};

export const isString = (str: string) => {
  return Object.is(toString.call(str), '[object String]');
};
