# EpiCon project page

独立静态网页，内容取自 `new_version_v4`；作者和单位以用户提供的名单为准。无需 npm、编译或后端服务，可直接放到 GitHub Pages。

## 本地查看

直接打开 `index.html`，或者在此文件夹运行 `python3 -m http.server 8000`，访问 `http://localhost:8000`。本地文件模式下复制按钮优先使用兼容方式；若浏览器不允许复制，页面会选中引用文字，可按 ⌘C / Ctrl+C。

## 上传 GitHub Pages

1. 将此文件夹内的全部内容上传到仓库根目录，保留 `.nojekyll`。
2. 在仓库 Settings → Pages 中选择 Deploy from a branch，并选择对应分支和 `/ (root)`。
3. 页面内所有资源均为相对路径，兼容 `https://用户名.github.io/仓库名/`。

如放在 `docs/`，选择 `/docs` 作为发布目录。无需额外依赖，也不调用在线字体、CDN、分析服务或第三方脚本。

## 论文与代码链接

编辑 `config.js`：

```js
window.EPICON_CONFIG = {
  paperUrl: 'https://arxiv.org/pdf/2609.37923',
  githubUrl: '',
  arxivId: '2609.37923',
  year: '2026'
};
```

- Paper 已链接至论文 PDF：https://arxiv.org/pdf/2609.37923 。GitHub 按钮仍为 Coming soon，填入代码仓库 URL 后自动启用。
- `arxivId` 会更新页面上可复制的 BibTeX。`assets/citation.bib` 是静态备用副本，后续更改引用时请同步更新。
- 页面与备用 BibTeX 均使用 arXiv 编号 `2609.37923`，保留完整作者和标题，不含待发布占位说明。
- 作者、单位链接在访问前后保持相同颜色。

## 内容和数据

- 完整摘要、方法框架图、地铁示例图、性能与时间图来自论文。
- 主表包含四种 host 配置、28 行结果、11 个 benchmark，以及分开的 MAS / memory 时间和 token 数据。
- 包含跨 backbone/harness 迁移、记忆库演化、问题级控制、多模态消融、树结构消融和更强 solver 的 HTML 表格；表格不是截图。
- 表格 Mean 是对展示的 11 个分数进行等权平均后四舍五入，其他数值保留论文精度。主表原始数据也在 `assets/main-results.csv` 和 `assets/results.json`。
- 主结果/迁移评测：单次作答、历史记忆库冻结、禁止问题级更新。
- 问题级/视觉记忆消融：不检索历史库；No Memory 单次作答，记忆设置最多五次。
- 地铁示例注明是重构的说明性轨迹；67–74% 的节省仅指 memory-operation time，不是总时间。
- 以论文陈述为准，没有声称所有 benchmark 一致提高。

## 视频

`assets/epicon-overview.mp4`：1920×1080、30 fps、约 2 分 3 秒，英语合成配音和烧录英文字幕。配音通过 macOS Samantha 在本机生成，没有将论文内容发送给外部配音服务。`assets/epicon-overview.vtt` 提供独立字幕轨；视频已烧录字幕，通常不需要额外开启字幕轨。

完整旁白、SRT、视频制作源码位于同级 `epicon-video` 文件夹。网页文件夹已经包含所需视频和图片，上传时无需上传视频制作文件夹。

## 作者与单位网址

- Ziyun Zeng: https://zzzmyyzeng.github.io/
- Hang Hua: https://hanghuacs.notion.site/
- Shaden Alshammari: https://shadealsha.github.io/
- Rogerio Feris: https://www.rogerioferis.org/
- William T. Freeman: https://billf.mit.edu/
- Jiebo Luo: https://www.cs.rochester.edu/u/jluo/
- MIT-IBM Computing Research Lab: https://mitibm.mit.edu/
- University of Rochester: https://www.rochester.edu/
- Massachusetts Institute of Technology: https://www.mit.edu/

页面结构参考 https://www.yongshengyu.com/Aurora-Page/ 。实现为独立代码，没有复制其图片或视频。
