const o={id:"docker-basics",title:"第一阶段：Docker 基础概念（1-2天）",sections:[{title:"1.1 理解核心概念",content:`在开始使用 Docker 之前，需要理解三个核心概念。

镜像（Image）：
• 相当于一个模板，比如 nginx:latest
• 包含了运行应用所需的一切（代码、运行时、库、配置）
• 只读的，不会被修改
• 可以从 Docker Hub 下载，也可以自己构建

容器（Container）：
• 镜像运行起来的实例
• 可以启动、停止、删除
• 每个容器都是相互隔离的
• 容器是临时的，删除后数据会丢失

仓库（Registry）：
• 存放镜像的地方，比如 Docker Hub
• 类似于 GitHub，但存储的是镜像
• 可以搭建私有仓库

类比理解：
• 镜像 = 类（Class）
• 容器 = 对象（Object）
• 仓库 = GitHub`,code:null},{title:"1.2 基础命令练习",content:`通过实际操作来熟悉 Docker 的基本命令。

练习目标：
• 查看镜像和容器
• 运行第一个容器
• 查看容器日志
• 进入容器内部
• 停止和删除容器`,code:`# 查看本地镜像列表
docker images

# 查看运行中的容器
docker ps

# 查看所有容器（包括停止的）
docker ps -a

# 运行一个 nginx 容器
# -d: 后台运行
# -p: 端口映射（宿主机端口:容器端口）
# --name: 给容器命名
docker run -d -p 8080:80 --name test-nginx nginx

# 访问 http://localhost:8080 看效果

# 查看容器日志
docker logs test-nginx

# 实时查看日志
docker logs -f test-nginx

# 进入容器内部（交互式）
docker exec -it test-nginx bash

# 在容器内执行命令
ls /usr/share/nginx/html
cat /etc/nginx/nginx.conf
exit

# 停止容器
docker stop test-nginx

# 启动已停止的容器
docker start test-nginx

# 重启容器
docker restart test-nginx

# 删除容器（需要先停止）
docker rm test-nginx

# 强制删除运行中的容器
docker rm -f test-nginx`,language:"bash"},{title:"1.3 实战练习：运行多个 Nginx",content:`通过运行多个 Nginx 容器，理解端口映射和容器隔离。

练习要点：
• 同一个镜像可以运行多个容器
• 每个容器需要映射不同的端口
• 容器之间相互隔离`,code:`# 运行第一个 Nginx（端口 8080）
docker run -d -p 8080:80 --name nginx1 nginx

# 运行第二个 Nginx（端口 8081）
docker run -d -p 8081:80 --name nginx2 nginx

# 运行第三个 Nginx（端口 8082）
docker run -d -p 8082:80 --name nginx3 nginx

# 查看所有运行中的容器
docker ps

# 分别访问
# http://localhost:8080
# http://localhost:8081
# http://localhost:8082

# 停止并删除所有容器
docker stop nginx1 nginx2 nginx3
docker rm nginx1 nginx2 nginx3

# 或者一条命令强制删除
docker rm -f nginx1 nginx2 nginx3`,language:"bash"},{title:"1.4 常用命令总结",content:`总结第一阶段需要掌握的所有命令。

镜像相关：
• docker images - 查看镜像
• docker pull - 拉取镜像
• docker rmi - 删除镜像

容器相关：
• docker run - 创建并运行容器
• docker ps - 查看容器
• docker start/stop/restart - 启动/停止/重启
• docker rm - 删除容器
• docker logs - 查看日志
• docker exec - 进入容器执行命令`,code:`# 镜像操作
docker images                    # 查看所有镜像
docker pull nginx:latest         # 拉取最新版 nginx
docker rmi nginx:latest          # 删除镜像

# 容器操作
docker run -d --name test nginx  # 后台运行
docker ps                        # 查看运行中的容器
docker ps -a                     # 查看所有容器
docker start test                # 启动容器
docker stop test                 # 停止容器
docker restart test              # 重启容器
docker rm test                   # 删除容器
docker rm -f test                # 强制删除

# 日志和调试
docker logs test                 # 查看日志
docker logs -f test              # 实时查看日志
docker logs --tail 100 test      # 查看最后100行
docker exec -it test bash        # 进入容器

# 清理命令
docker container prune           # 删除所有停止的容器
docker image prune               # 删除无用镜像
docker system prune -a           # 清理所有无用资源`,language:"bash"}]},s={id:"docker-volumes",title:"第二阶段：数据持久化和端口映射（2-3天）",sections:[{title:"2.1 端口映射详解",content:`端口映射是让外部访问容器服务的关键。

映射格式：
• -p 宿主机端口:容器端口
• 可以映射多个端口
• 可以指定 IP 地址

使用场景：
• Web 服务：80、443
• 数据库：3306、5432
• Redis：6379
• 开发服务器：3000、8080`,code:`# 基本端口映射
docker run -d -p 8080:80 nginx
# 访问 localhost:8080

# 映射到不同端口
docker run -d -p 9090:80 --name nginx2 nginx
# 访问 localhost:9090

# 映射多个端口
docker run -d \\
  -p 80:80 \\
  -p 443:443 \\
  --name web nginx

# 指定 IP 地址映射（只允许本机访问）
docker run -d -p 127.0.0.1:8080:80 nginx

# 随机端口映射
docker run -d -P nginx

# 查看端口映射
docker port nginx`,language:"bash"},{title:"2.2 数据卷挂载（重要！）",content:`数据卷是实现代码热更新的关键，修改本地文件立即生效。

为什么需要数据卷：
• 容器删除后数据会丢失
• 需要在宿主机和容器间共享文件
• 实现代码热更新（开发必备）
• 数据持久化

挂载方式：
• -v 宿主机路径:容器路径
• 宿主机路径必须是绝对路径
• 容器路径由镜像决定`,code:`# 创建测试目录和文件
mkdir -p ~/docker-test/html
echo "<h1>Hello Docker</h1>" > ~/docker-test/html/index.html

# 挂载本地目录到容器
docker run -d -p 8080:80 \\
  -v ~/docker-test/html:/usr/share/nginx/html \\
  --name my-nginx nginx

# 访问 localhost:8080 看到 "Hello Docker"

# 修改本地文件
echo "<h1>Hello World</h1>" > ~/docker-test/html/index.html

# 刷新浏览器，立即看到变化！

# 查看挂载信息
docker inspect my-nginx | grep Mounts -A 10`,language:"bash"},{title:"2.3 实战：搭建静态网站",content:`使用数据卷挂载，搭建一个可以实时修改的静态网站。

项目结构：
~/docker-test/
├── html/
│   ├── index.html
│   ├── about.html
│   └── css/
│       └── style.css`,code:`# 创建项目结构
mkdir -p ~/docker-test/html/css
mkdir -p ~/docker-test/html/js

# 创建 index.html
cat > ~/docker-test/html/index.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>我的网站</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>欢迎来到我的网站</h1>
    <p>这是一个使用 Docker 部署的静态网站</p>
</body>
</html>
EOF

# 创建 CSS 文件
cat > ~/docker-test/html/css/style.css << 'EOF'
body {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
}
h1 {
    color: #333;
}
EOF

# 运行容器
docker run -d -p 8080:80 \\
  -v ~/docker-test/html:/usr/share/nginx/html \\
  --name my-website nginx

# 访问 localhost:8080
# 修改 HTML 或 CSS，刷新浏览器立即生效！`,language:"bash"},{title:"2.4 只读挂载",content:`有时候我们希望容器只能读取文件，不能修改。

使用场景：
• 配置文件（防止容器修改）
• 静态资源（只读即可）
• 安全考虑`,code:`# 只读挂载（添加 :ro）
docker run -d -p 8080:80 \\
  -v ~/docker-test/html:/usr/share/nginx/html:ro \\
  --name readonly-nginx nginx

# 尝试在容器内修改文件
docker exec readonly-nginx sh -c "echo 'test' > /usr/share/nginx/html/test.txt"
# 会提示：Read-only file system

# 对比：可写挂载
docker run -d -p 8081:80 \\
  -v ~/docker-test/html:/usr/share/nginx/html \\
  --name writable-nginx nginx

docker exec writable-nginx sh -c "echo 'test' > /usr/share/nginx/html/test.txt"
# 成功创建文件`,language:"bash"},{title:"2.5 数据卷 vs 绑定挂载",content:`Docker 提供两种数据持久化方式。

绑定挂载（Bind Mount）：
• 直接挂载宿主机目录
• 路径由用户指定
• 适合开发环境
• 我们一直在用的方式

数据卷（Volume）：
• Docker 管理的存储
• 路径由 Docker 管理
• 适合生产环境
• 更安全、更易管理`,code:`# 绑定挂载（我们一直在用的）
docker run -d \\
  -v ~/docker-test/html:/usr/share/nginx/html \\
  nginx

# 数据卷方式
# 创建数据卷
docker volume create my-data

# 使用数据卷
docker run -d \\
  -v my-data:/usr/share/nginx/html \\
  nginx

# 查看数据卷
docker volume ls

# 查看数据卷详情
docker volume inspect my-data

# 数据卷实际存储位置
# /var/lib/docker/volumes/my-data/_data

# 删除数据卷
docker volume rm my-data

# 清理未使用的数据卷
docker volume prune`,language:"bash"},{title:"2.6 实战总结",content:`第二阶段重点掌握的技能。

必须掌握：
• 端口映射：-p 宿主机端口:容器端口
• 数据卷挂载：-v 宿主机路径:容器路径
• 实现代码热更新

常见问题：
• 端口被占用：换一个端口
• 挂载路径错误：使用绝对路径
• 权限问题：检查目录权限

下一阶段：
• 运行 PHP 项目
• Nginx + PHP-FPM 联动
• 搭建完整的开发环境`,code:`# 完整示例：运行一个网站
docker run -d \\
  --name my-website \\
  -p 8080:80 \\
  -v ~/my-project/html:/usr/share/nginx/html:ro \\
  --restart always \\
  nginx

# 参数说明：
# -d: 后台运行
# --name: 容器名称
# -p: 端口映射
# -v: 数据卷挂载（只读）
# --restart always: 自动重启

# 查看运行状态
docker ps

# 查看日志
docker logs -f my-website

# 停止并删除
docker rm -f my-website`,language:"bash"}]},n={id:"docker-php",title:"第三阶段：运行 PHP 项目（3-4天）",sections:[{title:"3.1 单独运行 PHP-FPM",content:`PHP-FPM 是 PHP 的 FastCGI 进程管理器，用于处理 PHP 请求。

PHP-FPM 特点：
• 独立的进程，不依赖 Web 服务器
• 通过 9000 端口与 Nginx 通信
• 支持多版本 PHP 共存

镜像选择：
• php:8.2-fpm - PHP 8.2
• php:8.1-fpm - PHP 8.1
• php:7.4-fpm - PHP 7.4`,code:`# 创建 PHP 测试文件
mkdir -p ~/docker-test/php
echo "<?php phpinfo();" > ~/docker-test/php/index.php

# 运行 PHP-FPM 容器
docker run -d \\
  -v ~/docker-test/php:/var/www/html \\
  --name php-fpm \\
  php:8.2-fpm

# 查看容器状态
docker ps

# 查看 PHP 版本
docker exec php-fpm php -v

# 查看 PHP 配置
docker exec php-fpm php -i

# 进入容器查看
docker exec -it php-fpm bash
ls /var/www/html
cat /var/www/html/index.php
exit`,language:"bash"},{title:"3.2 Nginx + PHP-FPM 联动",content:`Nginx 负责处理静态文件和转发 PHP 请求给 PHP-FPM。

工作流程：
1. 用户访问 .php 文件
2. Nginx 接收请求
3. Nginx 转发给 PHP-FPM（9000端口）
4. PHP-FPM 处理并返回结果
5. Nginx 返回给用户

关键配置：
• fastcgi_pass php-fpm:9000
• 容器名作为主机名`,code:`# 创建 Nginx 配置文件
mkdir -p ~/docker-test
cat > ~/docker-test/nginx.conf << 'EOF'
server {
    listen 80;
    root /var/www/html;
    index index.php index.html;

    location ~ \\.php$ {
        fastcgi_pass php-fpm:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
EOF

# 创建网络（让容器互相通信）
docker network create php-net

# 运行 PHP-FPM
docker run -d \\
  --network php-net \\
  --name php-fpm \\
  -v ~/docker-test/php:/var/www/html \\
  php:8.2-fpm

# 运行 Nginx
docker run -d \\
  --network php-net \\
  --name nginx \\
  -p 8080:80 \\
  -v ~/docker-test/php:/var/www/html \\
  -v ~/docker-test/nginx.conf:/etc/nginx/conf.d/default.conf \\
  nginx

# 访问 localhost:8080 看到 phpinfo`,language:"bash"},{title:"3.3 测试 PHP 功能",content:"创建测试文件验证 PHP 环境是否正常。",code:`# 创建测试文件
cat > ~/docker-test/php/test.php << 'EOF'
<?php
echo "<h1>PHP 测试</h1>";
echo "<p>PHP 版本：" . PHP_VERSION . "</p>";
echo "<p>当前时间：" . date('Y-m-d H:i:s') . "</p>";

// 测试文件操作
$file = '/var/www/html/test.txt';
file_put_contents($file, "Hello from PHP!");
echo "<p>文件写入成功</p>";

// 测试数组
$arr = ['name' => '张三', 'age' => 25];
echo "<pre>";
print_r($arr);
echo "</pre>";
?>
EOF

# 访问 localhost:8080/test.php`,language:"bash"},{title:"3.4 常见问题排查",content:`遇到问题时的排查步骤。

常见问题：
• 502 Bad Gateway - PHP-FPM 未启动或网络不通
• 404 Not Found - 文件路径不对
• 403 Forbidden - 权限问题
• File not found - Nginx 和 PHP 挂载路径不一致`,code:`# 检查容器是否运行
docker ps

# 检查 PHP-FPM 日志
docker logs php-fpm

# 检查 Nginx 日志
docker logs nginx

# 检查网络连接
docker exec nginx ping php-fpm

# 进入 Nginx 容器检查文件
docker exec nginx ls -la /var/www/html

# 进入 PHP 容器检查文件
docker exec php-fpm ls -la /var/www/html

# 测试 PHP-FPM 是否监听 9000 端口
docker exec php-fpm netstat -tuln | grep 9000

# 重启容器
docker restart php-fpm nginx`,language:"bash"}]},c={id:"docker-database",title:"第四阶段：添加 MySQL 和 Redis（2-3天）",sections:[{title:"4.1 运行 MySQL 容器",content:`MySQL 是最常用的关系型数据库。

环境变量：
• MYSQL_ROOT_PASSWORD - root 密码（必需）
• MYSQL_DATABASE - 创建数据库
• MYSQL_USER - 创建用户
• MYSQL_PASSWORD - 用户密码`,code:`# 运行 MySQL 容器
docker run -d \\
  --network php-net \\
  --name mysql \\
  -e MYSQL_ROOT_PASSWORD=root123 \\
  -e MYSQL_DATABASE=tp6_test \\
  -p 3306:3306 \\
  mysql:8.0

# 查看 MySQL 日志
docker logs mysql

# 等待 MySQL 启动完成（看到 ready for connections）

# 进入 MySQL 容器
docker exec -it mysql bash

# 连接 MySQL
mysql -uroot -proot123

# 查看数据库
SHOW DATABASES;

# 使用数据库
USE tp6_test;

# 创建测试表
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(100)
);

# 插入测试数据
INSERT INTO users (name, email) VALUES ('张三', 'zhangsan@example.com');

# 查询数据
SELECT * FROM users;

# 退出
exit
exit`,language:"bash"},{title:"4.2 运行 Redis 容器",content:`Redis 是高性能的键值存储数据库，常用于缓存。

Redis 特点：
• 内存存储，速度快
• 支持多种数据类型
• 持久化支持
• 发布订阅功能`,code:`# 运行 Redis 容器
docker run -d \\
  --network php-net \\
  --name redis \\
  -p 6379:6379 \\
  redis:alpine

# 查看 Redis 日志
docker logs redis

# 进入 Redis 容器
docker exec -it redis sh

# 连接 Redis
redis-cli

# 测试 Redis
SET name "张三"
GET name
KEYS *

# 退出
exit
exit`,language:"bash"},{title:"4.3 PHP 安装扩展",content:`PHP 需要安装 MySQL 和 Redis 扩展才能连接数据库。

常用扩展：
• pdo_mysql - MySQL 扩展
• redis - Redis 扩展
• gd - 图像处理
• zip - 压缩文件`,code:`# 进入 PHP 容器
docker exec -it php-fpm bash

# 安装 MySQL 扩展
docker-php-ext-install pdo_mysql

# 安装 Redis 扩展
pecl install redis
docker-php-ext-enable redis

# 查看已安装的扩展
php -m

# 退出容器
exit

# 重启 PHP 容器使扩展生效
docker restart php-fpm`,language:"bash"},{title:"4.4 PHP 连接 MySQL",content:"测试 PHP 连接 MySQL 数据库。",code:`# 创建测试文件
cat > ~/docker-test/php/mysql-test.php << 'EOF'
<?php
try {
    $pdo = new PDO(
        'mysql:host=mysql;dbname=tp6_test',
        'root',
        'root123'
    );
    echo "<h2>MySQL 连接成功！</h2>";
    
    // 查询数据
    $stmt = $pdo->query("SELECT * FROM users");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo "<pre>";
    print_r($users);
    echo "</pre>";
    
} catch (PDOException $e) {
    echo "连接失败：" . $e->getMessage();
}
?>
EOF

# 访问 localhost:8080/mysql-test.php`,language:"bash"},{title:"4.5 PHP 连接 Redis",content:"测试 PHP 连接 Redis。",code:`# 创建测试文件
cat > ~/docker-test/php/redis-test.php << 'EOF'
<?php
try {
    $redis = new Redis();
    $redis->connect('redis', 6379);
    
    echo "<h2>Redis 连接成功！</h2>";
    
    // 设置值
    $redis->set('test_key', 'Hello Redis!');
    
    // 获取值
    $value = $redis->get('test_key');
    echo "<p>test_key = $value</p>";
    
    // 设置过期时间（60秒）
    $redis->setex('temp_key', 60, 'Temporary Value');
    
    // 查看所有键
    $keys = $redis->keys('*');
    echo "<pre>";
    print_r($keys);
    echo "</pre>";
    
} catch (Exception $e) {
    echo "连接失败：" . $e->getMessage();
}
?>
EOF

# 访问 localhost:8080/redis-test.php`,language:"bash"},{title:"4.6 完整的 LNMP 环境",content:`现在我们已经搭建了完整的 LNMP 环境。

环境组成：
• L - Linux（Docker 宿主机）
• N - Nginx（Web 服务器）
• M - MySQL（数据库）
• P - PHP（编程语言）

额外组件：
• Redis（缓存）

下一步：
• 使用 Docker Compose 简化管理
• 一键启动所有服务`,code:`# 查看所有容器
docker ps

# 应该看到：
# - nginx
# - php-fpm
# - mysql
# - redis

# 查看网络
docker network inspect php-net

# 测试完整流程
# 1. 访问 localhost:8080 - 看到 phpinfo
# 2. 访问 localhost:8080/mysql-test.php - 测试 MySQL
# 3. 访问 localhost:8080/redis-test.php - 测试 Redis

# 停止所有容器
docker stop nginx php-fpm mysql redis

# 删除所有容器
docker rm nginx php-fpm mysql redis

# 删除网络
docker network rm php-net`,language:"bash"}]},r={id:"docker-compose",title:"第五阶段：使用 Docker Compose（3-4天）",sections:[{title:"5.1 Docker Compose 简介",content:`Docker Compose 是用于定义和运行多容器应用的工具。

为什么需要 Compose：
• 手动管理多个容器太麻烦
• 容器之间的依赖关系复杂
• 需要记住很多命令和参数

Compose 的优势：
• 一个文件定义所有服务
• 一条命令启动所有容器
• 自动创建网络
• 管理容器依赖关系`,code:`# 安装 Docker Compose（Ubuntu）
sudo apt-get install docker-compose-plugin

# 验证安装
docker compose version

# 输出类似：
# Docker Compose version v2.20.0`,language:"bash"},{title:"5.2 编写 docker-compose.yml",content:`创建 docker-compose.yml 文件定义所有服务。

文件结构：
• version: Compose 文件版本
• services: 定义所有服务
• networks: 定义网络
• volumes: 定义数据卷`,code:`# 创建项目目录
mkdir -p ~/docker-compose-test
cd ~/docker-compose-test

# 创建 docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  nginx:
    image: nginx:latest
    ports:
      - "8080:80"
    volumes:
      - ./php:/var/www/html
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - php
    networks:
      - app-net

  php:
    image: php:8.2-fpm
    volumes:
      - ./php:/var/www/html
    networks:
      - app-net

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root123
      MYSQL_DATABASE: tp6_test
    ports:
      - "3306:3306"
    volumes:
      - mysql-data:/var/lib/mysql
    networks:
      - app-net

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    networks:
      - app-net

networks:
  app-net:

volumes:
  mysql-data:
EOF`,language:"yaml"},{title:"5.3 Compose 常用命令",content:`掌握 Docker Compose 的常用命令。

基本命令：
• up - 启动服务
• down - 停止并删除服务
• ps - 查看服务状态
• logs - 查看日志
• restart - 重启服务`,code:`# 启动所有服务（后台运行）
docker compose up -d

# 查看服务状态
docker compose ps

# 查看所有服务日志
docker compose logs

# 查看特定服务日志
docker compose logs php

# 实时查看日志
docker compose logs -f

# 停止所有服务
docker compose stop

# 启动所有服务
docker compose start

# 重启特定服务
docker compose restart php

# 停止并删除所有服务
docker compose down

# 停止并删除服务、网络、数据卷
docker compose down -v

# 重新构建并启动
docker compose up -d --build`,language:"bash"},{title:"5.4 完整项目示例",content:"创建一个完整的项目，包含所有配置文件。",code:`# 创建项目结构
mkdir -p ~/my-project/{php,nginx}
cd ~/my-project

# 创建 PHP 测试文件
cat > php/index.php << 'EOF'
<?php
phpinfo();
?>
EOF

# 创建 Nginx 配置
cat > nginx.conf << 'EOF'
server {
    listen 80;
    root /var/www/html;
    index index.php index.html;

    location ~ \\.php$ {
        fastcgi_pass php:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
EOF

# 创建 docker-compose.yml（使用上面的配置）

# 启动项目
docker compose up -d

# 查看状态
docker compose ps

# 访问 localhost:8080`,language:"bash"}]},e={chapter3:n,chapter4:c,chapter5:r},p={id:"docker-dockerfile",title:"第六阶段：自定义镜像（Dockerfile）（3-5天）",sections:[{title:"6.1 为什么需要自定义镜像",content:`官方 PHP 镜像缺少很多扩展和工具，需要自定义。

官方镜像的问题：
• 没有 MySQL、Redis 扩展
• 没有 Composer
• 没有常用工具（git、zip等）
• 每次都要手动安装

自定义镜像的优势：
• 一次构建，到处使用
• 包含所有需要的扩展
• 团队统一环境
• 加快部署速度`,code:null},{title:"6.2 编写 Dockerfile",content:`Dockerfile 是构建镜像的配置文件。

常用指令：
• FROM - 基础镜像
• RUN - 执行命令
• COPY - 复制文件
• WORKDIR - 工作目录
• EXPOSE - 暴露端口
• CMD - 启动命令`,code:`# 创建 Dockerfile
cat > Dockerfile << 'EOF'
# 基于官方 PHP 8.2 FPM 镜像
FROM php:8.2-fpm

# 安装系统依赖
RUN apt-get update && apt-get install -y \\
    git \\
    zip \\
    unzip \\
    libzip-dev \\
    && rm -rf /var/lib/apt/lists/*

# 安装 PHP 扩展
RUN docker-php-ext-install \\
    pdo_mysql \\
    zip \\
    opcache

# 安装 Redis 扩展
RUN pecl install redis && docker-php-ext-enable redis

# 安装 Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 设置工作目录
WORKDIR /var/www/html

# 暴露 9000 端口
EXPOSE 9000

# 启动 PHP-FPM
CMD ["php-fpm"]
EOF`,language:"dockerfile"},{title:"6.3 构建镜像",content:`使用 docker build 命令构建自定义镜像。

构建参数：
• -t 镜像名:标签
• . 构建上下文（当前目录）
• -f 指定 Dockerfile`,code:`# 构建镜像
docker build -t my-php:8.2 .

# 查看构建过程
# Step 1/8 : FROM php:8.2-fpm
# Step 2/8 : RUN apt-get update...
# ...
# Successfully built abc123
# Successfully tagged my-php:8.2

# 查看镜像
docker images | grep my-php

# 测试镜像
docker run -d --name test-php my-php:8.2

# 进入容器验证
docker exec test-php php -m | grep -E "pdo_mysql|redis"

# 验证 Composer
docker exec test-php composer --version

# 删除测试容器
docker rm -f test-php`,language:"bash"},{title:"6.4 在 Compose 中使用自定义镜像",content:"修改 docker-compose.yml 使用自定义镜像。",code:`# 方式一：使用已构建的镜像
version: '3.8'

services:
  php:
    image: my-php:8.2
    volumes:
      - ./php:/var/www/html
    networks:
      - app-net

# 方式二：自动构建
version: '3.8'

services:
  php:
    build: .
    # 或者指定 Dockerfile 路径
    # build:
    #   context: .
    #   dockerfile: Dockerfile
    volumes:
      - ./php:/var/www/html
    networks:
      - app-net

# 构建并启动
docker compose up -d --build`,language:"yaml"},{title:"6.5 优化 Dockerfile",content:`优化 Dockerfile 减小镜像体积，提升构建速度。

优化技巧：
• 合并 RUN 指令
• 清理缓存文件
• 使用 .dockerignore
• 多阶段构建`,code:`# 优化后的 Dockerfile
FROM php:8.2-fpm

# 合并命令，减少层数
RUN apt-get update && apt-get install -y \\
    git zip unzip libzip-dev \\
    && docker-php-ext-install pdo_mysql zip opcache \\
    && pecl install redis && docker-php-ext-enable redis \\
    && rm -rf /var/lib/apt/lists/* \\
    && apt-get clean

# 安装 Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 配置 PHP
RUN echo "memory_limit = 256M" > /usr/local/etc/php/conf.d/memory.ini \\
    && echo "upload_max_filesize = 20M" >> /usr/local/etc/php/conf.d/memory.ini

WORKDIR /var/www/html

EXPOSE 9000

CMD ["php-fpm"]

# 创建 .dockerignore
cat > .dockerignore << 'EOF'
.git
.gitignore
README.md
.env
node_modules
vendor
EOF`,language:"dockerfile"},{title:"6.6 常用 PHP 扩展安装",content:"整理常用 PHP 扩展的安装方法。",code:`# 完整的 PHP 镜像（包含常用扩展）
FROM php:8.2-fpm

# 安装系统依赖
RUN apt-get update && apt-get install -y \\
    git zip unzip \\
    libzip-dev \\
    libpng-dev \\
    libjpeg-dev \\
    libfreetype6-dev \\
    && rm -rf /var/lib/apt/lists/*

# 安装 PHP 核心扩展
RUN docker-php-ext-install \\
    pdo_mysql \\
    zip \\
    opcache \\
    bcmath

# 安装 GD 扩展（图像处理）
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \\
    && docker-php-ext-install gd

# 安装 PECL 扩展
RUN pecl install redis && docker-php-ext-enable redis

# 安装 Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# PHP 配置
COPY php.ini /usr/local/etc/php/conf.d/custom.ini

WORKDIR /var/www/html

CMD ["php-fpm"]`,language:"dockerfile"}]},i={id:"docker-tp6",title:"第七阶段：TP6 实战项目（5-7天）",sections:[{title:"7.1 创建 TP6 项目",content:`使用 Composer 创建 ThinkPHP 6 项目。

项目结构：
• app/ - 应用目录
• config/ - 配置文件
• public/ - 入口文件
• runtime/ - 运行时文件
• vendor/ - 依赖包`,code:`# 创建项目目录
mkdir -p ~/tp6-docker
cd ~/tp6-docker

# 使用 Composer 创建 TP6 项目
docker run --rm \\
  -v $(pwd):/app \\
  composer:latest \\
  create-project topthink/think tp6

# 查看项目结构
ls -la tp6/

# 设置权限
chmod -R 777 tp6/runtime/`,language:"bash"},{title:"7.2 配置 Nginx 支持 TP6",content:`配置 Nginx 支持 TP6 的路由规则。

关键配置：
• root 指向 public 目录
• try_files 支持路由
• fastcgi_param 传递参数`,code:`# 创建 Nginx 配置
cat > nginx.conf << 'EOF'
server {
    listen 80;
    server_name localhost;
    root /var/www/html/tp6/public;
    index index.php index.html;

    # TP6 路由支持
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # PHP 处理
    location ~ \\.php$ {
        fastcgi_pass php:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    # 禁止访问隐藏文件
    location ~ /\\. {
        deny all;
    }
}
EOF`,language:"nginx"},{title:"7.3 完整的 docker-compose.yml",content:"为 TP6 项目创建完整的 Docker Compose 配置。",code:`cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./:/var/www/html
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - php
    networks:
      - tp6-net
    restart: always

  php:
    build: .
    volumes:
      - ./:/var/www/html
    networks:
      - tp6-net
    restart: always

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root123
      MYSQL_DATABASE: tp6_db
      MYSQL_USER: tp6_user
      MYSQL_PASSWORD: tp6_pass
    ports:
      - "3306:3306"
    volumes:
      - mysql-data:/var/lib/mysql
    networks:
      - tp6-net
    restart: always

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    networks:
      - tp6-net
    restart: always

networks:
  tp6-net:
    driver: bridge

volumes:
  mysql-data:
EOF`,language:"yaml"},{title:"7.4 配置 TP6 数据库连接",content:"修改 TP6 的数据库配置文件。",code:`# 修改 tp6/.env 文件
cat > tp6/.env << 'EOF'
APP_DEBUG = true

[APP]
DEFAULT_TIMEZONE = Asia/Shanghai

[DATABASE]
TYPE = mysql
HOSTNAME = mysql
DATABASE = tp6_db
USERNAME = tp6_user
PASSWORD = tp6_pass
HOSTPORT = 3306
CHARSET = utf8mb4
DEBUG = true

[REDIS]
HOST = redis
PORT = 6379
PASSWORD =
SELECT = 0
EOF

# 测试数据库连接
# 创建测试控制器
mkdir -p tp6/app/controller
cat > tp6/app/controller/Test.php << 'EOF'
<?php
namespace app\\controller;

use think\\facade\\Db;

class Test
{
    public function index()
    {
        // 测试数据库连接
        try {
            $result = Db::query('SELECT VERSION()');
            return json([
                'code' => 200,
                'msg' => '数据库连接成功',
                'data' => $result
            ]);
        } catch (\\Exception $e) {
            return json([
                'code' => 500,
                'msg' => '数据库连接失败：' . $e->getMessage()
            ]);
        }
    }
}
EOF`,language:"bash"},{title:"7.5 启动项目",content:"启动完整的 TP6 项目。",code:`# 启动所有服务
docker compose up -d --build

# 查看服务状态
docker compose ps

# 查看日志
docker compose logs -f

# 等待 MySQL 启动完成
docker compose logs mysql | grep "ready for connections"

# 访问项目
# http://localhost:8080
# http://localhost:8080/test

# 进入 PHP 容器
docker compose exec php bash

# 在容器内执行 TP6 命令
php think version
php think make:controller User

# 退出容器
exit`,language:"bash"},{title:"7.6 常用开发命令",content:"TP6 项目开发中的常用 Docker 命令。",code:`# 查看服务状态
docker compose ps

# 重启 PHP 服务（修改配置后）
docker compose restart php

# 查看 PHP 日志
docker compose logs -f php

# 查看 Nginx 日志
docker compose logs -f nginx

# 进入 PHP 容器执行命令
docker compose exec php php think migrate:run
docker compose exec php php think optimize:schema

# 安装新的 Composer 包
docker compose exec php composer require topthink/think-queue

# 清理缓存
docker compose exec php php think clear

# 数据库迁移
docker compose exec php php think migrate:run

# 停止所有服务
docker compose down

# 完全清理（包括数据卷）
docker compose down -v`,language:"bash"},{title:"7.7 项目部署到生产环境",content:`将 TP6 项目部署到生产服务器。

部署步骤：
1. 上传代码到服务器
2. 修改环境变量
3. 启动服务
4. 配置域名和 HTTPS`,code:`# 1. 在服务器上克隆项目
git clone https://github.com/your/project.git
cd project

# 2. 修改生产环境配置
cat > tp6/.env << 'EOF'
APP_DEBUG = false

[DATABASE]
TYPE = mysql
HOSTNAME = mysql
DATABASE = tp6_db
USERNAME = tp6_user
PASSWORD = your_secure_password
HOSTPORT = 3306

[REDIS]
HOST = redis
PORT = 6379
EOF

# 3. 修改 docker-compose.yml 端口
# 将 8080:80 改为 80:80

# 4. 启动服务
docker compose up -d --build

# 5. 配置 Nginx 反向代理（如果需要）
# 6. 配置 SSL 证书（Let's Encrypt）

# 7. 设置定时任务
# 在宿主机 crontab 中添加：
# */5 * * * * cd /path/to/project && docker compose exec -T php php think queue:work

# 8. 监控和日志
docker compose logs -f --tail=100`,language:"bash"}]},t={chapter6:p,chapter7:i},a={id:"docker",name:"Docker",icon:"🐳",status:"learning",description:"从零到精通：Docker + PHP/TP6 完整实战路线",chapters:[o,s,e.chapter3,e.chapter4,e.chapter5,t.chapter6,t.chapter7]},d={id:"linux",name:"Linux",icon:"🐧",status:"planned",description:"Linux 系统管理与运维实战",chapters:[{id:"linux-basics",title:"第一章：Linux 基础入门",sections:[{title:"1.1 Linux 简介与发行版",content:`Linux 是一个开源的类 Unix 操作系统内核，广泛应用于服务器、嵌入式设备等领域。

主流发行版：
• Ubuntu：易用，适合新手和桌面用户
• CentOS/Rocky Linux：企业级，稳定可靠
• Debian：社区驱动，纯净稳定
• Arch Linux：滚动更新，高度定制
• Red Hat Enterprise Linux：商业支持

选择建议：
• 学习和开发：Ubuntu
• 生产服务器：CentOS/Rocky Linux
• 追求稳定：Debian
• 高级用户：Arch Linux`,code:null},{title:"1.2 Linux 文件系统结构",content:`Linux 采用树形目录结构，一切皆文件。

重要目录：
• /：根目录
• /bin：基本命令
• /etc：配置文件
• /home：用户主目录
• /var：可变数据（日志、缓存）
• /usr：用户程序
• /tmp：临时文件
• /opt：第三方软件`,code:null}]}]},l={id:"php",name:"PHP",icon:"🐘",status:"planned",description:"PHP 后端开发从入门到精通",chapters:[{id:"php-basics",title:"第一章：PHP 基础语法",sections:[{title:"1.1 PHP 简介与环境搭建",content:`PHP 是一种广泛使用的服务器端脚本语言，特别适合 Web 开发。

PHP 特点：
• 易学易用，语法简洁
• 丰富的框架生态（Laravel、Symfony、ThinkPHP）
• 强大的数据库支持
• 大量的开源项目和社区资源
• 跨平台支持

应用场景：
• Web 网站开发
• API 接口开发
• 内容管理系统（WordPress、Drupal）
• 电商系统（Magento、OpenCart）`,code:null},{title:"1.2 PHP 基本语法",content:`PHP 代码嵌入在 HTML 中，使用 <?php ?> 标签。

基本规则：
• PHP 文件以 .php 结尾
• 语句以分号结束
• 变量以 $ 开头
• 大小写敏感（变量）
• 支持单行和多行注释`,code:`<?php
// 单行注释

/*
 * 多行注释
 */

// 输出
echo "Hello, World!";
print "Hello, PHP!";

// 变量
$name = "张三";
$age = 25;
$price = 99.99;
$isActive = true;

// 数组
$fruits = array("苹果", "香蕉", "橙子");
$person = [
    "name" => "张三",
    "age" => 25
];

// 常量
define("SITE_NAME", "我的网站");
const API_KEY = "abc123";

?>`,language:"php"}]}]},m={id:"redis",name:"Redis",icon:"🔴",status:"planned",description:"Redis 缓存与数据结构深度应用",chapters:[{id:"redis-basics",title:"第一章：Redis 入门",sections:[{title:"1.1 Redis 简介",content:`Redis 是一个开源的内存数据结构存储系统，可用作数据库、缓存和消息代理。

核心特性：
• 高性能：内存存储，读写速度极快（10万+ QPS）
• 丰富的数据类型：String、Hash、List、Set、Sorted Set、Bitmap、HyperLogLog、Geo
• 持久化：RDB 快照和 AOF 日志两种方式
• 主从复制：支持读写分离
• 集群支持：Redis Cluster 分布式方案
• 发布订阅：消息队列功能
• 事务支持：MULTI/EXEC 命令

应用场景：
• 缓存：减轻数据库压力
• 会话存储：分布式 Session
• 排行榜：Sorted Set 实现
• 计数器：原子操作
• 消息队列：List 或 Stream
• 分布式锁：SETNX 实现`,code:null},{title:"1.2 Redis 安装与配置",content:`在 Ubuntu 上安装 Redis 服务器。

安装方式：
• APT 包管理器（推荐）
• 源码编译
• Docker 容器`,code:`# 使用 APT 安装
sudo apt-get update
sudo apt-get install redis-server

# 启动 Redis 服务
sudo systemctl start redis-server

# 设置开机自启
sudo systemctl enable redis-server

# 查看状态
sudo systemctl status redis-server

# 连接 Redis
redis-cli

# 测试连接
redis-cli ping
# 输出：PONG

# 查看 Redis 信息
redis-cli info`,language:"bash"}]}]},h={id:"elk",name:"ELK Stack",icon:"📊",status:"planned",description:"Elasticsearch + Logstash + Kibana 日志分析完整方案",chapters:[{id:"elk-basics",title:"第一章：ELK Stack 简介",sections:[{title:"1.1 ELK Stack 是什么",content:`ELK Stack 是三个开源项目的首字母缩写：Elasticsearch、Logstash 和 Kibana。

组件功能：
• Elasticsearch：分布式搜索和分析引擎，存储和检索数据
• Logstash：数据收集和处理管道，收集、转换、发送数据
• Kibana：数据可视化平台，创建图表和仪表板
• Beats：轻量级数据采集器（Filebeat、Metricbeat 等）

工作流程：
1. Beats/Logstash 收集日志数据
2. Logstash 处理和转换数据
3. Elasticsearch 存储和索引数据
4. Kibana 可视化展示数据

应用场景：
• 日志分析：应用日志、系统日志、访问日志
• 应用监控：性能指标、错误追踪
• 安全分析：安全事件、威胁检测
• 业务分析：用户行为、业务指标`,code:null},{title:"1.2 ELK Stack 架构",content:`ELK Stack 的典型架构和数据流。

架构层次：
• 数据源层：应用服务器、数据库、网络设备
• 采集层：Beats、Logstash
• 存储层：Elasticsearch 集群
• 展示层：Kibana

数据流：
数据源 → Beats → Logstash → Elasticsearch → Kibana

高可用架构：
• Elasticsearch 集群（3+ 节点）
• Logstash 多实例
• Kibana 负载均衡
• Redis/Kafka 作为缓冲队列`,code:null}]}]},g=[a,d,l,m,h];export{g as t};
