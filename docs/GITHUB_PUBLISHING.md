# GitHub 发布流程

## 为什么不是只上传小程序

微信小程序工程不能在 GitHub 页面里直接运行。公开展示时建议同时提供：

- 根目录 `index.html`：任何人打开链接就能体验动态 UI。
- `miniprogram/`：开发者可用微信开发者工具导入。
- `docs/`：说明产品逻辑、推荐模型和后续规划。

## 本地准备

在本目录执行：

```bash
git init
git branch -M main
git add .
git commit -m "Create Youxing public prototype"
```

## 创建 GitHub 仓库

1. 打开 GitHub。
2. 点击 `New repository`。
3. Repository name 建议使用 `youxing` 或 `youxing-style-advisor`。
4. Visibility 选择 `Public`。
5. 不要勾选自动生成 README、license 或 `.gitignore`，因为本目录已经准备好。

## 推送

把下面的地址替换为你的 GitHub 用户名和仓库名：

```bash
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

## 开启 GitHub Pages

1. 进入仓库 `Settings -> Pages`。
2. Source 选择 `Deploy from a branch`。
3. Branch 选择 `main`。
4. Folder 选择 `/root`。
5. 保存后等待 1-3 分钟。

完成后预览链接通常是：

```text
https://<username>.github.io/<repo>/
```

## 公开前检查

- 不要提交真实 AppID、密钥、接口地址或用户数据。
- 不要默认添加 MIT 等开源许可证，除非你明确愿意授权他人复用。
- README 首屏要说明项目是什么、怎么预览、怎么运行。
- 小程序工程和网页原型的品牌、入口命名要一致。
