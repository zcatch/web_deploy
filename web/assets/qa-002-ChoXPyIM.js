const n=`# Docker inspect 命令与容器挂载信息查看\r
\r
## ❓ 问题\r
\r
\`docker inspect my-nginx | grep Mounts -A 10\` 这个命令是什么意思？如何查看容器的挂载信息？\r
\r
## ✅ 解答\r
\r
### 命令详解\r
\r
\`\`\`bash\r
docker inspect my-nginx | grep Mounts -A 10\r
\`\`\`\r
\r
**命令分解：**\r
\r
| 部分 | 说明 |\r
|------|------|\r
| \`docker inspect my-nginx\` | 查看容器的详细配置信息（JSON 格式） |\r
| \`\\|\` | 管道符，将前面的输出传给后面的命令 |\r
| \`grep Mounts\` | 搜索包含 "Mounts" 的行 |\r
| \`-A 10\` | 显示匹配行及其后面的 10 行（After） |\r
\r
### docker inspect 命令\r
\r
\`docker inspect\` 返回容器或镜像的底层详细信息，包括：\r
\r
- 网络配置\r
- 挂载信息\r
- 环境变量\r
- 启动命令\r
- 资源限制\r
- 状态信息\r
\r
**基本用法：**\r
\`\`\`bash\r
# 查看容器详细信息\r
docker inspect my-nginx\r
\r
# 查看镜像详细信息\r
docker inspect nginx\r
\r
# 查看多个容器\r
docker inspect container1 container2\r
\`\`\`\r
\r
### Mounts 挂载信息\r
\r
**Mounts 包含的关键字段：**\r
\r
| 字段 | 说明 | 示例值 |\r
|------|------|--------|\r
| \`Type\` | 挂载类型 | \`bind\`、\`volume\`、\`tmpfs\` |\r
| \`Source\` | 主机路径 | \`/home/user/html\` |\r
| \`Destination\` | 容器内路径 | \`/usr/share/nginx/html\` |\r
| \`Mode\` | 挂载模式 | \`rw\`（读写）、\`ro\`（只读） |\r
| \`RW\` | 是否可读写 | \`true\` / \`false\` |\r
| \`Propagation\` | 挂载传播 | \`rprivate\`、\`shared\` |\r
\r
**示例输出：**\r
\`\`\`json\r
"Mounts": [\r
    {\r
        "Type": "bind",\r
        "Source": "/home/blue/html",\r
        "Destination": "/usr/share/nginx/html",\r
        "Mode": "",\r
        "RW": true,\r
        "Propagation": "rprivate"\r
    }\r
]\r
\`\`\`\r
\r
### 挂载类型说明\r
\r
#### 1. bind（绑定挂载）\r
\`\`\`bash\r
# 将主机目录挂载到容器\r
docker run -d -v /host/path:/container/path nginx\r
\`\`\`\r
- 直接映射主机文件系统\r
- 主机路径必须存在\r
- 适合开发环境\r
\r
#### 2. volume（数据卷）\r
\`\`\`bash\r
# 使用 Docker 管理的数据卷\r
docker run -d -v my-volume:/container/path nginx\r
\`\`\`\r
- 由 Docker 管理\r
- 数据持久化\r
- 适合生产环境\r
\r
#### 3. tmpfs（临时文件系统）\r
\`\`\`bash\r
# 挂载到内存\r
docker run -d --tmpfs /tmp nginx\r
\`\`\`\r
- 存储在内存中\r
- 容器停止后数据丢失\r
- 适合临时数据\r
\r
### grep 选项详解\r
\r
\`\`\`bash\r
# -A 10：显示匹配行及后面 10 行（After）\r
docker inspect my-nginx | grep Mounts -A 10\r
\r
# -B 5：显示匹配行及前面 5 行（Before）\r
docker inspect my-nginx | grep Mounts -B 5\r
\r
# -C 5：显示匹配行及前后各 5 行（Context）\r
docker inspect my-nginx | grep Mounts -C 5\r
\r
# -i：忽略大小写\r
docker inspect my-nginx | grep -i mounts -A 10\r
\`\`\`\r
\r
### 更好的查看方式\r
\r
#### 使用 jq 工具（推荐）\r
\r
\`\`\`bash\r
# 安装 jq（JSON 处理工具）\r
sudo apt install jq\r
\r
# 只查看 Mounts 部分\r
docker inspect my-nginx | jq '.[0].Mounts'\r
\r
# 查看特定字段\r
docker inspect my-nginx | jq '.[0].Mounts[0].Source'\r
\r
# 格式化输出\r
docker inspect my-nginx | jq '.[0].Mounts[] | {Type, Source, Destination}'\r
\`\`\`\r
\r
#### 使用 --format 参数\r
\r
\`\`\`bash\r
# 直接提取 Mounts 信息\r
docker inspect --format='{{json .Mounts}}' my-nginx | jq\r
\r
# 查看网络配置\r
docker inspect --format='{{json .NetworkSettings}}' my-nginx | jq\r
\r
# 查看环境变量\r
docker inspect --format='{{.Config.Env}}' my-nginx\r
\`\`\`\r
\r
## 💡 实用技巧\r
\r
### 查看容器的关键信息\r
\r
\`\`\`bash\r
# 查看容器 IP 地址\r
docker inspect --format='{{.NetworkSettings.IPAddress}}' my-nginx\r
\r
# 查看容器状态\r
docker inspect --format='{{.State.Status}}' my-nginx\r
\r
# 查看容器启动时间\r
docker inspect --format='{{.State.StartedAt}}' my-nginx\r
\r
# 查看端口映射\r
docker inspect --format='{{json .NetworkSettings.Ports}}' my-nginx | jq\r
\`\`\`\r
\r
### 批量查看多个容器\r
\r
\`\`\`bash\r
# 查看所有运行容器的挂载信息\r
docker ps -q | xargs docker inspect --format='{{.Name}}: {{json .Mounts}}' | jq\r
\r
# 查看所有容器的 IP 地址\r
docker ps -q | xargs docker inspect --format='{{.Name}}: {{.NetworkSettings.IPAddress}}'\r
\`\`\`\r
\r
## 🔗 相关命令\r
\r
\`\`\`bash\r
# 查看数据卷列表\r
docker volume ls\r
\r
# 查看数据卷详细信息\r
docker volume inspect my-volume\r
\r
# 查看容器的挂载点（简化版）\r
docker inspect -f '{{range .Mounts}}{{.Source}} -> {{.Destination}}{{println}}{{end}}' my-nginx\r
\r
# 导出完整配置到文件\r
docker inspect my-nginx > container-config.json\r
\`\`\`\r
\r
## 📌 关键要点\r
\r
1. **docker inspect** - 查看容器/镜像的完整配置信息\r
2. **Mounts** - 包含所有挂载信息（数据卷、绑定挂载等）\r
3. **grep -A** - 显示匹配行及后续行，方便查看 JSON 结构\r
4. **jq 工具** - 更优雅地处理 JSON 输出\r
5. **--format 参数** - 直接提取特定字段，避免使用 grep\r
\r
## 🎯 常见场景\r
\r
**场景1：检查数据是否正确挂载**\r
\`\`\`bash\r
docker inspect my-nginx | grep -A 10 Mounts\r
# 确认 Source 和 Destination 路径是否正确\r
\`\`\`\r
\r
**场景2：排查容器数据丢失问题**\r
\`\`\`bash\r
docker inspect my-nginx | jq '.[0].Mounts'\r
# 检查挂载类型，确认是否使用了持久化存储\r
\`\`\`\r
\r
**场景3：迁移容器配置**\r
\`\`\`bash\r
docker inspect my-nginx > backup.json\r
# 保存配置，用于在其他主机重建容器\r
\`\`\`\r
`;export{n as default};
