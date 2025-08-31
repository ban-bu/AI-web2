# Railway 部署指南

本文档介绍如何将 Erin Cho's AI实验室网站 部署到 Railway 平台。

## 前置条件

1. 拥有 Railway 账户（访问 [railway.app](https://railway.app) 注册）
2. 项目代码已推送到 GitHub 仓库
3. 确保项目能够正常构建

## 部署步骤

### 1. 准备项目

项目已经配置好以下文件：

- `package.json` - 包含构建和启动脚本
- `railway.toml` - Railway 配置文件
- `vite.config.ts` - Vite 构建配置

### 2. 连接 Railway

1. 登录 [Railway Dashboard](https://railway.app/dashboard)
2. 点击 "New Project"
3. 选择 "Deploy from GitHub repo"
4. 选择包含此项目的 GitHub 仓库

### 3. 配置部署

Railway 会自动检测到 `railway.toml` 配置文件，包含以下设置：

```toml
[build]
builder = "nixpacks"

[deploy]
startCommand = "npm start"

[env]
NODE_ENV = "production"
```

### 4. 环境变量

在 Railway Dashboard 中设置以下环境变量（如果需要）：

- `NODE_ENV`: `production`
- `PORT`: Railway 会自动设置

### 5. 部署过程

1. Railway 会自动运行 `npm install` 安装依赖
2. 执行 `npm run build` 构建项目
3. 使用 `npm start` 启动应用

### 6. 访问应用

部署完成后，Railway 会提供一个公共 URL，可以通过该 URL 访问您的网站。

## 脚本说明

- `npm run dev`: 本地开发服务器
- `npm run build`: 构建生产版本
- `npm run preview`: 本地预览构建结果
- `npm start`: 生产环境启动命令（用于 Railway）

## 故障排除

### 构建失败

1. 检查 `package.json` 中的依赖是否正确
2. 确保所有必要的文件都已提交到仓库
3. 查看 Railway 构建日志获取详细错误信息

### 应用无法启动

1. 确保 `npm start` 命令在本地能正常工作
2. 检查端口配置是否正确使用 `$PORT` 环境变量
3. 查看 Railway 应用日志

### 静态资源加载失败

1. 确保构建输出目录配置正确（当前为 `build`）
2. 检查 Vite 配置中的 base 路径设置

## 更新部署

每次推送代码到 GitHub 主分支时，Railway 会自动重新部署应用。

## 支持

如遇到问题，可以：

1. 查看 [Railway 官方文档](https://docs.railway.app/)
2. 检查 Railway Dashboard 中的构建和应用日志
3. 确保本地构建和预览都能正常工作