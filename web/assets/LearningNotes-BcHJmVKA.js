import{_ as S,o as R,a,c,e,F as p,r as u,u as m,t as r,m as v,p as C,B as k,f as l,g,C as P,D as L,E,j as M,h as N,G as A,T,H as _}from"./index-Cepp_1t4.js";const q={id:"docker",name:"Docker",icon:"🐳",status:"learning",description:"容器化技术与 Ubuntu Linux 部署实践",chapters:[{id:"docker-basics",title:"第一章：基础入门",sections:[{title:"Docker 是什么",content:`Docker 是一个开源的容器化平台，它允许开发者将应用及其依赖打包到一个轻量级、可移植的容器中。

核心概念：
• 容器：应用运行的隔离环境
• 镜像：容器的模板，包含应用和依赖
• 仓库：存储和分发镜像的地方

优势：
• 环境一致性：开发、测试、生产环境完全一致
• 快速部署：秒级启动，比虚拟机快得多
• 资源高效：共享宿主机内核，占用资源少
• 易于扩展：轻松实现水平扩展`,code:null},{title:"Ubuntu 上安装 Docker",content:"在 Ubuntu Linux 上安装 Docker Engine 的完整步骤：",code:`# 1. 更新软件包索引
sudo apt-get update

# 2. 安装必要的依赖
sudo apt-get install \\
    ca-certificates \\
    curl \\
    gnupg \\
    lsb-release

# 3. 添加 Docker 官方 GPG 密钥
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 4. 设置 Docker 仓库
echo \\
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 5. 安装 Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 6. 验证安装
sudo docker run hello-world`,language:"bash"},{title:"Docker 架构",content:`Docker 使用客户端-服务器架构：

• Docker Client（客户端）：用户与 Docker 交互的接口
• Docker Daemon（守护进程）：负责构建、运行和分发容器
• Docker Registry（仓库）：存储 Docker 镜像（如 Docker Hub）

工作流程：
1. 用户通过 Docker Client 发送命令
2. Docker Daemon 接收并执行命令
3. 需要时从 Registry 拉取镜像
4. 基于镜像创建并运行容器`,code:null}]},{id:"docker-images",title:"第二章：镜像管理",sections:[{title:"镜像基本操作",content:"Docker 镜像是容器的基础，掌握镜像操作是使用 Docker 的关键。",code:`# 搜索镜像
docker search nginx

# 拉取镜像
docker pull nginx:latest

# 查看本地镜像
docker images

# 查看镜像详细信息
docker inspect nginx:latest

# 删除镜像
docker rmi nginx:latest

# 导出镜像
docker save -o nginx.tar nginx:latest

# 导入镜像
docker load -i nginx.tar`,language:"bash"},{title:"Dockerfile 编写",content:`Dockerfile 是构建自定义镜像的配置文件，使用声明式语法定义镜像内容。

常用指令：
• FROM：指定基础镜像
• RUN：执行命令
• COPY/ADD：复制文件
• WORKDIR：设置工作目录
• EXPOSE：声明端口
• CMD/ENTRYPOINT：容器启动命令`,code:`# 基于 Node.js 官方镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json
COPY package*.json ./

# 安装依赖
RUN npm install --production

# 复制应用代码
COPY . .

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["node", "server.js"]`,language:"dockerfile"},{title:"构建镜像",content:"使用 Dockerfile 构建自定义镜像的完整流程。",code:`# 构建镜像（当前目录）
docker build -t myapp:1.0 .

# 指定 Dockerfile 路径
docker build -f /path/to/Dockerfile -t myapp:1.0 .

# 使用构建参数
docker build --build-arg NODE_ENV=production -t myapp:1.0 .

# 不使用缓存构建
docker build --no-cache -t myapp:1.0 .

# 查看构建历史
docker history myapp:1.0`,language:"bash"},{title:"镜像优化技巧",content:`减小镜像体积，提升构建和部署效率的最佳实践。

优化策略：
• 使用轻量级基础镜像（alpine）
• 合并 RUN 指令减少层数
• 使用 .dockerignore 排除不必要文件
• 多阶段构建分离编译和运行环境
• 清理缓存和临时文件`,code:`# 多阶段构建示例
# 构建阶段
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 运行阶段
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]`,language:"dockerfile"}]},{id:"docker-containers",title:"第三章：容器操作",sections:[{title:"容器生命周期",content:"理解容器的创建、启动、停止、删除等完整生命周期。",code:`# 创建并启动容器
docker run -d --name mynginx -p 80:80 nginx

# 查看运行中的容器
docker ps

# 查看所有容器（包括停止的）
docker ps -a

# 停止容器
docker stop mynginx

# 启动已停止的容器
docker start mynginx

# 重启容器
docker restart mynginx

# 删除容器
docker rm mynginx

# 强制删除运行中的容器
docker rm -f mynginx`,language:"bash"},{title:"容器交互",content:"与运行中的容器进行交互，执行命令和查看日志。",code:`# 进入容器（交互式）
docker exec -it mynginx /bin/bash

# 在容器中执行命令
docker exec mynginx ls -la /usr/share/nginx/html

# 查看容器日志
docker logs mynginx

# 实时查看日志
docker logs -f mynginx

# 查看最近 100 行日志
docker logs --tail 100 mynginx

# 复制文件到容器
docker cp index.html mynginx:/usr/share/nginx/html/

# 从容器复制文件
docker cp mynginx:/etc/nginx/nginx.conf ./`,language:"bash"},{title:"容器资源限制",content:"限制容器使用的 CPU、内存等资源，防止单个容器占用过多资源。",code:`# 限制内存
docker run -d --name myapp --memory="512m" myapp:1.0

# 限制 CPU
docker run -d --name myapp --cpus="1.5" myapp:1.0

# 同时限制内存和 CPU
docker run -d --name myapp \\
  --memory="1g" \\
  --memory-swap="2g" \\
  --cpus="2" \\
  myapp:1.0

# 查看容器资源使用情况
docker stats myapp

# 实时监控所有容器
docker stats`,language:"bash"}]},{id:"docker-network",title:"第四章：网络配置",sections:[{title:"Docker 网络模式",content:`Docker 提供多种网络模式，适应不同的应用场景。

网络模式：
• bridge（默认）：容器通过虚拟网桥通信
• host：容器使用宿主机网络
• none：容器没有网络
• container：共享其他容器的网络
• 自定义网络：用户创建的网络`,code:`# 查看网络列表
docker network ls

# 查看网络详情
docker network inspect bridge

# 创建自定义网络
docker network create mynetwork

# 使用指定网络启动容器
docker run -d --name web --network mynetwork nginx

# 将容器连接到网络
docker network connect mynetwork mycontainer

# 断开容器网络
docker network disconnect mynetwork mycontainer

# 删除网络
docker network rm mynetwork`,language:"bash"},{title:"容器互联",content:"在同一网络中的容器可以通过容器名互相访问。",code:`# 创建自定义网络
docker network create app-network

# 启动数据库容器
docker run -d \\
  --name mysql \\
  --network app-network \\
  -e MYSQL_ROOT_PASSWORD=secret \\
  mysql:8.0

# 启动应用容器（可通过 mysql 主机名访问数据库）
docker run -d \\
  --name webapp \\
  --network app-network \\
  -e DB_HOST=mysql \\
  -e DB_USER=root \\
  -e DB_PASSWORD=secret \\
  -p 3000:3000 \\
  myapp:1.0`,language:"bash"},{title:"端口映射",content:"将容器端口映射到宿主机，使外部可以访问容器服务。",code:`# 映射单个端口
docker run -d -p 8080:80 nginx

# 映射到随机端口
docker run -d -P nginx

# 映射多个端口
docker run -d -p 80:80 -p 443:443 nginx

# 指定 IP 地址映射
docker run -d -p 127.0.0.1:8080:80 nginx

# 查看端口映射
docker port mynginx`,language:"bash"}]},{id:"docker-volumes",title:"第五章：数据管理",sections:[{title:"数据持久化方案",content:`Docker 提供三种数据持久化方式：

• Volumes（数据卷）：Docker 管理的存储，推荐方式
• Bind Mounts（绑定挂载）：挂载宿主机目录
• tmpfs：临时文件系统，存储在内存中

推荐使用 Volumes，因为：
• Docker 完全管理，更安全
• 可以在容器间共享
• 支持远程存储驱动
• 备份和迁移更方便`,code:`# 创建数据卷
docker volume create mydata

# 查看数据卷列表
docker volume ls

# 查看数据卷详情
docker volume inspect mydata

# 使用数据卷
docker run -d --name db -v mydata:/var/lib/mysql mysql:8.0

# 删除数据卷
docker volume rm mydata

# 清理未使用的数据卷
docker volume prune`,language:"bash"},{title:"挂载宿主机目录",content:"直接挂载宿主机目录到容器，适合开发环境。",code:`# 挂载当前目录
docker run -d -v $(pwd):/app myapp:1.0

# 挂载指定目录（只读）
docker run -d -v /host/path:/container/path:ro nginx

# 挂载多个目录
docker run -d \\
  -v /host/data:/app/data \\
  -v /host/logs:/app/logs \\
  myapp:1.0

# Ubuntu 上的实际示例
docker run -d \\
  --name webapp \\
  -v /home/user/app:/app \\
  -v /home/user/logs:/var/log/app \\
  -p 3000:3000 \\
  myapp:1.0`,language:"bash"},{title:"数据备份与恢复",content:"定期备份容器数据，确保数据安全。",code:`# 备份数据卷
docker run --rm \\
  -v mydata:/data \\
  -v $(pwd):/backup \\
  ubuntu tar czf /backup/mydata-backup.tar.gz /data

# 恢复数据卷
docker run --rm \\
  -v mydata:/data \\
  -v $(pwd):/backup \\
  ubuntu tar xzf /backup/mydata-backup.tar.gz -C /

# 复制数据卷
docker run --rm \\
  -v mydata:/from \\
  -v newdata:/to \\
  ubuntu cp -av /from/. /to/`,language:"bash"}]},{id:"docker-compose",title:"第六章：Docker Compose",sections:[{title:"Docker Compose 简介",content:`Docker Compose 是用于定义和运行多容器 Docker 应用的工具。

核心概念：
• 使用 YAML 文件定义服务
• 一条命令启动所有服务
• 自动创建网络和数据卷
• 适合开发、测试和生产环境

优势：
• 简化多容器管理
• 配置即代码
• 环境隔离
• 易于版本控制`,code:`# 安装 Docker Compose（Ubuntu）
sudo apt-get install docker-compose-plugin

# 验证安装
docker compose version`,language:"bash"},{title:"docker-compose.yml 编写",content:"使用 YAML 格式定义多容器应用的完整配置。",code:`version: '3.8'

services:
  # Web 应用
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DB_HOST=db
    depends_on:
      - db
      - redis
    volumes:
      - ./logs:/app/logs
    networks:
      - app-network

  # MySQL 数据库
  db:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=secret
      - MYSQL_DATABASE=myapp
    volumes:
      - db-data:/var/lib/mysql
    networks:
      - app-network

  # Redis 缓存
  redis:
    image: redis:alpine
    networks:
      - app-network

volumes:
  db-data:

networks:
  app-network:
    driver: bridge`,language:"yaml"},{title:"Compose 常用命令",content:"使用 Docker Compose 管理多容器应用的常用操作。",code:`# 启动所有服务
docker compose up -d

# 查看服务状态
docker compose ps

# 查看服务日志
docker compose logs

# 实时查看特定服务日志
docker compose logs -f web

# 停止所有服务
docker compose stop

# 停止并删除容器
docker compose down

# 停止并删除容器、网络、数据卷
docker compose down -v

# 重启服务
docker compose restart web

# 执行命令
docker compose exec web sh

# 构建或重新构建服务
docker compose build`,language:"bash"},{title:"生产环境配置",content:"针对生产环境优化 Docker Compose 配置。",code:`version: '3.8'

services:
  web:
    image: myapp:1.0
    restart: always
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '2'
          memory: 1G
        reservations:
          cpus: '1'
          memory: 512M
    ports:
      - "80:3000"
    environment:
      - NODE_ENV=production
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
    networks:
      - app-network

networks:
  app-network:
    driver: bridge`,language:"yaml"}]},{id:"docker-practice",title:"第七章：Ubuntu 部署实战",sections:[{title:"完整项目部署流程",content:`在 Ubuntu Linux 上部署一个完整的 Web 应用（前端 + 后端 + 数据库）。

项目架构：
• Nginx：反向代理和静态文件服务
• Node.js API：后端服务
• MySQL：数据库
• Redis：缓存`,code:`# 项目目录结构
/home/user/myproject/
├── docker-compose.yml
├── nginx/
│   ├── Dockerfile
│   └── nginx.conf
├── api/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
└── frontend/
    └── dist/`,language:"bash"},{title:"Nginx 配置",content:"配置 Nginx 作为反向代理，处理静态文件和 API 请求转发。",code:`# nginx/Dockerfile
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY ../frontend/dist /usr/share/nginx/html

# nginx/nginx.conf
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    upstream api {
        server api:3000;
    }

    server {
        listen 80;
        server_name localhost;

        # 静态文件
        location / {
            root /usr/share/nginx/html;
            try_files $uri $uri/ /index.html;
        }

        # API 代理
        location /api/ {
            proxy_pass http://api/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }
}`,language:"nginx"},{title:"完整 docker-compose 配置",content:"生产级别的 Docker Compose 配置文件。",code:`version: '3.8'

services:
  nginx:
    build: ./nginx
    ports:
      - "80:80"
      - "443:443"
    depends_on:
      - api
    volumes:
      - ./nginx/logs:/var/log/nginx
    restart: always
    networks:
      - frontend

  api:
    build: ./api
    environment:
      - NODE_ENV=production
      - DB_HOST=mysql
      - DB_USER=root
      - DB_PASSWORD=\${MYSQL_ROOT_PASSWORD}
      - REDIS_HOST=redis
    depends_on:
      - mysql
      - redis
    restart: always
    networks:
      - frontend
      - backend

  mysql:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=\${MYSQL_ROOT_PASSWORD}
      - MYSQL_DATABASE=myapp
    volumes:
      - mysql-data:/var/lib/mysql
      - ./mysql/init.sql:/docker-entrypoint-initdb.d/init.sql
    restart: always
    networks:
      - backend

  redis:
    image: redis:alpine
    restart: always
    networks:
      - backend

volumes:
  mysql-data:

networks:
  frontend:
  backend:`,language:"yaml"},{title:"部署和运维",content:"在 Ubuntu 服务器上部署和维护 Docker 应用。",code:`# 1. 克隆项目
git clone https://github.com/user/myproject.git
cd myproject

# 2. 配置环境变量
echo "MYSQL_ROOT_PASSWORD=your_secure_password" > .env

# 3. 构建并启动
docker compose up -d --build

# 4. 查看状态
docker compose ps

# 5. 查看日志
docker compose logs -f

# 6. 健康检查
curl http://localhost/api/health

# 7. 备份数据库
docker compose exec mysql mysqldump -u root -p myapp > backup.sql

# 8. 更新应用
git pull
docker compose up -d --build

# 9. 清理旧镜像
docker image prune -a

# 10. 监控资源
docker stats`,language:"bash"},{title:"常见问题排查",content:"生产环境中常见问题的排查和解决方法。",code:`# 查看容器日志
docker compose logs --tail=100 api

# 进入容器调试
docker compose exec api sh

# 检查网络连接
docker compose exec api ping mysql

# 查看容器资源使用
docker stats

# 重启特定服务
docker compose restart api

# 查看容器详细信息
docker inspect myproject_api_1

# 清理并重新启动
docker compose down
docker compose up -d --force-recreate

# 检查端口占用
sudo netstat -tulpn | grep :80

# 查看 Docker 磁盘使用
docker system df`,language:"bash"}]}]},U={id:"linux",name:"Linux",icon:"🐧",status:"planned",description:"Linux 系统管理与运维基础",chapters:[{id:"linux-basics",title:"第一章：Linux 基础",sections:[{title:"Linux 简介",content:`Linux 是一个开源的类 Unix 操作系统内核，广泛应用于服务器、嵌入式设备等领域。

主流发行版：
• Ubuntu：易用，适合新手
• CentOS/Rocky Linux：企业级，稳定
• Debian：社区驱动，纯净
• Arch Linux：滚动更新，高度定制`,code:null}]}]},Y={id:"php",name:"PHP",icon:"🐘",status:"planned",description:"PHP 后端开发与框架应用",chapters:[{id:"php-basics",title:"第一章：PHP 基础",sections:[{title:"PHP 简介",content:`PHP 是一种广泛使用的服务器端脚本语言，特别适合 Web 开发。

特点：
• 易学易用
• 丰富的框架生态（Laravel、Symfony）
• 强大的数据库支持
• 大量的开源项目`,code:null}]}]},$={id:"redis",name:"Redis",icon:"🔴",status:"planned",description:"Redis 缓存与数据结构应用",chapters:[{id:"redis-basics",title:"第一章：Redis 基础",sections:[{title:"Redis 简介",content:`Redis 是一个开源的内存数据结构存储系统，可用作数据库、缓存和消息代理。

核心特性：
• 高性能：内存存储，读写速度快
• 丰富的数据类型：String、Hash、List、Set、Sorted Set
• 持久化：RDB 和 AOF 两种方式
• 主从复制和集群支持`,code:null}]}]},B={id:"elk",name:"ELK Stack",icon:"📊",status:"planned",description:"Elasticsearch、Logstash、Kibana 日志分析",chapters:[{id:"elk-basics",title:"第一章：ELK 简介",sections:[{title:"ELK Stack 是什么",content:`ELK Stack 是三个开源项目的首字母缩写：Elasticsearch、Logstash 和 Kibana。

组件功能：
• Elasticsearch：分布式搜索和分析引擎
• Logstash：数据收集和处理管道
• Kibana：数据可视化平台

应用场景：
• 日志分析
• 应用监控
• 安全分析
• 业务分析`,code:null}]}]},x=[q,U,Y,$,B],H={class:"learning-page"},W={class:"container learning-content"},j={class:"learning-layout anim-fade-up"},I={class:"tech-nav glass-panel"},K={class:"tech-list"},Q=["onClick"],V={class:"tech-icon"},F={class:"tech-info"},z={class:"tech-name"},G={class:"content-area"},X={key:0,class:"tech-content glass-panel"},J={class:"tech-header"},Z={class:"tech-title-row"},ee={class:"tech-icon-large"},oe={class:"tech-desc"},te={class:"chapters-container"},ne=["onClick"],se={class:"chapter-content"},ae={class:"section-title"},ce=["innerHTML"],re={key:0,class:"code-block"},ie={class:"code-header"},de={class:"code-lang"},le=["onClick"],pe={key:1,class:"empty-state glass-panel"},ue={__name:"LearningNotes",setup(me){const i=v(null),d=v([]),h=t=>{i.value=t,t.chapters.length>0&&(d.value=[t.chapters[0].id])},D=t=>{const o=d.value.indexOf(t);o>-1?d.value.splice(o,1):d.value.push(t)},w=t=>({learning:"学习中",completed:"已完成",planned:"计划中"})[t]||t,f=t=>t?t.replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>").replace(/^(.+)$/,"<p>$1</p>"):"",O=async t=>{try{await navigator.clipboard.writeText(t),_.success("代码已复制到剪贴板")}catch{_.error("复制失败")}};return R(()=>{const t=x.find(o=>o.id==="docker");t&&h(t),document.body.style.overflow="auto",document.documentElement.style.overflow="auto"}),(t,o)=>{const y=C("el-icon");return a(),c("div",H,[o[4]||(o[4]=e("div",{class:"ambient-orb orb-1"},null,-1)),o[5]||(o[5]=e("div",{class:"ambient-orb orb-2"},null,-1)),e("div",W,[o[3]||(o[3]=e("header",{class:"learning-header anim-fade-up"},[e("h1",{class:"gradient-text"},"学习笔记"),e("p",{class:"subtitle"},"系统化的技术学习路线与实践总结")],-1)),e("div",j,[e("aside",I,[o[0]||(o[0]=e("div",{class:"nav-header"},[e("h3",null,"技术栈")],-1)),e("div",K,[(a(!0),c(p,null,u(m(x),n=>{var s;return a(),c("div",{key:n.id,class:k(["tech-item",{active:((s=i.value)==null?void 0:s.id)===n.id}]),onClick:b=>h(n)},[e("span",V,r(n.icon),1),e("div",F,[e("span",z,r(n.name),1),e("span",{class:k(["tech-status",n.status])},r(w(n.status)),3)])],10,Q)}),128))])]),e("main",G,[i.value?(a(),c("div",X,[e("div",J,[e("div",Z,[e("span",ee,r(i.value.icon),1),e("div",null,[e("h2",null,r(i.value.name),1),e("p",oe,r(i.value.description),1)])])]),e("div",te,[(a(!0),c(p,null,u(i.value.chapters,n=>(a(),c("div",{key:n.id,class:"chapter-card"},[e("div",{class:"chapter-header",onClick:s=>D(n.id)},[e("h3",null,r(n.title),1),l(y,{class:k(["toggle-icon",{expanded:d.value.includes(n.id)}])},{default:g(()=>[l(m(P))]),_:1},8,["class"])],8,ne),l(T,{name:"expand"},{default:g(()=>[L(e("div",se,[(a(!0),c(p,null,u(n.sections,(s,b)=>(a(),c("div",{key:b,class:"section"},[e("h4",ae,r(s.title),1),e("div",{class:"section-content",innerHTML:f(s.content)},null,8,ce),s.code?(a(),c("div",re,[e("div",ie,[e("span",de,r(s.language||"code"),1),e("button",{class:"copy-btn",onClick:ke=>O(s.code)},[l(y,null,{default:g(()=>[l(m(E))]),_:1}),o[1]||(o[1]=M(" 复制 ",-1))],8,le)]),e("pre",null,[e("code",null,r(s.code),1)])])):N("",!0)]))),128))],512),[[A,d.value.includes(n.id)]])]),_:2},1024)]))),128))])])):(a(),c("div",pe,[...o[2]||(o[2]=[e("div",{class:"empty-icon"},"📚",-1),e("h3",null,"选择一个技术栈开始学习",-1),e("p",null,"从左侧选择你感兴趣的技术方向",-1)])]))])])])])}}},he=S(ue,[["__scopeId","data-v-c32c977a"]]);export{he as default};
