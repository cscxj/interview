# 浏览器相关原理面试题  

> 相关资料：  
> 一个网页的工作原理：[https://github.com/vasanthk/how-web-works](https://github.com/vasanthk/how-web-works)

## Chrome打开一个页面会启动哪些进程？  

- 浏览器进程：只有一个，负责协调、主控  
  - 负责浏览器页面显示、用户操作、前进和后退等  
  - 管理各个页面，创建和销毁其他进程  
  - 网络资源管理、下载等  
- Renderer进程  
- GPU进程  
- 插件进程  
