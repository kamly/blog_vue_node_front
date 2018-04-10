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
upstream koa.server{
    server 127.0.0.1:3000;
}
server {
    listen 80;
    listen 443 ssl http2;

    server_name blog.charmingkamly.cn;
    access_log /data/logs/nginx/nginx_access_blog.charmingkamly.cn.log access_log_json;
    error_log /data/logs/nginx/nginx_error_blog.charmingkamly.cn.log;

    ssl on;
    ssl_certificate ../ssl/blog.charmingkamly.cn/1_blog.charmingkamly.cn_bundle.crt;
    ssl_certificate_key ../ssl/blog.charmingkamly.cn/2_blog.charmingkamly.cn.key;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #按照这个协议配置
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;#按照这个套件配置
    ssl_prefer_server_ciphers on;

    if ($server_port = 80 ) {
       return 301 https://$host$request_uri;
    }

    location / {
       proxy_pass http://koa.server;
       proxy_redirect off;
       proxy_set_header   Host             $host;
       proxy_set_header   X-Real-IP        $remote_addr;
       proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
    }
}
```

## 打包+启动

``` bash
# npm run dev # 测试的时候使用，端口是3030

sudo npm run build # 只是打包，不需要启动服务

sudo node server # 端口是3000

nohup sudo node server &>> /data/www/blog.charmingkamly.cn/logs/nohup.log  & # 挂起
```




