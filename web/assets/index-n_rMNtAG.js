const e={id:"docker-intro",title:"第一章：Docker 基础概念",sections:[{title:"1.1 什么是 Docker",content:`Docker 是一个开源的应用容器引擎，让开发者可以打包应用及依赖到一个可移植的容器中。

核心价值：
• 环境一致性：开发、测试、生产环境完全一致，"在我机器上能跑"成为历史
• 快速部署：秒级启动，比虚拟机快 10-100 倍
• 资源高效：共享宿主机内核，占用资源少，一台服务器可运行数百个容器
• 易于扩展：轻松实现水平扩展和负载均衡
• 版本管理：像 Git 一样管理应用版本，支持回滚

Docker vs 虚拟机对比：
• 启动速度：虚拟机需要分钟级，Docker 只需秒级
• 资源占用：虚拟机 GB 级别，Docker MB 级别
• 性能：Docker 接近原生性能，虚拟机有明显损耗
• 隔离性：虚拟机完全隔离，Docker 进程级隔离`,code:null},{title:"1.2 Docker 核心概念",content:`理解 Docker 的三个核心概念是掌握 Docker 的关键。

镜像（Image）：
• 只读的模板，包含运行应用所需的一切（代码、运行时、库、环境变量、配置文件）
• 类似于面向对象编程中的"类"
• 可以基于其他镜像创建新镜像（继承关系）
• 分层存储架构，多个镜像可共享相同的层，节省空间
• 每一层都是只读的，修改会创建新层

容器（Container）：
• 镜像的运行实例，类似于面向对象中的"对象"
• 可以被创建、启动、停止、删除、暂停
• 容器之间相互隔离，互不影响
• 容器是临时的，删除后数据会丢失（除非使用数据卷）
• 每个容器都有自己的文件系统、网络、进程空间

仓库（Repository）：
• 集中存储和分发镜像的地方
• Docker Hub：官方公共仓库，包含数十万个镜像
• 私有仓库：企业内部使用，保护敏感镜像
• 仓库名格式：用户名/镜像名:标签`,code:null},{title:"1.3 Docker 架构详解",content:`Docker 使用客户端-服务器（C/S）架构模式。

Docker Client（客户端）：
• 用户与 Docker 交互的主要方式
• 通过命令行工具（docker）发送指令
• 可以与多个 Docker Daemon 通信
• 支持远程连接

Docker Daemon（守护进程）：
• 运行在宿主机上的后台服务
• 负责构建、运行和分发 Docker 容器
• 监听 Docker API 请求
• 管理 Docker 对象（镜像、容器、网络、数据卷）

Docker Registry（仓库）：
• 存储 Docker 镜像
• Docker Hub 是默认的公共仓库
• 可以搭建私有仓库（Harbor、Nexus）

工作流程：
1. 用户通过 Docker Client 发送命令（如 docker run）
2. Docker Daemon 接收并执行命令
3. 如果本地没有镜像，从 Registry 拉取
4. 基于镜像创建并运行容器`,code:null},{title:"1.4 Docker 的应用场景",content:`Docker 在现代软件开发和运维中有广泛的应用场景。

开发环境标准化：
• 团队成员使用相同的开发环境
• 新成员快速搭建开发环境
• 避免"在我机器上能跑"的问题

持续集成/持续部署（CI/CD）：
• 自动化构建、测试、部署流程
• 每次提交代码自动构建 Docker 镜像
• 快速回滚到任意版本

微服务架构：
• 每个微服务独立打包成容器
• 服务之间松耦合，独立部署
• 方便进行服务编排和管理

多环境部署：
• 开发、测试、预发布、生产环境一致
• 一次构建，到处运行
• 降低环境差异导致的问题

快速扩展：
• 根据负载自动扩展容器数量
• 实现弹性伸缩
• 提高资源利用率`,code:null}]},o={id:"docker-install",title:"第二章：安装与配置",sections:[{title:"2.1 Ubuntu 系统安装 Docker",content:`在 Ubuntu Linux 上安装 Docker Engine 的完整步骤。

系统要求：
• Ubuntu 20.04 LTS 或更高版本
• 64 位系统
• 内核版本 3.10 或更高

安装方式：
• 官方仓库安装（推荐）
• 脚本自动安装
• 离线安装包`,code:`# 1. 卸载旧版本（如果有）
sudo apt-get remove docker docker-engine docker.io containerd runc

# 2. 更新软件包索引
sudo apt-get update

# 3. 安装必要的依赖包
sudo apt-get install -y \\
    ca-certificates \\
    curl \\
    gnupg \\
    lsb-release

# 4. 添加 Docker 官方 GPG 密钥
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \\
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 5. 设置 Docker 稳定版仓库
echo \\
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \\
  https://download.docker.com/linux/ubuntu \\
  $(lsb_release -cs) stable" | \\
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 6. 更新软件包索引
sudo apt-get update

# 7. 安装 Docker Engine、CLI 和 Containerd
sudo apt-get install -y \\
    docker-ce \\
    docker-ce-cli \\
    containerd.io \\
    docker-buildx-plugin \\
    docker-compose-plugin

# 8. 验证安装是否成功
sudo docker --version
sudo docker run hello-world`,language:"bash"},{title:"2.2 配置 Docker 用户权限",content:`默认情况下，Docker 命令需要 root 权限。为了方便使用，可以将当前用户添加到 docker 组。

注意事项：
• docker 组的用户拥有 root 等效权限
• 仅在可信环境中使用
• 生产环境建议使用 sudo`,code:`# 1. 创建 docker 组（通常安装时已自动创建）
sudo groupadd docker

# 2. 将当前用户添加到 docker 组
sudo usermod -aG docker $USER

# 3. 激活组更改（需要重新登录或执行）
newgrp docker

# 4. 验证无需 sudo 即可运行
docker run hello-world

# 5. 查看当前用户所属组
groups`,language:"bash"},{title:"2.3 配置 Docker 镜像加速",content:`由于网络原因，从 Docker Hub 拉取镜像可能很慢。配置国内镜像加速器可以显著提升速度。

常用镜像加速器：
• 阿里云容器镜像服务
• 腾讯云容器镜像服务
• 网易云镜像中心
• Docker 中国官方镜像`,code:`# 1. 创建或编辑 Docker 配置文件
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "https://mirror.ccs.tencentyun.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://hub-mirror.c.163.com"
  ],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
EOF

# 2. 重新加载配置
sudo systemctl daemon-reload

# 3. 重启 Docker 服务
sudo systemctl restart docker

# 4. 验证配置是否生效
docker info | grep -A 5 "Registry Mirrors"`,language:"bash"},{title:"2.4 Docker 服务管理",content:`使用 systemctl 管理 Docker 服务的启动、停止和状态查看。

服务管理命令：
• 启动服务
• 停止服务
• 重启服务
• 查看状态
• 开机自启`,code:`# 启动 Docker 服务
sudo systemctl start docker

# 停止 Docker 服务
sudo systemctl stop docker

# 重启 Docker 服务
sudo systemctl restart docker

# 查看 Docker 服务状态
sudo systemctl status docker

# 设置开机自启动
sudo systemctl enable docker

# 取消开机自启动
sudo systemctl disable docker

# 查看 Docker 服务日志
sudo journalctl -u docker.service

# 实时查看日志
sudo journalctl -u docker.service -f`,language:"bash"},{title:"2.5 验证安装与基本信息",content:`安装完成后，验证 Docker 是否正常工作，并查看系统信息。

验证内容：
• Docker 版本信息
• 系统信息
• 运行测试容器`,code:`# 查看 Docker 版本
docker --version
docker version

# 查看详细系统信息
docker info

# 运行 hello-world 测试容器
docker run hello-world

# 查看 Docker 磁盘使用情况
docker system df

# 查看 Docker 事件
docker events

# 查看 Docker 系统范围的信息
docker system info`,language:"bash"}]},r={id:"docker-images",title:"第三章：镜像管理",sections:[{title:"3.1 镜像基本操作",content:`Docker 镜像是容器的基础，掌握镜像操作是使用 Docker 的关键。

镜像命名规范：
• 格式：[registry]/[namespace]/[repository]:[tag]
• 示例：docker.io/library/nginx:latest
• 默认 registry：docker.io
• 默认 namespace：library
• 默认 tag：latest`,code:`# 搜索镜像
docker search nginx
docker search --filter stars=100 nginx

# 拉取镜像
docker pull nginx
docker pull nginx:1.24
docker pull nginx:alpine

# 查看本地镜像列表
docker images
docker image ls

# 查看镜像详细信息
docker inspect nginx:latest
docker image inspect nginx:latest

# 查看镜像历史（构建层）
docker history nginx:latest

# 给镜像打标签
docker tag nginx:latest myregistry.com/nginx:v1.0

# 删除镜像
docker rmi nginx:latest
docker image rm nginx:latest

# 强制删除镜像（即使有容器在使用）
docker rmi -f nginx:latest

# 删除所有未使用的镜像
docker image prune

# 删除所有镜像
docker rmi $(docker images -q)`,language:"bash"},{title:"3.2 镜像的导入导出",content:`在没有网络或需要离线部署时，可以导出和导入镜像。

使用场景：
• 离线环境部署
• 镜像备份
• 跨环境迁移
• 版本归档

save vs export：
• save：保存镜像（包含历史和元数据）
• export：导出容器（不包含历史）`,code:`# 导出镜像到 tar 文件
docker save -o nginx.tar nginx:latest
docker save nginx:latest > nginx.tar

# 导出多个镜像
docker save -o images.tar nginx:latest mysql:8.0 redis:alpine

# 导入镜像
docker load -i nginx.tar
docker load < nginx.tar

# 查看 tar 文件内容（不导入）
tar -tvf nginx.tar

# 从容器创建镜像并导出
docker export container_name > container.tar

# 导入容器快照为镜像
docker import container.tar myimage:v1.0

# 压缩导出（节省空间）
docker save nginx:latest | gzip > nginx.tar.gz

# 导入压缩文件
gunzip -c nginx.tar.gz | docker load`,language:"bash"},{title:"3.3 Dockerfile 基础",content:`Dockerfile 是用于构建 Docker 镜像的文本文件，包含一系列指令。

常用指令：
• FROM：指定基础镜像
• RUN：执行命令
• COPY：复制文件
• ADD：复制文件（支持 URL 和自动解压）
• WORKDIR：设置工作目录
• ENV：设置环境变量
• EXPOSE：声明端口
• CMD：容器启动命令
• ENTRYPOINT：入口点
• VOLUME：声明数据卷
• USER：指定用户
• ARG：构建参数`,code:`# 基础 Dockerfile 示例
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

# 设置环境变量
ENV NODE_ENV=production

# 启动命令
CMD ["node", "server.js"]`,language:"dockerfile"},{title:"3.4 构建镜像",content:`使用 docker build 命令根据 Dockerfile 构建镜像。

构建过程：
1. 读取 Dockerfile
2. 逐行执行指令
3. 每条指令创建一个新层
4. 生成最终镜像

构建上下文：
• 构建时发送给 Docker daemon 的文件集合
• 默认为当前目录
• 使用 .dockerignore 排除不需要的文件`,code:`# 基本构建（当前目录）
docker build -t myapp:1.0 .

# 指定 Dockerfile 路径
docker build -f /path/to/Dockerfile -t myapp:1.0 .

# 使用构建参数
docker build --build-arg NODE_ENV=production -t myapp:1.0 .

# 不使用缓存构建
docker build --no-cache -t myapp:1.0 .

# 指定构建平台
docker build --platform linux/amd64 -t myapp:1.0 .

# 多标签构建
docker build -t myapp:1.0 -t myapp:latest .

# 查看构建历史
docker history myapp:1.0

# 查看镜像层详情
docker inspect myapp:1.0

# 构建时显示详细输出
docker build --progress=plain -t myapp:1.0 .`,language:"bash"},{title:"3.5 多阶段构建",content:`多阶段构建可以显著减小最终镜像的大小，分离构建环境和运行环境。

优势：
• 减小镜像体积（只包含运行时需要的文件）
• 提高安全性（不包含构建工具）
• 简化 Dockerfile
• 提高构建效率`,code:`# 多阶段构建示例
# 第一阶段：构建阶段
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 第二阶段：运行阶段
FROM node:18-alpine

WORKDIR /app

# 只复制构建产物和运行时依赖
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000
CMD ["node", "dist/server.js"]`,language:"dockerfile"},{title:"3.6 镜像优化技巧",content:`优化 Docker 镜像可以减小体积、提升构建速度和安全性。

优化策略：
• 使用轻量级基础镜像（alpine）
• 合并 RUN 指令减少层数
• 利用构建缓存
• 使用 .dockerignore
• 多阶段构建
• 清理缓存和临时文件`,code:`# 优化前（体积大）
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["node", "dist/server.js"]

# 优化后（体积小）
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
USER node
CMD ["node", "dist/server.js"]

# .dockerignore 文件内容
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.DS_Store
*.md`,language:"dockerfile"},{title:"3.7 镜像安全扫描",content:`定期扫描镜像漏洞，确保应用安全。

扫描工具：
• Docker Scout（官方）
• Trivy（开源）
• Clair（开源）
• Snyk（商业）`,code:`# 使用 Docker Scout 扫描
docker scout cves myapp:1.0

# 使用 Trivy 扫描
# 安装 Trivy
sudo apt-get install wget apt-transport-https gnupg lsb-release
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | sudo apt-key add -
echo "deb https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main" | sudo tee -a /etc/apt/sources.list.d/trivy.list
sudo apt-get update
sudo apt-get install trivy

# 扫描镜像
trivy image myapp:1.0

# 只显示高危和严重漏洞
trivy image --severity HIGH,CRITICAL myapp:1.0

# 输出为 JSON 格式
trivy image -f json -o results.json myapp:1.0`,language:"bash"}]},t={id:"docker-containers",title:"第四章：容器操作",sections:[{title:"4.1 容器生命周期管理",content:`理解容器的完整生命周期：创建、启动、运行、停止、删除。

容器状态：
• created：已创建但未启动
• running：正在运行
• paused：已暂停
• stopped：已停止
• exited：已退出
• dead：死亡状态`,code:`# 创建并启动容器
docker run -d --name mynginx nginx

# 创建容器但不启动
docker create --name mynginx nginx

# 启动已创建的容器
docker start mynginx

# 停止运行中的容器
docker stop mynginx

# 强制停止容器
docker kill mynginx

# 重启容器
docker restart mynginx

# 暂停容器
docker pause mynginx

# 恢复暂停的容器
docker unpause mynginx

# 删除容器
docker rm mynginx

# 强制删除运行中的容器
docker rm -f mynginx

# 删除所有已停止的容器
docker container prune

# 停止所有运行中的容器
docker stop $(docker ps -q)

# 删除所有容器
docker rm -f $(docker ps -aq)`,language:"bash"},{title:"4.2 容器运行参数详解",content:`docker run 命令有大量参数，掌握常用参数是关键。

常用参数分类：
• 基本参数：名称、后台运行
• 端口映射：-p, -P
• 数据卷：-v, --mount
• 网络：--network
• 环境变量：-e, --env-file
• 资源限制：--memory, --cpus
• 重启策略：--restart`,code:`# 基本运行
docker run nginx

# 后台运行并命名
docker run -d --name web nginx

# 端口映射
docker run -d -p 8080:80 nginx
docker run -d -p 127.0.0.1:8080:80 nginx

# 随机端口映射
docker run -d -P nginx

# 挂载数据卷
docker run -d -v /host/path:/container/path nginx
docker run -d -v myvolume:/data nginx

# 只读挂载
docker run -d -v /host/path:/container/path:ro nginx

# 设置环境变量
docker run -d -e NODE_ENV=production myapp
docker run -d --env-file .env myapp

# 指定网络
docker run -d --network mynetwork nginx

# 资源限制
docker run -d --memory="512m" --cpus="1.5" nginx

# 重启策略
docker run -d --restart=always nginx
docker run -d --restart=on-failure:3 nginx

# 交互式运行
docker run -it ubuntu bash

# 自动删除容器
docker run --rm nginx

# 设置主机名
docker run -d --hostname myhost nginx

# 添加 hosts 记录
docker run -d --add-host myhost:192.168.1.100 nginx`,language:"bash"},{title:"4.3 容器交互与调试",content:`与运行中的容器进行交互，执行命令和查看日志。

交互方式：
• 进入容器终端
• 执行单条命令
• 查看日志
• 复制文件
• 查看进程`,code:`# 进入容器（交互式）
docker exec -it mynginx bash
docker exec -it mynginx sh

# 在容器中执行命令
docker exec mynginx ls -la /usr/share/nginx/html
docker exec mynginx nginx -t

# 以 root 用户执行
docker exec -u root mynginx whoami

# 查看容器日志
docker logs mynginx

# 实时查看日志
docker logs -f mynginx

# 查看最近 100 行日志
docker logs --tail 100 mynginx

# 查看带时间戳的日志
docker logs -t mynginx

# 查看指定时间后的日志
docker logs --since 2024-01-01 mynginx
docker logs --since 10m mynginx

# 复制文件到容器
docker cp index.html mynginx:/usr/share/nginx/html/

# 从容器复制文件
docker cp mynginx:/etc/nginx/nginx.conf ./

# 查看容器内进程
docker top mynginx

# 查看容器详细信息
docker inspect mynginx

# 查看容器端口映射
docker port mynginx

# 查看容器文件系统变化
docker diff mynginx`,language:"bash"},{title:"4.4 容器资源限制",content:`限制容器使用的 CPU、内存等资源，防止单个容器占用过多资源。

资源类型：
• 内存限制
• CPU 限制
• 磁盘 I/O 限制
• 网络带宽限制`,code:`# 限制内存
docker run -d --name myapp --memory="512m" myapp:1.0
docker run -d --memory="1g" --memory-swap="2g" myapp:1.0

# 内存预留
docker run -d --memory-reservation="256m" myapp:1.0

# OOM 时不杀死容器
docker run -d --oom-kill-disable myapp:1.0

# 限制 CPU
docker run -d --cpus="1.5" myapp:1.0
docker run -d --cpu-shares=512 myapp:1.0

# 指定 CPU 核心
docker run -d --cpuset-cpus="0,1" myapp:1.0

# 限制磁盘 I/O
docker run -d --device-read-bps /dev/sda:1mb myapp:1.0
docker run -d --device-write-bps /dev/sda:1mb myapp:1.0

# 限制 IOPS
docker run -d --device-read-iops /dev/sda:1000 myapp:1.0

# 查看容器资源使用情况
docker stats myapp

# 实时监控所有容器
docker stats

# 只显示一次
docker stats --no-stream

# 更新运行中容器的资源限制
docker update --memory="1g" --cpus="2" myapp`,language:"bash"},{title:"4.5 容器重启策略",content:`配置容器的自动重启行为，提高服务可用性。

重启策略：
• no：不自动重启（默认）
• on-failure：失败时重启
• always：总是重启
• unless-stopped：除非手动停止`,code:`# 不自动重启
docker run -d --restart=no nginx

# 失败时重启（最多重启 3 次）
docker run -d --restart=on-failure:3 nginx

# 总是重启
docker run -d --restart=always nginx

# 除非手动停止
docker run -d --restart=unless-stopped nginx

# 更新已存在容器的重启策略
docker update --restart=always mynginx

# 查看容器重启次数
docker inspect -f "{{ .RestartCount }}" mynginx

# 查看容器重启策略
docker inspect -f "{{ .HostConfig.RestartPolicy }}" mynginx`,language:"bash"},{title:"4.6 容器健康检查",content:`配置健康检查，自动检测容器是否正常运行。

健康状态：
• starting：启动中
• healthy：健康
• unhealthy：不健康

检查方式：
• CMD：执行命令
• HTTP：HTTP 请求
• TCP：TCP 连接`,code:`# Dockerfile 中配置健康检查
FROM nginx:alpine

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost/ || exit 1

# 运行时配置健康检查
docker run -d \\
  --name web \\
  --health-cmd="curl -f http://localhost/ || exit 1" \\
  --health-interval=30s \\
  --health-timeout=3s \\
  --health-retries=3 \\
  nginx

# 查看容器健康状态
docker inspect --format='{{.State.Health.Status}}' web

# 查看健康检查日志
docker inspect --format='{{json .State.Health}}' web | jq

# 禁用健康检查
docker run -d --no-healthcheck nginx`,language:"bash"},{title:"4.7 容器日志管理",content:`配置容器日志驱动和日志轮转，避免日志文件过大。

日志驱动：
• json-file：默认，JSON 格式
• syslog：系统日志
• journald：systemd 日志
• none：不记录日志`,code:`# 配置日志驱动和大小限制
docker run -d \\
  --name web \\
  --log-driver json-file \\
  --log-opt max-size=10m \\
  --log-opt max-file=3 \\
  nginx

# 使用 syslog
docker run -d \\
  --log-driver syslog \\
  --log-opt syslog-address=tcp://192.168.1.100:514 \\
  nginx

# 不记录日志
docker run -d --log-driver none nginx

# 全局配置（/etc/docker/daemon.json）
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3",
    "labels": "production_status",
    "env": "os,customer"
  }
}

# 查看容器日志配置
docker inspect -f '{{.HostConfig.LogConfig}}' web`,language:"bash"}]},n={id:"docker-network",title:"第五章：网络管理",sections:[{title:"5.1 Docker 网络模式",content:`Docker 提供多种网络模式，适应不同的应用场景。

网络模式：
• bridge（桥接）：默认模式，容器通过虚拟网桥通信
• host（主机）：容器使用宿主机网络，性能最好但隔离性差
• none（无网络）：容器没有网络接口
• container（容器）：共享其他容器的网络命名空间
• 自定义网络：用户创建的网络，支持服务发现`,code:`# 查看网络列表
docker network ls

# 查看网络详细信息
docker network inspect bridge

# 使用默认 bridge 网络
docker run -d --name web1 nginx

# 使用 host 网络
docker run -d --network host nginx

# 使用 none 网络
docker run -d --network none nginx

# 共享其他容器的网络
docker run -d --name web1 nginx
docker run -d --network container:web1 busybox

# 查看容器网络配置
docker inspect -f '{{.NetworkSettings.Networks}}' web1`,language:"bash"},{title:"5.2 自定义网络",content:`创建自定义网络，实现容器间的服务发现和隔离。

自定义网络优势：
• 自动 DNS 解析（容器名即主机名）
• 更好的隔离性
• 可以动态连接和断开
• 支持网络别名`,code:`# 创建自定义桥接网络
docker network create mynetwork

# 创建指定子网的网络
docker network create --subnet=172.18.0.0/16 mynetwork

# 创建指定网关的网络
docker network create \\
  --subnet=172.18.0.0/16 \\
  --gateway=172.18.0.1 \\
  mynetwork

# 创建指定驱动的网络
docker network create --driver bridge mynetwork

# 使用自定义网络启动容器
docker run -d --name web --network mynetwork nginx

# 将容器连接到网络
docker network connect mynetwork web

# 断开容器网络
docker network disconnect mynetwork web

# 删除网络
docker network rm mynetwork

# 删除所有未使用的网络
docker network prune`,language:"bash"},{title:"5.3 容器互联与服务发现",content:`在同一自定义网络中的容器可以通过容器名互相访问。

服务发现：
• 自动 DNS 解析
• 容器名作为主机名
• 支持网络别名
• 负载均衡`,code:`# 创建自定义网络
docker network create app-network

# 启动数据库容器
docker run -d \\
  --name mysql \\
  --network app-network \\
  -e MYSQL_ROOT_PASSWORD=secret \\
  -e MYSQL_DATABASE=myapp \\
  mysql:8.0

# 启动应用容器（可通过 mysql 主机名访问数据库）
docker run -d \\
  --name webapp \\
  --network app-network \\
  -e DB_HOST=mysql \\
  -e DB_USER=root \\
  -e DB_PASSWORD=secret \\
  -e DB_NAME=myapp \\
  -p 3000:3000 \\
  myapp:1.0

# 测试连接
docker exec webapp ping mysql
docker exec webapp curl http://mysql:3306

# 使用网络别名
docker run -d \\
  --name db \\
  --network app-network \\
  --network-alias database \\
  mysql:8.0

# 现在可以通过 database 访问
docker exec webapp ping database`,language:"bash"},{title:"5.4 端口映射详解",content:`将容器端口映射到宿主机，使外部可以访问容器服务。

映射方式：
• 指定端口映射
• 随机端口映射
• 指定 IP 映射
• 映射多个端口
• UDP 端口映射`,code:`# 映射单个端口（宿主机:容器）
docker run -d -p 8080:80 nginx

# 映射到随机端口
docker run -d -P nginx

# 指定 IP 地址映射
docker run -d -p 127.0.0.1:8080:80 nginx

# 映射多个端口
docker run -d -p 80:80 -p 443:443 nginx

# 映射 UDP 端口
docker run -d -p 53:53/udp dns-server

# 映射端口范围
docker run -d -p 8000-8010:8000-8010 myapp

# 查看端口映射
docker port mynginx

# 查看所有容器的端口映射
docker ps --format "table {{.Names}}\\t{{.Ports}}"

# 动态查看端口映射
docker inspect -f '{{range $p, $conf := .NetworkSettings.Ports}} {{$p}} -> {{(index $conf 0).HostPort}} {{end}}' mynginx`,language:"bash"},{title:"5.5 跨主机网络（Overlay）",content:`Overlay 网络用于 Docker Swarm 集群，实现跨主机容器通信。

使用场景：
• Docker Swarm 集群
• 跨主机容器通信
• 微服务架构
• 分布式应用`,code:`# 初始化 Swarm（在管理节点）
docker swarm init --advertise-addr 192.168.1.100

# 创建 overlay 网络
docker network create \\
  --driver overlay \\
  --attachable \\
  my-overlay-network

# 查看 overlay 网络
docker network ls --filter driver=overlay

# 在 overlay 网络中运行服务
docker service create \\
  --name web \\
  --network my-overlay-network \\
  --replicas 3 \\
  -p 80:80 \\
  nginx

# 普通容器连接到 overlay 网络
docker run -d \\
  --name test \\
  --network my-overlay-network \\
  alpine sleep 3600

# 查看网络中的容器
docker network inspect my-overlay-network`,language:"bash"},{title:"5.6 网络故障排查",content:`常见网络问题的排查方法和工具。

排查工具：
• ping：测试连通性
• curl：测试 HTTP 服务
• netstat：查看网络连接
• tcpdump：抓包分析
• docker network inspect：查看网络配置`,code:`# 测试容器网络连通性
docker exec mycontainer ping google.com
docker exec mycontainer ping other-container

# 测试 HTTP 服务
docker exec mycontainer curl http://localhost:80

# 查看容器网络接口
docker exec mycontainer ip addr
docker exec mycontainer ifconfig

# 查看容器路由表
docker exec mycontainer ip route

# 查看容器监听端口
docker exec mycontainer netstat -tuln
docker exec mycontainer ss -tuln

# 查看容器 DNS 配置
docker exec mycontainer cat /etc/resolv.conf

# 抓包分析
docker exec mycontainer tcpdump -i eth0 -w /tmp/capture.pcap

# 查看网络详细信息
docker network inspect bridge

# 查看容器网络统计
docker stats --format "table {{.Container}}\\t{{.NetIO}}"`,language:"bash"}]},c={id:"docker-volumes",title:"第六章：数据管理与持久化",sections:[{title:"6.1 数据持久化方案",content:`Docker 提供三种数据持久化方式。

Volumes（数据卷）：
• Docker 管理的存储，推荐方式
• 存储在 /var/lib/docker/volumes/
• 可以在容器间共享
• 支持远程存储驱动

Bind Mounts（绑定挂载）：
• 挂载宿主机目录
• 完全控制文件路径
• 适合开发环境

tmpfs：
• 临时文件系统，存储在内存中
• 容器停止后数据丢失
• 适合敏感数据`,code:`# 创建数据卷
docker volume create mydata

# 查看数据卷列表
docker volume ls

# 查看数据卷详情
docker volume inspect mydata

# 使用数据卷
docker run -d -v mydata:/var/lib/mysql mysql:8.0

# 绑定挂载宿主机目录
docker run -d -v /host/path:/container/path nginx

# 只读挂载
docker run -d -v /host/path:/container/path:ro nginx

# 使用 tmpfs
docker run -d --tmpfs /tmp nginx

# 删除数据卷
docker volume rm mydata

# 清理未使用的数据卷
docker volume prune`,language:"bash"}]},a={id:"docker-compose",title:"第七章：Docker Compose 编排",sections:[{title:"7.1 Docker Compose 简介",content:`Docker Compose 是用于定义和运行多容器 Docker 应用的工具。

核心概念：
• 使用 YAML 文件定义服务
• 一条命令启动所有服务
• 自动创建网络和数据卷
• 适合开发、测试和生产环境`,code:`# 安装 Docker Compose（Ubuntu）
sudo apt-get install docker-compose-plugin

# 验证安装
docker compose version

# 基本命令
docker compose up -d      # 启动服务
docker compose down       # 停止并删除服务
docker compose ps         # 查看服务状态
docker compose logs -f    # 查看日志
docker compose restart    # 重启服务`,language:"bash"}]},s={id:"docker-registry",title:"第八章：私有镜像仓库",sections:[{title:"8.1 搭建私有 Registry",content:`搭建企业内部的私有镜像仓库。

使用场景：
• 企业内部镜像管理
• 加速镜像分发
• 镜像安全控制
• 离线环境部署`,code:`# 运行 Registry 容器
docker run -d \\
  -p 5000:5000 \\
  --name registry \\
  -v /opt/registry:/var/lib/registry \\
  registry:2

# 推送镜像到私有仓库
docker tag nginx:latest localhost:5000/nginx:latest
docker push localhost:5000/nginx:latest

# 从私有仓库拉取
docker pull localhost:5000/nginx:latest

# 查看仓库中的镜像
curl http://localhost:5000/v2/_catalog`,language:"bash"}]},d={id:"docker-swarm",title:"第九章：Docker Swarm 集群",sections:[{title:"9.1 Swarm 集群搭建",content:`Docker Swarm 是 Docker 原生的集群管理和编排工具。

核心概念：
• Manager 节点：管理集群
• Worker 节点：运行任务
• Service：服务定义
• Task：服务实例
• Stack：应用栈`,code:`# 初始化 Swarm（管理节点）
docker swarm init --advertise-addr 192.168.1.100

# 查看加入命令
docker swarm join-token worker
docker swarm join-token manager

# 工作节点加入集群
docker swarm join --token TOKEN 192.168.1.100:2377

# 查看节点列表
docker node ls

# 创建服务
docker service create \\
  --name web \\
  --replicas 3 \\
  -p 80:80 \\
  nginx

# 查看服务列表
docker service ls

# 扩展服务
docker service scale web=5`,language:"bash"}]},i={id:"docker-practice",title:"第十章：Ubuntu 生产环境实战",sections:[{title:"10.1 完整项目部署架构",content:`在 Ubuntu Linux 上部署一个完整的 Web 应用。

项目架构：
• Nginx：反向代理和静态文件服务
• Node.js API：后端服务
• MySQL：数据库
• Redis：缓存
• Docker Compose：服务编排`,code:`# docker-compose.yml
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./frontend/dist:/usr/share/nginx/html
    depends_on:
      - api
    restart: always

  api:
    build: ./api
    environment:
      - NODE_ENV=production
      - DB_HOST=mysql
      - REDIS_HOST=redis
    depends_on:
      - mysql
      - redis
    restart: always

  mysql:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=\${MYSQL_ROOT_PASSWORD}
      - MYSQL_DATABASE=myapp
    volumes:
      - mysql-data:/var/lib/mysql
    restart: always

  redis:
    image: redis:alpine
    restart: always

volumes:
  mysql-data:`,language:"yaml"},{title:"10.2 生产环境部署流程",content:`完整的生产环境部署步骤。

部署流程：
1. 准备服务器环境
2. 配置 Docker
3. 准备应用代码
4. 构建镜像
5. 启动服务
6. 配置监控
7. 备份策略`,code:`# 1. 克隆项目
git clone https://github.com/user/myproject.git
cd myproject

# 2. 配置环境变量
cat > .env << EOF
MYSQL_ROOT_PASSWORD=your_secure_password
NODE_ENV=production
EOF

# 3. 构建并启动服务
docker compose up -d --build

# 4. 查看服务状态
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
docker image prune -a`,language:"bash"}]},l={id:"docker",name:"Docker",icon:"🐳",status:"learning",description:"从零到精通：容器化技术完整学习路线",chapters:[e,o,r,t,n,c,a,s,d,i]},k={id:"linux",name:"Linux",icon:"🐧",status:"planned",description:"Linux 系统管理与运维实战",chapters:[{id:"linux-basics",title:"第一章：Linux 基础入门",sections:[{title:"1.1 Linux 简介与发行版",content:`Linux 是一个开源的类 Unix 操作系统内核，广泛应用于服务器、嵌入式设备等领域。

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
• /opt：第三方软件`,code:null}]}]},p={id:"php",name:"PHP",icon:"🐘",status:"planned",description:"PHP 后端开发从入门到精通",chapters:[{id:"php-basics",title:"第一章：PHP 基础语法",sections:[{title:"1.1 PHP 简介与环境搭建",content:`PHP 是一种广泛使用的服务器端脚本语言，特别适合 Web 开发。

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

?>`,language:"php"}]}]},u={id:"redis",name:"Redis",icon:"🔴",status:"planned",description:"Redis 缓存与数据结构深度应用",chapters:[{id:"redis-basics",title:"第一章：Redis 入门",sections:[{title:"1.1 Redis 简介",content:`Redis 是一个开源的内存数据结构存储系统，可用作数据库、缓存和消息代理。

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
redis-cli info`,language:"bash"}]}]},g={id:"elk",name:"ELK Stack",icon:"📊",status:"planned",description:"Elasticsearch + Logstash + Kibana 日志分析完整方案",chapters:[{id:"elk-basics",title:"第一章：ELK Stack 简介",sections:[{title:"1.1 ELK Stack 是什么",content:`ELK Stack 是三个开源项目的首字母缩写：Elasticsearch、Logstash 和 Kibana。

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
• Redis/Kafka 作为缓冲队列`,code:null}]}]},m=[l,k,p,u,g];export{m as t};
