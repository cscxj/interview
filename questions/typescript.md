# typescript  

## `typeof`和`keyof`的作用?  
typeof:  
获取一个变量或者对象的类型  
keyof:  
索引类型查询操作符，获取索引类型的属性名，构成联合类型  

## typescript内置类型  

[查看文档](https://www.typescriptlang.org/docs/handbook/utility-types.html)  

## declare，declare global是什么？  

declare: 定义全局变量、函数、class、命名空间、module等  
declare global: 必须在视为模块的文件(有export)中使用, 并且在模块中声明的任何内容都在模块范围内, 使用`declare global`可将内容定义到全局。  

## TypeScript 中如何设置模块导入的路径别名？  

```json
{ 
  "compilerOptions": 
    {
      "baseUrl": ".", 
      "paths": { 
         "@/*": ["src/*"]
      } 
   } 
}
```

## tsconfig.json中有哪些配置项信息?  

```json
{
    "files": [],
    "includes": [],
    "excludes": [],
    "extends": "",
    "references": [],
    "compileOnSave": false,
    "compilerOptions": {}
}
```