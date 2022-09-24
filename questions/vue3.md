# vue3  

## diff算法  

> [源码](https://github.com/vuejs/core/blob/96ba71d0cffbb8a736365d92d1f5cd6be9afdcff/packages/runtime-core/src/renderer.ts#L1759)  

1. 顺序对比新旧节点列表，复用相同的节点。[->](https://github.com/vuejs/core/blob/96ba71d0cffbb8a736365d92d1f5cd6be9afdcff/packages/runtime-core/src/renderer.ts#L1775)  

2. 倒序对比新旧节点列表，复用相同的节点。[->](https://github.com/vuejs/core/blob/96ba71d0cffbb8a736365d92d1f5cd6be9afdcff/packages/runtime-core/src/renderer.ts#L1801)  

3. 如果旧节点全部被复用，挂载新增节点。[->](https://github.com/vuejs/core/blob/96ba71d0cffbb8a736365d92d1f5cd6be9afdcff/packages/runtime-core/src/renderer.ts#L1828)  

4. 如果新节点全部被复用，销毁多余的旧节点。[->](https://github.com/vuejs/core/blob/96ba71d0cffbb8a736365d92d1f5cd6be9afdcff/packages/runtime-core/src/renderer.ts#L1858)

5. 节点类型或者`key`有变化的情况:  
   5.1. 确定新节点`key`与其在列表中位置的映射关系。[->](https://github.com/vuejs/core/blob/96ba71d0cffbb8a736365d92d1f5cd6be9afdcff/packages/runtime-core/src/renderer.ts#L1880)  
   5.2. 遍历老节点,记录节点复用的位置关系;
        有`key`的节点, 在新节点列表中找相同`key`的节点, 尝试复用;  
        没有key的节点, 按顺序在新节点列表中查找还没有复用目标且类型相同的节点进行复用;  
        找不到接盘者的销毁。[->](https://github.com/vuejs/core/blob/96ba71d0cffbb8a736365d92d1f5cd6be9afdcff/packages/runtime-core/src/renderer.ts#L1898)  
   5.3. 将节点调整为新节点的顺序，并将没有复用目标的新节点进行挂载。[->](https://github.com/vuejs/core/blob/96ba71d0cffbb8a736365d92d1f5cd6be9afdcff/packages/runtime-core/src/renderer.ts#L1960)  
