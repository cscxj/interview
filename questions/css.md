# CSS

## 怎么水平垂直居中一个元素？  

1. absolute + 负margin  

条件：box宽高固定  

```css
.container {
    position: relative;
}
.box {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;
}
```  

2. absolute + margin auto  

```css
.container {
    position: relative;
}
.box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
```  

3. absolute + calc

```css
.container {
    position: relative;
}
.box {
    position: absolute;;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
}
```

4. absolute + transform  

```css
.container {
    position: relative;
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

5. line-height  

条件：必须确定container高度  

```css
.container {
  line-height: 100vh;
  text-align: center;
}
.box {
  display: inline-block;
  vertical-align: middle;
  line-height: initial;
  text-align: left;
}
```

7. table布局  

条件：必须确定container宽高  

```css
.container {
  width: 100vw;
  height: 100vh;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.box {
  display: inline-block;
}
```

8. flex  

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
}
```

9. grid  

```css
.container {
  display: grid;
}
.box {
  align-self: center;
  justify-self: center;
}
```

## 什么是BFC？  

## 标准盒模型和怪异盒模型？  
