Blog 地址：
https://blog.lwtdzh.ip-ddns.com/

编辑方法：
首先 clone 本项目，cd 到项目目录中，
使用 npm install hexo-cli 安装依赖到项目目录下的 node_modules 文件夹中。
也可以使用 npm install -g hexo-cli 安装到全局（-g == --global）
然后编辑博客内容，编辑完后，使用 hexo server 本地查看。
本地查看没有问题，就输入 hexo generate，生成静态文件到工程下的 public 文件夹。
然后输入 hexo deploy 上传到 git 仓库 'blog.lwtdzh'，该仓库只存储静态内容。
完毕后，hexo clean 清理本地文件。然后 git add 新创建的文件。
