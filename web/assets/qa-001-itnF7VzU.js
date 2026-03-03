const n=`# Docker 容器与镜像的区别及启动方式\r
\r
## ❓ 问题\r
\r
运行 \`docker run -d my-nginx\` 时报错：\`Unable to find image 'my-nginx:latest' locally\`，但 \`docker ps -a\` 显示已有名为 \`my-nginx\` 的容器。为什么会出现这个错误？\r
\r
## ✅ 解答\r
\r
### 核心概念区分\r
\r
Docker 中有两个重要概念需要区分：\r
\r
| 概念 | 说明 | 示例 |\r
|------|------|------|\r
| **镜像 (Image)** | 应用程序的模板，用于创建容器 | \`nginx\`, \`mysql\`, \`redis\` |\r
| **容器 (Container)** | 镜像的运行实例，可以启动、停止 | \`my-nginx\`, \`my-app\` |\r
\r
### 问题分析\r
\r
\`\`\`bash\r
# 查看已有容器\r
docker ps -a\r
# 输出：NAME 为 my-nginx，IMAGE 为 nginx\r
\r
# 错误命令\r
docker run -d my-nginx\r
# Docker 将 my-nginx 当作镜像名去查找，但实际上它是容器名\r
\`\`\`\r
\r
**错误原因：**\r
- \`docker run\` 命令需要的是**镜像名**，而不是容器名\r
- \`my-nginx\` 是容器的名称，不是镜像名\r
- 实际的镜像名是 \`nginx\`\r
\r
### 正确的操作方式\r
\r
#### 1. 启动已存在的容器\r
\r
\`\`\`bash\r
# 启动已停止的容器\r
docker start my-nginx\r
\r
# 查看运行状态\r
docker ps\r
\`\`\`\r
\r
#### 2. 创建新容器\r
\r
\`\`\`bash\r
# 使用正确的镜像名创建新容器\r
docker run -d --name my-nginx-2 nginx\r
\r
# 或者删除旧容器后重新创建\r
docker rm my-nginx\r
docker run -d --name my-nginx nginx\r
\`\`\`\r
\r
#### 3. 带端口映射启动\r
\r
\`\`\`bash\r
# 映射端口 80 到主机 8080\r
docker run -d -p 8080:80 --name my-nginx nginx\r
\`\`\`\r
\r
### 常用命令对比\r
\r
| 命令 | 用途 | 示例 |\r
|------|------|------|\r
| \`docker run\` | 从镜像创建并运行新容器 | \`docker run -d nginx\` |\r
| \`docker start\` | 启动已存在的容器 | \`docker start my-nginx\` |\r
| \`docker stop\` | 停止运行中的容器 | \`docker stop my-nginx\` |\r
| \`docker restart\` | 重启容器 | \`docker restart my-nginx\` |\r
| \`docker rm\` | 删除容器 | \`docker rm my-nginx\` |\r
| \`docker rmi\` | 删除镜像 | \`docker rmi nginx\` |\r
\r
## 💡 小贴士\r
\r
**查看镜像和容器：**\r
\`\`\`bash\r
# 查看所有镜像\r
docker images\r
\r
# 查看所有容器（包括停止的）\r
docker ps -a\r
\r
# 只查看运行中的容器\r
docker ps\r
\`\`\`\r
\r
**容器命名规则：**\r
\`\`\`bash\r
# 不指定名称，Docker 会自动生成随机名称\r
docker run -d nginx\r
\r
# 使用 --name 指定容器名称\r
docker run -d --name my-custom-name nginx\r
\`\`\`\r
\r
**容器生命周期：**\r
1. 创建：\`docker run\` 或 \`docker create\`\r
2. 启动：\`docker start\`\r
3. 停止：\`docker stop\`\r
4. 删除：\`docker rm\`\r
\r
## 🔗 相关命令\r
\r
\`\`\`bash\r
# 查看容器详细信息\r
docker inspect my-nginx\r
\r
# 查看容器日志\r
docker logs my-nginx\r
\r
# 进入容器内部\r
docker exec -it my-nginx bash\r
\r
# 查看容器资源使用\r
docker stats my-nginx\r
\`\`\`\r
\r
## 📌 关键要点\r
\r
1. **镜像是模板，容器是实例** - 一个镜像可以创建多个容器\r
2. **docker run 用于创建新容器** - 需要提供镜像名\r
3. **docker start 用于启动已有容器** - 需要提供容器名或 ID\r
4. **容器名和镜像名是不同的** - 不要混淆使用\r
`;export{n as default};
