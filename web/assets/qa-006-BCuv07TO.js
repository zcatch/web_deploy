const n=`# Docker + Nginx 多项目部署方案（使用挂载）\r
\r
## 📋 场景说明\r
\r
在开发环境中，需要使用一个 Nginx 容器管理多个前端项目，通过域名区分不同项目，使用 Bind Mount（绑定挂载）方式实现代码实时更新。\r
\r
---\r
\r
## 🎯 方案架构\r
\r
### 目录结构\r
\r
\`\`\`\r
/home/blue/\r
├── nginx/\r
│   └── conf.d/\r
│       ├── project1.conf\r
│       ├── project2.conf\r
│       └── vue-learning.conf\r
└── www/\r
    ├── project1/\r
    │   └── dist/\r
    ├── project2/\r
    │   └── dist/\r
    └── web_deploy/\r
        └── dist/\r
\`\`\`\r
\r
### 核心思路\r
\r
- **一个 Nginx 容器**：管理所有项目\r
- **目录挂载**：宿主机目录映射到容器\r
- **独立配置**：每个项目一个 \`.conf\` 文件\r
- **域名区分**：通过 \`server_name\` 区分不同项目\r
\r
---\r
\r
## 🚀 部署步骤\r
\r
### 1. 创建目录结构\r
\r
\`\`\`bash\r
# 创建 Nginx 配置目录\r
mkdir -p /home/blue/nginx/conf.d\r
\r
# 创建项目目录（如果不存在）\r
mkdir -p /home/blue/www\r
\r
# 修改目录所有者\r
sudo chown -R blue:blue /home/blue/nginx\r
\`\`\`\r
\r
### 2. 创建项目配置文件\r
\r
为每个项目创建独立的 Nginx 配置文件：\r
\r
\`\`\`bash\r
# 示例：/home/blue/nginx/conf.d/vue-learning.conf\r
nano /home/blue/nginx/conf.d/vue-learning.conf\r
\`\`\`\r
\r
配置内容：\r
\r
\`\`\`nginx\r
server {\r
    listen 80;\r
    server_name web.local learning.local www.learning.local;\r
    \r
    # 项目根目录（容器内路径）\r
    root /usr/share/nginx/html/web_deploy/dist;\r
    index index.html;\r
\r
    # Vue Router History 模式支持\r
    location / {\r
        try_files $uri $uri/ /index.html;\r
    }\r
\r
    # 静态资源缓存\r
    location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {\r
        expires 1y;\r
        add_header Cache-Control "public, immutable";\r
    }\r
\r
    # Gzip 压缩\r
    gzip on;\r
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;\r
}\r
\`\`\`\r
\r
### 3. 构建前端项目\r
\r
\`\`\`bash\r
# 进入项目目录\r
cd /home/blue/www/web_deploy\r
\r
# 安装依赖\r
npm install\r
\r
# 构建生产版本\r
npm run build\r
\r
# 确认 dist 目录已生成\r
ls -la dist/\r
\`\`\`\r
\r
### 4. 运行 Nginx 容器\r
\r
\`\`\`bash\r
docker run -d \\\r
  --name my-web \\\r
  -p 8080:80 \\\r
  -v /home/blue/www:/usr/share/nginx/html \\\r
  -v /home/blue/nginx/conf.d:/etc/nginx/conf.d \\\r
  --restart unless-stopped \\\r
  nginx\r
\`\`\`\r
\r
**参数说明：**\r
\r
| 参数 | 说明 |\r
|------|------|\r
| \`-d\` | 后台运行 |\r
| \`--name my-web\` | 容器名称 |\r
| \`-p 8080:80\` | 端口映射：宿主机 8080 → 容器 80 |\r
| \`-v /home/blue/www:/usr/share/nginx/html\` | 挂载所有项目目录 |\r
| \`-v /home/blue/nginx/conf.d:/etc/nginx/conf.d\` | 挂载配置目录 |\r
| \`--restart unless-stopped\` | 自动重启策略 |\r
\r
### 5. 验证配置\r
\r
\`\`\`bash\r
# 测试 Nginx 配置语法\r
docker exec my-web nginx -t\r
\r
# 查看加载的域名配置\r
docker exec my-web nginx -T | grep server_name\r
\r
# 查看容器运行状态\r
docker ps | grep my-web\r
\r
# 查看端口映射\r
docker port my-web\r
\`\`\`\r
\r
### 6. 配置域名访问\r
\r
#### Linux/WSL 系统（服务器端）\r
\r
\`\`\`bash\r
# 编辑 hosts 文件\r
sudo nano /etc/hosts\r
\r
# 添加域名映射\r
127.0.0.1  web.local\r
127.0.0.1  learning.local\r
127.0.0.1  www.learning.local\r
\r
# 测试域名解析\r
ping web.local\r
\r
# 测试 HTTP 访问\r
curl http://web.local:8080\r
\`\`\`\r
\r
#### Windows 系统（WSL 场景）\r
\r
**步骤 1：以管理员身份打开记事本**\r
- 右键"记事本" → "以管理员身份运行"\r
\r
**步骤 2：打开 hosts 文件**\r
\`\`\`\r
文件 -> 打开 -> 输入路径：\r
C:\\Windows\\System32\\drivers\\etc\\hosts\r
\`\`\`\r
注意：文件类型选择"所有文件"\r
\r
**步骤 3：添加域名映射**\r
\`\`\`\r
127.0.0.1  web.local\r
127.0.0.1  learning.local\r
127.0.0.1  www.learning.local\r
\`\`\`\r
\r
**步骤 4：刷新 DNS 缓存**\r
\`\`\`powershell\r
ipconfig /flushdns\r
\`\`\`\r
\r
**步骤 5：验证**\r
\`\`\`powershell\r
# 测试域名解析\r
ping web.local\r
\r
# 浏览器访问\r
http://web.local:8080\r
\`\`\`\r
\r
---\r
\r
## 🔄 日常操作\r
\r
### 添加新项目\r
\r
\`\`\`bash\r
# 1. 创建新项目配置\r
nano /home/blue/nginx/conf.d/project2.conf\r
\r
# 2. 配置内容\r
server {\r
    listen 80;\r
    server_name project2.local;\r
    root /usr/share/nginx/html/project2/dist;\r
    index index.html;\r
    location / {\r
        try_files $uri $uri/ /index.html;\r
    }\r
}\r
\r
# 3. 重载 Nginx 配置\r
docker exec my-web nginx -s reload\r
\r
# 4. 添加 hosts 映射\r
# Linux: sudo nano /etc/hosts\r
# Windows: C:\\Windows\\System32\\drivers\\etc\\hosts\r
127.0.0.1  project2.local\r
\`\`\`\r
\r
### 更新项目代码\r
\r
\`\`\`bash\r
# 1. 拉取最新代码\r
cd /home/blue/www/web_deploy\r
git pull\r
\r
# 2. 重新构建\r
npm run build\r
\r
# 3. 刷新浏览器即可看到更新\r
# 不需要重启容器！\r
\`\`\`\r
\r
### 修改 Nginx 配置\r
\r
\`\`\`bash\r
# 1. 编辑配置文件\r
nano /home/blue/nginx/conf.d/vue-learning.conf\r
\r
# 2. 测试配置\r
docker exec my-web nginx -t\r
\r
# 3. 重载配置（不中断服务）\r
docker exec my-web nginx -s reload\r
\`\`\`\r
\r
### 查看日志\r
\r
\`\`\`bash\r
# 查看容器日志\r
docker logs -f my-web\r
\r
# 查看 Nginx 访问日志\r
docker exec my-web tail -f /var/log/nginx/access.log\r
\r
# 查看 Nginx 错误日志\r
docker exec my-web tail -f /var/log/nginx/error.log\r
\`\`\`\r
\r
### 容器管理\r
\r
\`\`\`bash\r
# 停止容器\r
docker stop my-web\r
\r
# 启动容器\r
docker start my-web\r
\r
# 重启容器\r
docker restart my-web\r
\r
# 删除容器\r
docker rm -f my-web\r
\r
# 进入容器\r
docker exec -it my-web sh\r
\`\`\`\r
\r
---\r
\r
## 🔍 故障排查\r
\r
### 问题 1：浏览器无法访问\r
\r
**检查步骤：**\r
\r
\`\`\`bash\r
# 1. 确认容器运行\r
docker ps | grep my-web\r
\r
# 2. 确认端口映射\r
docker port my-web\r
# 应显示：80/tcp -> 0.0.0.0:8080\r
\r
# 3. 测试 localhost\r
curl http://localhost:8080\r
\r
# 4. 检查 hosts 配置\r
cat /etc/hosts | grep web.local  # Linux\r
# 或在 Windows 查看 C:\\Windows\\System32\\drivers\\etc\\hosts\r
\r
# 5. 测试域名解析\r
ping web.local\r
\`\`\`\r
\r
### 问题 2：配置修改不生效\r
\r
\`\`\`bash\r
# 1. 测试配置语法\r
docker exec my-web nginx -t\r
\r
# 2. 查看配置是否加载\r
docker exec my-web nginx -T | grep server_name\r
\r
# 3. 重载配置\r
docker exec my-web nginx -s reload\r
\r
# 4. 如果还不行，重启容器\r
docker restart my-web\r
\`\`\`\r
\r
### 问题 3：页面刷新 404\r
\r
**原因：** Vue Router History 模式需要特殊配置\r
\r
**解决：** 确保配置文件中有：\r
\`\`\`nginx\r
location / {\r
    try_files $uri $uri/ /index.html;\r
}\r
\`\`\`\r
\r
### 问题 4：静态资源 404\r
\r
\`\`\`bash\r
# 1. 检查挂载目录\r
docker exec my-web ls -la /usr/share/nginx/html/web_deploy/dist/\r
\r
# 2. 检查文件权限\r
ls -la /home/blue/www/web_deploy/dist/\r
\r
# 3. 确认 root 路径正确\r
docker exec my-web cat /etc/nginx/conf.d/vue-learning.conf | grep root\r
\`\`\`\r
\r
### 问题 5：WSL 中 Windows 浏览器无法访问\r
\r
**解决方案：**\r
\r
\`\`\`bash\r
# 方法 1：使用 localhost（推荐）\r
# Windows 浏览器访问：http://localhost:8080\r
\r
# 方法 2：获取 WSL IP\r
hostname -I\r
# 假设显示：172.20.10.5\r
# Windows 浏览器访问：http://172.20.10.5:8080\r
\r
# 方法 3：Windows hosts 配置\r
# C:\\Windows\\System32\\drivers\\etc\\hosts\r
127.0.0.1  web.local\r
\`\`\`\r
\r
---\r
\r
## 💡 核心概念\r
\r
### Bind Mount（绑定挂载）\r
\r
\`\`\`bash\r
-v /home/blue/www:/usr/share/nginx/html\r
\`\`\`\r
\r
**特点：**\r
- 直接映射宿主机目录到容器\r
- 宿主机文件修改，容器内立即生效\r
- 适合开发环境\r
- 路径必须是绝对路径\r
\r
**语法：**\r
\`\`\`\r
-v 宿主机路径:容器内路径[:选项]\r
\`\`\`\r
\r
**选项：**\r
- \`ro\`：只读挂载\r
- \`rw\`：读写挂载（默认）\r
\r
### Nginx 配置加载机制\r
\r
Nginx 主配置文件（\`/etc/nginx/nginx.conf\`）中包含：\r
\`\`\`nginx\r
include /etc/nginx/conf.d/*.conf;\r
\`\`\`\r
\r
这意味着：\r
- \`conf.d/\` 目录下所有 \`.conf\` 文件会被自动加载\r
- 可以为每个项目创建独立配置文件\r
- 不需要修改主配置文件\r
\r
### 端口映射\r
\r
\`\`\`bash\r
-p 8080:80\r
\`\`\`\r
\r
**格式：** \`-p 宿主机端口:容器端口\`\r
\r
**说明：**\r
- 宿主机的 8080 端口映射到容器的 80 端口\r
- 访问 \`localhost:8080\` 实际访问容器的 80 端口\r
- 可以映射多个端口：\`-p 8080:80 -p 8443:443\`\r
\r
---\r
\r
## ⚠️ 注意事项\r
\r
1. **路径必须使用绝对路径**\r
   \`\`\`bash\r
   # ❌ 错误\r
   -v ./www:/usr/share/nginx/html\r
   \r
   # ✅ 正确\r
   -v /home/blue/www:/usr/share/nginx/html\r
   \`\`\`\r
\r
2. **配置文件必须以 .conf 结尾**\r
   \`\`\`bash\r
   # ✅ 会被加载\r
   vue-learning.conf\r
   \r
   # ❌ 不会被加载\r
   vue-learning.txt\r
   \`\`\`\r
\r
3. **修改配置后必须重载**\r
   \`\`\`bash\r
   docker exec my-web nginx -s reload\r
   \`\`\`\r
\r
4. **WSL 端口转发**\r
   - WSL2 自动转发 localhost 到 Windows\r
   - 使用 \`localhost:8080\` 即可在 Windows 访问\r
   - hosts 配置在 Windows 端进行\r
\r
5. **文件权限问题**\r
   \`\`\`bash\r
   # 确保目录所有者正确\r
   sudo chown -R blue:blue /home/blue/nginx\r
   sudo chown -R blue:blue /home/blue/www\r
   \`\`\`\r
\r
6. **容器重启后配置保留**\r
   - 使用挂载方式，配置文件在宿主机\r
   - 容器删除重建后，配置自动生效\r
   - 不需要重新配置\r
\r
---\r
\r
## 🎯 最佳实践\r
\r
1. **统一管理配置**\r
   - 所有项目配置放在 \`/home/blue/nginx/conf.d/\`\r
   - 使用清晰的命名：\`项目名.conf\`\r
\r
2. **使用只读挂载（生产环境）**\r
   \`\`\`bash\r
   -v /home/blue/www:/usr/share/nginx/html:ro\r
   -v /home/blue/nginx/conf.d:/etc/nginx/conf.d:ro\r
   \`\`\`\r
\r
3. **配置自动重启**\r
   \`\`\`bash\r
   --restart unless-stopped\r
   \`\`\`\r
\r
4. **定期备份配置**\r
   \`\`\`bash\r
   tar -czf nginx-config-backup.tar.gz /home/blue/nginx/\r
   \`\`\`\r
\r
5. **使用 Docker Compose（可选）**\r
   \`\`\`yaml\r
   version: '3.8'\r
   services:\r
     web:\r
       image: nginx:alpine\r
       container_name: my-web\r
       ports:\r
         - "8080:80"\r
       volumes:\r
         - /home/blue/www:/usr/share/nginx/html:ro\r
         - /home/blue/nginx/conf.d:/etc/nginx/conf.d:ro\r
       restart: unless-stopped\r
   \`\`\`\r
\r
---\r
\r
## 📚 相关命令速查\r
\r
\`\`\`bash\r
# 容器管理\r
docker ps                          # 查看运行中的容器\r
docker ps -a                       # 查看所有容器\r
docker logs -f my-web              # 查看日志\r
docker exec -it my-web sh          # 进入容器\r
docker restart my-web              # 重启容器\r
docker stop my-web                 # 停止容器\r
docker rm -f my-web                # 删除容器\r
\r
# Nginx 操作\r
docker exec my-web nginx -t        # 测试配置\r
docker exec my-web nginx -s reload # 重载配置\r
docker exec my-web nginx -T        # 查看完整配置\r
\r
# 挂载检查\r
docker inspect my-web | grep -A 10 Mounts  # 查看挂载信息\r
docker exec my-web ls -la /usr/share/nginx/html  # 查看容器内文件\r
\r
# 网络调试\r
curl http://localhost:8080         # 测试访问\r
ping web.local                     # 测试域名解析\r
docker port my-web                 # 查看端口映射\r
\`\`\`\r
\r
---\r
\r
## 🔗 扩展阅读\r
\r
- Docker Volume 详解：参考 qa-005\r
- Docker 端口映射：参考 qa-002\r
- Nginx 配置优化：参考相关文档\r
`;export{n as default};
