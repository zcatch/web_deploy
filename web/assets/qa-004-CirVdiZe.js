const n=`# Docker exec 中 sh -c 的用法详解\r
\r
## ❓ 问题\r
\r
\`docker exec -it readonly-nginx sh -c "echo 'test' > /usr/share/nginx/html/test.txt"\` 这个命令中的 \`sh -c\` 是什么意思？为什么需要使用它？\r
\r
## ✅ 解答\r
\r
### 命令完整分解\r
\r
\`\`\`bash\r
docker exec -it readonly-nginx sh -c "echo 'test' > /usr/share/nginx/html/test.txt"\r
\`\`\`\r
\r
| 部分 | 说明 | 作用 |\r
|------|------|------|\r
| \`docker exec\` | Docker 命令 | 在运行的容器中执行命令 |\r
| \`-it\` | 参数组合 | \`-i\` (交互模式) + \`-t\` (分配伪终端) |\r
| \`readonly-nginx\` | 容器名称 | 指定要执行命令的容器 |\r
| \`sh\` | Shell 解释器 | 启动一个 shell 进程 |\r
| \`-c\` | Shell 参数 | 告诉 shell 执行后面的命令字符串 |\r
| \`"echo 'test' > ..."\` | 命令字符串 | 要在容器内执行的完整命令 |\r
\r
---\r
\r
## 核心概念：sh -c\r
\r
### sh -c 的含义\r
\r
**\`sh -c "command"\`** 表示：\r
1. 启动一个新的 shell 进程\r
2. 执行引号内的命令字符串\r
3. 命令执行完毕后 shell 退出\r
\r
**语法格式：**\r
\`\`\`bash\r
sh -c "command_string"\r
\`\`\`\r
\r
### 为什么需要 -c？\r
\r
**关键原因：** 控制命令的执行位置（宿主机 vs 容器内）\r
\r
#### 场景1：不使用 -c（错误示例）\r
\r
\`\`\`bash\r
docker exec nginx echo 'test' > /tmp/test.txt\r
\`\`\`\r
\r
**执行流程：**\r
1. \`docker exec nginx echo 'test'\` 在容器内执行\r
2. 输出 \`test\` 返回到宿主机\r
3. \`> /tmp/test.txt\` 在宿主机执行重定向\r
4. 结果：文件创建在宿主机的 \`/tmp/test.txt\`\r
\r
#### 场景2：使用 -c（正确示例）\r
\r
\`\`\`bash\r
docker exec nginx sh -c "echo 'test' > /tmp/test.txt"\r
\`\`\`\r
\r
**执行流程：**\r
1. 在容器内启动 \`sh\` 进程\r
2. \`sh\` 接收整个命令字符串 \`"echo 'test' > /tmp/test.txt"\`\r
3. 在容器内执行 echo 和重定向\r
4. 结果：文件创建在容器内的 \`/tmp/test.txt\`\r
\r
---\r
\r
## sh vs bash\r
\r
### 区别对比\r
\r
| 特性 | sh | bash |\r
|------|----|----|\r
| **可用性** | 几乎所有容器都有 | 部分容器没有 |\r
| **大小** | 更小，轻量 | 更大，功能丰富 |\r
| **兼容性** | POSIX 标准 | 扩展功能 |\r
| **推荐场景** | 通用脚本 | 复杂脚本 |\r
\r
### 使用示例\r
\r
\`\`\`bash\r
# 使用 sh（推荐，兼容性好）\r
docker exec nginx sh -c "echo 'test' > /tmp/test.txt"\r
\r
# 使用 bash（功能更强，但可能不存在）\r
docker exec nginx bash -c "echo 'test' > /tmp/test.txt"\r
\r
# 检查容器有哪些 shell\r
docker exec nginx ls -la /bin/*sh\r
# 输出可能包括：/bin/sh, /bin/bash, /bin/dash 等\r
\`\`\`\r
\r
### Alpine 容器特殊情况\r
\r
\`\`\`bash\r
# Alpine 容器通常只有 sh（实际是 ash）\r
docker exec alpine-nginx sh -c "echo 'test'"\r
\r
# 如果尝试使用 bash 会报错\r
docker exec alpine-nginx bash -c "echo 'test'"\r
# 错误：OCI runtime exec failed: exec failed: executable file not found\r
\`\`\`\r
\r
---\r
\r
## 常见使用场景\r
\r
### 1. 文件重定向操作\r
\r
| 操作 | 命令示例 | 说明 |\r
|------|---------|------|\r
| 写入文件 | \`docker exec nginx sh -c "echo 'Hello' > /tmp/file.txt"\` | 覆盖写入 |\r
| 追加内容 | \`docker exec nginx sh -c "echo 'New' >> /tmp/file.txt"\` | 追加到文件末尾 |\r
| 多行文件 | \`docker exec nginx sh -c "cat > /tmp/config.txt << EOF\\nline1\\nline2\\nEOF"\` | 使用 heredoc |\r
\r
### 2. 管道操作\r
\r
| 操作 | 命令示例 | 说明 |\r
|------|---------|------|\r
| 查找进程 | \`docker exec nginx sh -c "ps aux | grep nginx"\` | 过滤进程列表 |\r
| 统计数量 | \`docker exec nginx sh -c "ls /tmp | wc -l"\` | 统计文件数 |\r
| 查看日志 | \`docker exec nginx sh -c "tail -n 20 /var/log/nginx/access.log | grep ERROR"\` | 过滤错误日志 |\r
\r
### 3. 执行多个命令\r
\r
| 连接符 | 命令示例 | 说明 |\r
|--------|---------|------|\r
| \`&&\` | \`docker exec nginx sh -c "cd /tmp && ls -la && pwd"\` | 前面成功才执行后面 |\r
| \`;\` | \`docker exec nginx sh -c "mkdir -p /tmp/test; cd /tmp/test; touch file.txt"\` | 顺序执行，不管成败 |\r
| \`||\` | \`docker exec nginx sh -c "test -f /tmp/file.txt || echo 'Not found'"\` | 前面失败才执行后面 |\r
\r
### 4. 环境变量操作\r
\r
| 操作 | 命令示例 | 说明 |\r
|------|---------|------|\r
| 读取变量 | \`docker exec nginx sh -c 'echo $PATH'\` | 显示环境变量 |\r
| 设置变量 | \`docker exec nginx sh -c 'export MY_VAR=hello && echo $MY_VAR'\` | 临时设置 |\r
| 多个变量 | \`docker exec nginx sh -c 'echo "User: $USER, Home: $HOME"'\` | 使用多个变量 |\r
\r
### 5. 条件判断\r
\r
| 判断类型 | 命令示例 | 说明 |\r
|---------|---------|------|\r
| 文件存在 | \`docker exec nginx sh -c "[ -f /tmp/test.txt ] && echo 'exists'"\` | 检查文件 |\r
| 目录存在 | \`docker exec nginx sh -c "[ -d /usr/share/nginx/html ] && echo 'exists'"\` | 检查目录 |\r
| if 语句 | \`docker exec nginx sh -c "if [ -f /tmp/test.txt ]; then echo 'exists'; else echo 'not found'; fi"\` | 完整条件 |\r
\r
### 6. 循环操作\r
\r
\`\`\`bash\r
# for 循环\r
docker exec nginx sh -c 'for i in 1 2 3 4 5; do echo "Number: $i"; done'\r
\r
# while 循环\r
docker exec nginx sh -c 'i=1; while [ $i -le 5 ]; do echo $i; i=$((i+1)); done'\r
\r
# 遍历文件\r
docker exec nginx sh -c 'for file in /etc/*.conf; do echo $file; done'\r
\`\`\`\r
\r
### 7. 安装软件\r
\r
\`\`\`bash\r
# 更新并安装软件\r
docker exec nginx sh -c "apt-get update && apt-get install -y vim curl"\r
\r
# 多行安装脚本\r
docker exec nginx sh -c "\r
  apt-get update\r
  apt-get install -y vim\r
  apt-get install -y curl\r
  echo 'Installation complete'\r
"\r
\`\`\`\r
\r
### 8. 备份和压缩\r
\r
| 操作 | 命令示例 | 说明 |\r
|------|---------|------|\r
| 打包目录 | \`docker exec nginx sh -c "tar -czf /tmp/backup.tar.gz /usr/share/nginx/html"\` | 压缩备份 |\r
| 解压文件 | \`docker exec nginx sh -c "cd /tmp && tar -xzf backup.tar.gz"\` | 解压到当前目录 |\r
| 查看内容 | \`docker exec nginx sh -c "tar -tzf /tmp/backup.tar.gz | head -10"\` | 列出压缩包内容 |\r
\r
---\r
\r
## 不需要 -c 的情况\r
\r
### 简单命令（无特殊字符）\r
\r
| 操作 | 命令示例 | 说明 |\r
|------|---------|------|\r
| 列出文件 | \`docker exec nginx ls /usr/share/nginx/html\` | 简单命令 |\r
| 查看文件 | \`docker exec nginx cat /etc/nginx/nginx.conf\` | 读取文件内容 |\r
| 查看目录 | \`docker exec nginx pwd\` | 显示当前路径 |\r
| 查看进程 | \`docker exec nginx ps aux\` | 列出所有进程 |\r
| 环境变量 | \`docker exec nginx printenv\` | 显示所有环境变量 |\r
\r
### 交互式进入容器\r
\r
| 命令 | 说明 |\r
|------|------|\r
| \`docker exec -it nginx sh\` | 进入 sh 交互模式 |\r
| \`docker exec -it nginx bash\` | 进入 bash 交互模式 |\r
| 进入后直接执行命令 | 在容器内 shell 中可以直接使用重定向、管道等 |\r
\r
---\r
\r
## 引号使用规则\r
\r
### 单引号 vs 双引号\r
\r
| 引号类型 | 变量展开位置 | 命令示例 | 输出结果 |\r
|---------|-------------|---------|---------|\r
| 双引号 \`"\` | 宿主机 | \`docker exec nginx sh -c "echo $USER"\` | 宿主机的用户名 |\r
| 单引号 \`'\` | 容器内 | \`docker exec nginx sh -c 'echo $USER'\` | 容器内的用户名（通常是 root） |\r
| 转义 \`\\$\` | 容器内 | \`docker exec nginx sh -c "echo \\$USER"\` | 容器内的用户名 |\r
\r
### 嵌套引号示例\r
\r
| 场景 | 命令示例 | 说明 |\r
|------|---------|------|\r
| 外双内单 | \`docker exec nginx sh -c "echo 'Hello World'"\` | 常用方式 |\r
| 外单内双 | \`docker exec nginx sh -c 'echo "Hello World"'\` | 防止变量展开 |\r
| 复杂嵌套 | \`docker exec nginx sh -c "grep 'error' /var/log/nginx/error.log"\` | 搜索包含单引号的内容 |\r
\r
---\r
\r
## 执行位置对比\r
\r
### 重定向符号的执行位置\r
\r
| 命令 | 重定向执行位置 | 文件创建位置 |\r
|------|---------------|-------------|\r
| \`docker exec nginx echo 'test' > file.txt\` | 宿主机 | 宿主机 |\r
| \`docker exec nginx sh -c "echo 'test' > file.txt"\` | 容器内 | 容器内 |\r
\r
### 管道符号的执行位置\r
\r
| 命令 | 管道执行位置 | 结果 |\r
|------|-------------|------|\r
| \`docker exec nginx ps aux \\| grep nginx\` | 宿主机 | 可能出错 |\r
| \`docker exec nginx sh -c "ps aux \\| grep nginx"\` | 容器内 | 正确 |\r
\r
### 变量展开的位置\r
\r
| 命令 | 变量展开位置 | 值来源 |\r
|------|-------------|--------|\r
| \`docker exec nginx sh -c "echo $PATH"\` | 宿主机 | 宿主机环境变量 |\r
| \`docker exec nginx sh -c 'echo $PATH'\` | 容器内 | 容器环境变量 |\r
\r
---\r
\r
## 实用技巧\r
\r
### 1. 调试命令\r
\r
| 选项 | 命令示例 | 说明 |\r
|------|---------|------|\r
| \`set -x\` | \`docker exec nginx sh -c "set -x; echo 'test' > /tmp/test.txt"\` | 显示执行的命令 |\r
| \`set -e\` | \`docker exec nginx sh -c "set -e; cmd1; cmd2; cmd3"\` | 遇到错误立即退出 |\r
| \`set -ex\` | \`docker exec nginx sh -c "set -ex; apt-get update && apt-get install -y vim"\` | 组合使用 |\r
\r
### 2. 后台执行\r
\r
\`\`\`bash\r
# 在容器内后台运行命令\r
docker exec -d nginx sh -c "sleep 100 && echo 'done' > /tmp/result.txt"\r
\r
# 查看后台任务\r
docker exec nginx ps aux | grep sleep\r
\`\`\`\r
\r
### 3. 指定工作目录\r
\r
| 方式 | 命令示例 | 说明 |\r
|------|---------|------|\r
| 使用 \`-w\` | \`docker exec -w /usr/share/nginx/html nginx sh -c "ls -la && pwd"\` | Docker 参数指定 |\r
| 使用 \`cd\` | \`docker exec nginx sh -c "cd /usr/share/nginx/html && ls -la"\` | 命令中切换 |\r
\r
### 4. 指定用户执行\r
\r
| 用户 | 命令示例 | 说明 |\r
|------|---------|------|\r
| 指定用户 | \`docker exec -u nginx nginx sh -c "whoami && id"\` | 以 nginx 用户执行 |\r
| root 用户 | \`docker exec -u root nginx sh -c "apt-get update"\` | 以 root 执行 |\r
\r
### 5. 传递复杂脚本\r
\r
\`\`\`bash\r
# 方法1：使用 heredoc\r
docker exec nginx sh -c "$(cat << 'EOF'\r
#!/bin/sh\r
echo "Starting script..."\r
for i in 1 2 3; do\r
  echo "Step $i"\r
done\r
echo "Script completed"\r
EOF\r
)"\r
\r
# 方法2：从文件读取\r
docker exec nginx sh < local-script.sh\r
\r
# 方法3：复制脚本后执行\r
docker cp script.sh nginx:/tmp/\r
docker exec nginx sh /tmp/script.sh\r
\`\`\`\r
\r
---\r
\r
## 常见错误和解决\r
\r
### 错误对比表\r
\r
| 错误类型 | 错误示例 ❌ | 正确示例 ✅ | 问题原因 |\r
|---------|-----------|-----------|---------|\r
| 重定向到宿主机 | \`docker exec nginx echo 'test' > /tmp/test.txt\` | \`docker exec nginx sh -c "echo 'test' > /tmp/test.txt"\` | 重定向在宿主机执行 |\r
| 管道不生效 | \`docker exec nginx ps aux \\| grep nginx\` | \`docker exec nginx sh -c "ps aux \\| grep nginx"\` | 管道在宿主机执行 |\r
| 变量展开错误 | \`docker exec nginx sh -c "echo $HOME"\` | \`docker exec nginx sh -c 'echo $HOME'\` | 变量在宿主机展开 |\r
| 特殊字符转义 | \`docker exec nginx sh -c "awk '{print $1}' file.txt"\` | \`docker exec nginx sh -c "awk '{print \\$1}' file.txt"\` | $ 被宿主机解释 |\r
\r
### 详细说明\r
\r
**错误1：重定向到宿主机**\r
\`\`\`bash\r
# ❌ 错误：文件创建在宿主机\r
docker exec nginx echo 'test' > /tmp/test.txt\r
\r
# ✅ 正确：文件创建在容器内\r
docker exec nginx sh -c "echo 'test' > /tmp/test.txt"\r
\`\`\`\r
\r
**错误2：管道不生效**\r
\`\`\`bash\r
# ❌ 错误：管道在宿主机执行\r
docker exec nginx ps aux | grep nginx\r
\r
# ✅ 正确：管道在容器内执行\r
docker exec nginx sh -c "ps aux | grep nginx"\r
\`\`\`\r
\r
**错误3：变量展开错误**\r
\`\`\`bash\r
# ❌ 错误：展开宿主机的 $HOME\r
docker exec nginx sh -c "echo $HOME"\r
\r
# ✅ 正确：展开容器内的 $HOME\r
docker exec nginx sh -c 'echo $HOME'\r
\`\`\`\r
\r
**错误4：特殊字符转义**\r
\`\`\`bash\r
# ❌ 错误：$ 被宿主机解释\r
docker exec nginx sh -c "awk '{print $1}' file.txt"\r
\r
# ✅ 正确：转义 $\r
docker exec nginx sh -c "awk '{print \\$1}' file.txt"\r
\r
# ✅ 或使用单引号\r
docker exec nginx sh -c 'awk "{print $1}" file.txt'\r
\`\`\`\r
\r
---\r
\r
## 最佳实践\r
\r
### 实践对比表\r
\r
| 实践 | 不推荐 ⚠️ | 推荐 ✅ | 原因 |\r
|------|----------|--------|------|\r
| Shell 选择 | \`bash -c\` | \`sh -c\` | sh 兼容性更好 |\r
| 复杂命令 | 长命令字符串 | 使用脚本文件 | 易于维护和调试 |\r
| 变量展开 | 双引号 \`"$VAR"\` | 单引号 \`'$VAR'\` | 避免宿主机变量干扰 |\r
| 错误处理 | 不处理错误 | \`set -e\` 或 \`&&\` | 确保命令链可靠性 |\r
\r
### 1. 优先使用 sh 而非 bash\r
\r
\`\`\`bash\r
# ✅ 推荐：兼容性好\r
docker exec nginx sh -c "command"\r
\r
# ⚠️ 谨慎：可能不存在\r
docker exec nginx bash -c "command"\r
\`\`\`\r
\r
### 2. 复杂命令使用脚本文件\r
\r
\`\`\`bash\r
# 不推荐：命令太长难以维护\r
docker exec nginx sh -c "apt-get update && apt-get install -y vim curl wget && ..."\r
\r
# ✅ 推荐：使用脚本文件\r
# 1. 创建脚本\r
cat > setup.sh << 'EOF'\r
#!/bin/sh\r
apt-get update\r
apt-get install -y vim curl wget\r
echo "Setup complete"\r
EOF\r
\r
# 2. 复制到容器\r
docker cp setup.sh nginx:/tmp/\r
\r
# 3. 执行脚本\r
docker exec nginx sh /tmp/setup.sh\r
\`\`\`\r
\r
### 3. 使用单引号避免变量展开\r
\r
\`\`\`bash\r
# ✅ 推荐：使用单引号\r
docker exec nginx sh -c 'echo $PATH'\r
\r
# ⚠️ 需要注意：双引号会在宿主机展开\r
docker exec nginx sh -c "echo $PATH"\r
\`\`\`\r
\r
### 4. 添加错误处理\r
\r
\`\`\`bash\r
# ✅ 推荐：添加 set -e\r
docker exec nginx sh -c "set -e; command1; command2; command3"\r
\r
# ✅ 推荐：使用 && 连接\r
docker exec nginx sh -c "command1 && command2 && command3"\r
\`\`\`\r
\r
---\r
\r
## 📌 关键要点总结\r
\r
1. **sh -c 的作用** - 在容器内启动 shell 执行命令字符串\r
2. **使用场景** - 涉及重定向、管道、变量、多命令时必须使用\r
3. **sh vs bash** - sh 兼容性更好，优先使用\r
4. **引号规则** - 单引号防止宿主机变量展开，双引号允许展开\r
5. **执行位置** - 不用 -c 时特殊字符在宿主机处理，用 -c 在容器内处理\r
6. **简单命令** - 不涉及特殊字符时可以不用 -c\r
7. **复杂脚本** - 建议使用脚本文件而非长命令字符串\r
8. **错误处理** - 使用 set -e 或 && 确保命令链的可靠性\r
\r
---\r
\r
## 🔗 相关命令对比\r
\r
| 使用场景 | 命令示例 | 说明 |\r
|---------|---------|------|\r
| 简单命令 | \`docker exec nginx ls /tmp\` | 不需要 -c |\r
| 复杂命令 | \`docker exec nginx sh -c "ls /tmp | wc -l"\` | 需要 -c |\r
| 交互进入 | \`docker exec -it nginx sh\` | 进入容器 shell |\r
| 后台执行 | \`docker exec -d nginx sh -c "long_command"\` | 后台运行 |\r
| 指定用户 | \`docker exec -u nginx nginx sh -c "whoami"\` | 以特定用户执行 |\r
| 指定目录 | \`docker exec -w /tmp nginx sh -c "pwd"\` | 指定工作目录 |\r
`;export{n as default};
