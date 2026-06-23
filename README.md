# 有型

有型是一个面向微信小程序场景的穿搭与形象建议产品原型。它通过性别表达、年龄阶段、脸型、体型、肤色、发型、场景和目标效果等结构化选项，生成发型、穿搭、色彩和版型建议。

这个仓库采用“网页可交互原型 + 微信小程序工程骨架 + 产品文档”的形式公开展示。原因是 GitHub Pages 可以直接预览网页，但不能直接运行微信小程序；因此根目录的 `index.html` 用作可分享 Demo，`miniprogram/` 用作后续真实小程序开发基础。

## 在线预览

GitHub Pages 启用后，访问：

```text
https://chaos-k.github.io/youxing/
```

本地也可以直接双击根目录的 `index.html` 查看动态 UI。

## 项目内容

```text
youxing/
  index.html             可分享的动态 UI 预览页
  miniprogram/           微信小程序工程骨架
  docs/
    PRODUCT_SPEC.md      产品方案
    RECOMMENDATION_MODEL.md 推荐模型与知识库设计
    GITHUB_PUBLISHING.md GitHub 发布流程
  .nojekyll              GitHub Pages 静态站点配置
  .gitignore
```

## 核心能力

- 按性别表达和年龄阶段生成不同诊断路径。
- 年龄阶段覆盖宝宝、儿童、青少年、大学生、初入职场、成熟职场、中年和银发人群。
- 支持完整诊断、发型定位、身形版型三类入口。
- 发型定位只围绕发型建议，不混入服饰穿搭问题。
- 身形版型聚焦肩线、腰线、腿型、版型和场景。
- 提供术语科普入口，帮助用户理解柔和轮廓、清晰轮廓、量感、腰线、肩线等形象设计概念。

## 本地运行

网页预览：

```text
直接打开 index.html
```

微信小程序：

```text
使用微信开发者工具导入 miniprogram/ 目录
```

## 发布到 GitHub Pages

1. 在 GitHub 创建公开仓库。
2. 将本目录内容推送到仓库。
3. 进入仓库 `Settings -> Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub 生成访问链接。

详细步骤见 [docs/GITHUB_PUBLISHING.md](docs/GITHUB_PUBLISHING.md)。

## 授权说明

本仓库暂未选择开源许可证。公开展示不代表允许商用复用；后续可根据项目定位选择 MIT、Apache-2.0，或继续保留全部权利。

