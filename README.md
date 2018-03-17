# Blog

个人博客

## 配置环境

- nodejs >= 7
- npm

```bash
apt-get install nodejs npm -y

ln -s /usr/bin/nodejs /usr/bin/node

npm install -g n

n latest
```

## 下载依赖

```bash
# 下载依赖
sudo npm install 
```

## 配置db

vim server/config/config.js

```js
const mysql_user="xxxx"
const mysql_password="xxxx"
const mysql_ip="localhost"
const mysql_db="blog"

module.exports = {
  mysql_user,
  mysql_password,
  mysql_ip,
  mysql_db
}
```

## 配置nginx

```conf

```

## 打包+启动

``` bash
# npm build dev # 测试的时候使用，端口是3030

sudo npm run build # 只是打包，不需要启动服务

sudo node server # 端口是3000

nohup sudo node server &>> /data/www/blog.charmingkamly.cn/logs/nohup.log  & # 挂起
```




