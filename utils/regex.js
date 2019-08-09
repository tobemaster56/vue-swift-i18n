
//当看到这个页面，说明你对Regexp赋值了↓↓↓
//欢迎使用JavaScript中的RegExp的众多陷阱之一，当flag 是global时，第二次使用它将会从第一次匹配到的lastIndex开始查。。。
//所以只要是变量赋值多次使用的Regexp，都需要使用match，或者在使用完test,exec之后重置lastIndex


//约定:所有汉字匹配均以汉字开头,所有正则针对 单行匹配
const spaceRegexp = /\s/g;
const firstSpaceRegexp = /\s+/;
const quotationRegexp = /[\"|\']/g;
const angleBracketsRegexp = /[\<|\>]/g;
const templateBeginRegexp = /\<template\>/g;
const templateEndRegexp = /\<\/template\>/g;
const scriptBeginRegexp = /\<script/g;
const scripteEndRegexp = /\<\/script/g;


//只匹配单行注释，多行注释不考虑
const commentRegexp = /\/\//g;

//匹配js中的汉字,配合template range 判断 是否是template中的js汉字  √
const scriptRegexp = /((?<!=)["|'][\u4e00-\u9fa5]["|'])|((?<!=)["|'][\u4e00-\u9fa5]\S+["|'])/g;

//匹配属性中的汉字 √
const propertyRegexp = /(\s\w+=["|'][\u4e00-\u9fa5]\S+["|'])|(\s\w+=["|'][\u4e00-\u9fa5]["|'])/g;

// 单行  匹配 template ><下的汉字
const templateTextInAngleBracketsRegexp = /(\>[\u4e00-\u9fa5]\S+\<)|(\>[\u4e00-\u9fa5]\<)/g;

// 单行  匹配 ，配合template range 判断 是否是template中的空字符开头的 汉字
const templateTextInLineRegexp = /((?<=\s+)[\u4e00-\u9fa5]\S+)|((?<=\s+)[\u4e00-\u9fa5])/g;

// 匹配多行 $t替换的字符串
const dollarTRegexp = /(?<=\$t\(["'])[^'"]+/gm;
module.exports = {
    templateBeginRegexp,
    templateEndRegexp,
    scriptBeginRegexp,
    scripteEndRegexp,

    scriptRegexp,
    propertyRegexp,
    templateTextRegexp,
    templateTextInLineRegexp,
    templateTextInAngleBracketsRegexp,
    angleBracketsRegexp,
    quotationRegexp,
    spaceRegexp,
    firstSpaceRegexp,
    commentRegexp,

    dollarTRegexp
};
