const r=`# Ubuntu 登录信息解读\r
\r
## ❓ 问题\r
\r
Ubuntu 登录时显示的系统信息（System load、Memory usage 等）分别是什么意思？\r
\r
## ✅ 解答\r
\r
### 系统版本信息\r
\r
\`\`\`\r
Welcome to Ubuntu 22.04.5 LTS (GNU/Linux 6.6.87.2-microsoft-standard-WSL2 x86_64)\r
\`\`\`\r
\r
- **Ubuntu 22.04.5 LTS**：长期支持版本\r
- **WSL2**：Windows Subsystem for Linux 2\r
- **内核版本**：6.6.87.2\r
\r
### 系统状态指标\r
\r
| 指标 | 含义 | 示例值 |\r
|------|------|--------|\r
| System load | CPU 平均负载（1分钟） | 1.16 |\r
| Usage of / | 根目录磁盘使用率 | 0.4% of 1006.85GB |\r
| Memory usage | 内存使用率 | 5% |\r
| Swap usage | 交换空间使用率 | 0% |\r
| Processes | 当前运行进程数 | 34 |\r
| Users logged in | 登录用户数 | 0 |\r
| IPv4 address | 网络接口 IP 地址 | 172.24.72.60 |\r
\r
### 详细说明\r
\r
**System load（系统负载）**\r
- 表示 CPU 的平均使用情况\r
- 1.16 表示过去 1 分钟的平均负载\r
- 小于 CPU 核心数表示系统负载正常\r
\r
**Memory usage（内存使用率）**\r
- 5% 表示内存使用很少，资源充足\r
- 超过 80% 时需要注意性能问题\r
\r
**Swap usage（交换空间）**\r
- 0% 表示没有使用虚拟内存\r
- 说明物理内存足够使用\r
\r
**IPv4 address**\r
- 172.24.72.60 是 WSL2 的虚拟网络地址\r
- 每次启动可能会变化\r
\r
## 💡 小贴士\r
\r
- 可以创建 \`~/.hushlogin\` 文件来隐藏每日提示信息\r
- 使用 \`htop\` 命令可以实时查看系统资源使用情况\r
- WSL2 的 IP 地址可以通过 \`ip addr\` 命令查看\r
\r
## 🔗 相关命令\r
\r
\`\`\`bash\r
# 查看系统负载\r
uptime\r
\r
# 查看内存使用\r
free -h\r
\r
# 查看磁盘使用\r
df -h\r
\r
# 查看进程\r
ps aux\r
\`\`\`\r
`;export{r as default};
