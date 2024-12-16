
## Blog 地址
[https://blog.lwtdzh.ip-ddns.com/](https://blog.lwtdzh.ip-ddns.com/)

## hexo 官方说明文档
[https://hexo.io/docs/commands](https://hexo.io/docs/commands)

## 编辑方法

1. **Clone 本项目**

2. **CD 到项目目录中**

3. **安装依赖**

   使用以下命令将 package.json 中列出的依赖安装到项目目录下的 `node_modules` 文件夹中：
   ```bash
   npm install
   ```
   
4. **编辑博客内容**

5. **本地查看**

   编辑完后，使用以下命令在本地查看：
   ```bash
   hexo server
   ```

6. **生成静态文件**

   本地查看没有问题，就输入以下命令生成静态文件到工程下的 `public` 文件夹：
   ```bash
   hexo generate
   ```

7. **上传到 Git 仓库**

   使用以下命令将静态内容上传到 Git 仓库 `'blog.lwtdzh'`：
   ```bash
   hexo deploy
   ```

8. **清理本地文件**

   完毕后，输入以下命令清理本地文件：
   ```bash
   hexo clean
   ```

9. **提交新创建的文件**

   最后，使用以下命令提交新创建的文件：
   ```bash
   git add *
   ```

