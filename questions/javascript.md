# javascript  

## js 中的数据类型？  

- 基本类型:  

1. `number`  
2. `string`  
3. `boolean`  
4. `undefined`  
5. `null`  
6. `symbol`  
7. `bigint`  

- 引用类型:

1. `Object`  
2. `Array`  
3. `Function`  

## 数组常用的方法?  

[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

1. `push()`  
2. `unshift()`  
3. `splice()`  
4. `concat()`  
5. `sort()`  
6. `reverse()`  
7. `sort()`  
8. `join()`  
9. `some()`  
10. `every()`  
11. `forEach()`  
12. `filter()`  
13. `map()`  

## 字符串常用的方法？  

[String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

1. `concat()`
2. `slice()`  
3. `substr()`  
4. `substring()`  

## es6新特性？  

[es6features](https://github.com/lukehoban/es6features)  

1. 箭头函数  
2. `class`语法  
3. 对象属性简写  
4. 模板字符串
5. 解构语法（对象解构、数组解构）
6. 函数参数默认值  
7. `let`、`const` 定义变量  
8. 可迭代对象`for..of`  
9. 生成器函数`function*()`  
10. `unicode`编码支持  
11. 模块化语法`import`、`export`
12. `Map` + `Set` + `WeakMap` + `WeakSet`  
13. `Proxy`、`Reflect`  
14. `Symbols`
15. `Math` + `Number` + `String` + `Array` + `Object` 的新Api  
   常用：
   `"abcde".includes("cd")`、
   `Array.from(document.querySelectorAll('*'))`、
   `[1, 2, 3].find(x => x == 3)`、
   `[1, 2, 3].findIndex(x => x == 2)`  
16. 二进制和八进制数字`0b1`、`0o1`  
17. `Promise`  

## DOM常见操作有哪些？

增删改查、创建  
创建：`createElement`、`createTextElement`
查：`querySelector`、`querySelectorAll`、`getElementById`  
改：`innerHTML`、`innerText`、`textContent`、`dom.style.xxx`  
增：`innerHTML`、`appendChild`、`insertBefore`、`setAttribute`  
删：`removeChild`  

## 说说你对BOM的了解，常见的BOM对象?  

BOM(Browser Object Model) 浏览器对象模型，把浏览器当作一个对象来看待，提供与浏览器交互的接口。  
BOM的顶级对象是window
BOM是浏览器厂商在各自的浏览器上定义的，兼容性较差。

- `window`：[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window)  
- `navigator`：[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)
- `location`：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Location)  
- `screen`： [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/screen)
- `history`：[MDN](https://developer.mozilla.org/en-US/docs/Web/API/History)

## JS为什么需要微任务？  

插队执行  

- 在下一个宏任务之前执行  
- 在下一次渲染之前执行  

## new 关键字创建对象时做了什么？

参考：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new#%E6%8F%8F%E8%BF%B0)

1. 创建一个空对象（即`{}`）
2. 为这个空对象添加`__proto__`属性，这个属性指向构造函数的`prototype`  
3. 这个空对象作为构造函数的`this`，执行构造函数
4. 如果构造函数没有返回对象，则返回`this`
