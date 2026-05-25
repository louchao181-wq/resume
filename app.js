const resume = {
  name: "楼超",
  role: "AI 开发工程师",
  highlights: [
    "百度广州 AI 实习，参与 Prompt 工程、数据标注质量管理、模型评测题设计与结果分析",
    "中文核心期刊论文第一作者，研究强化学习、机制设计和多智能体决策",
    "企业运营智能体平台：RAG + MCP + LangGraph 多智能体协作，知识查询从 3 分钟降至 10 秒",
    "Coze 智能助手：多模型调度、本地知识库与实时搜索校验，过滤约 30% 无效广告信息",
  ],
};

const answers = [
  {
    keywords: ["自我", "介绍", "一分钟", "你是谁"],
    text:
      "您好，我是楼超，求职方向是 AI 开发工程师。\n\n我的优势是既有 AI 技术背景，也能从产品落地角度理解大模型应用。我在研究生阶段的研究方向是人工智能，第一作者中文核心论文聚焦强化学习、机制设计和多智能体决策；项目上做过基于 RAG、MCP、LangGraph 的企业运营智能体平台，也做过基于 Coze 的多模型智能助手。\n\n实习方面，我在百度广州做过 AI 实习，参与 Prompt 优化、2000+ 条高质量标注数据、500+ 道模型评测题设计，并输出问题分析反馈。整体来看，我比较适合需要把大模型能力真正落地到业务场景的 AI 开发岗位。",
  },
  {
    keywords: ["项目", "ai能力", "亮点", "agent", "智能体", "rag", "mcp"],
    text:
      "最能体现我 AI 应用能力的是“企业运营智能体平台”。这个项目面向企业内部 SOP、产品手册、历史工单、订单和定价系统查询效率低的问题。\n\n我设计了 RAG + MCP + 多智能体协作架构：用 LangChain 构建本地知识库，用 MCP Server 封装订单查询、订单更新、动态定价等工具，再用 LangGraph 编排 Supervisor 与 WorkerAgent，让 Agent 根据任务自动选择 RAG 检索或工具调用。\n\n结果上，知识查询时间从约 3 分钟缩短到 10 秒，效率提升 95%；超时订单处理自动化率达到 70%；同时形成了可复用的企业 Agent 开发脚手架。",
  },
  {
    keywords: ["百度", "实习", "工作", "ai实习"],
    text:
      "我在百度广州分公司做 AI 实习，核心工作围绕大模型效果提升和评测。\n\n第一是 Prompt 工程优化，针对多轮对话、逻辑推理、代码生成等任务设计模板，提升响应准确率和稳定性。\n\n第二是数据标注与质量管理，我制定标注规范和质控流程，累计完成 2000+ 条高质量标注数据，支撑模型微调与评估。\n\n第三是评测题设计，我自主设计数学推理、代码纠错、语义理解等 500+ 道题目，并提供标准答案和评分标准。\n\n第四是结果分析，识别模型偏见、幻觉、逻辑断裂等典型问题，形成评测报告推动优化。",
  },
  {
    keywords: ["技术", "技能", "技术栈", "会什么"],
    text:
      "我的技术栈可以分为四类。\n\nAI 应用方向：RAG、LangChain、LangGraph、MCP、多智能体协作、Prompt 工程、大模型评测。\n\n算法与建模方向：Python、PyTorch、强化学习、仿真建模、Agent 决策。\n\n工程开发方向：Java 后端服务搭建、SQL / MySQL 数据提取与存储、Git。\n\n测试与产品工具：PyTest、Coze 平台、OBS、Xmind、墨刀。我比较擅长把 AI 能力拆成可交付模块，而不是只停留在模型调用。",
  },
  {
    keywords: ["科研", "论文", "研究", "强化学习"],
    text:
      "我的科研经历是一篇中文核心期刊论文，第一作者，已录用，题目是《并行分配下最优二元估值操弄算法研究》。\n\n研究方向涉及强化学习、机制设计和多智能体决策。我主要做了三件事：针对并行分配场景中的估值操纵问题设计强化学习优化策略；搭建仿真环境并实现 CPGC / ODM 算法，通过对比实验验证收敛性和鲁棒性；独立完成模型设计、Python 实验编码和论文撰写。\n\n这段经历训练了我把复杂算法问题转化为可验证实验方案的能力。",
  },
  {
    keywords: ["成绩", "教育", "学校", "课程", "学历"],
    text:
      "我硕士就读于桂林电子科技大学计算机技术专业，研究方向是人工智能，学分绩 84.39/100，专业前 30%。主修运筹学、信息安全数学基础、数据仓库与数据挖掘、自然语言处理。\n\n本科是桂林电子科技大学网络工程专业，学分绩 83.78/100，专业前 10%，主修数据结构与算法、操作系统、计算机网络、数据库。\n\n教育背景上，我的优势是计算机基础比较完整，同时研究生阶段聚焦 AI 方向。",
  },
  {
    keywords: ["适合", "岗位", "为什么", "优势"],
    text:
      "我适合 AI 开发工程师岗位，主要因为三点。\n\n第一，我不是只会调 API，而是理解 RAG、MCP、多智能体协作、Prompt 工程和大模型评测这些 AI 应用落地链路。\n\n第二，我有真实场景经验：百度 AI 实习让我接触到模型评测、数据质量和 Prompt 稳定性；企业运营智能体项目让我把 RAG、MCP、LangGraph 组合成可复用平台。\n\n第三，我能兼顾技术和产品。比如 Coze 智能助手项目里，我不只做对话模块，还关注广告过滤、信息可信度校验和用户获取有效信息的时间。",
  },
  {
    keywords: ["游戏", "策略", "拆解", "爱好", "策划", "数值", "玩法"],
    text:
      "游戏策略是我额外想展示的能力方向。我的优势不是只停留在“爱玩游戏”，而是能把游戏体验拆成系统、数值、资源、用户心理和长期留存机制。\n\n以《三角洲行动》跑刀玩法拆解案为例，我分析了地图出生点与资源分布带来的开局公平性问题、机密大坝容器爆率形成的目标争夺、跑刀玩法的收益计算模型，以及跑刀玩家和猛攻玩家在沉没成本、目标路径和心理反馈上的差异。\n\n这能体现三类能力：第一，能用结构化方法拆解复杂玩法；第二，能从数据和经济模型角度解释玩家行为；第三，能把游戏理解迁移到 AI 产品、运营分析、玩家反馈总结和策略岗位表达中。",
  },
];

const tabs = {
  projects: [
    {
      title: "企业运营智能体平台",
      text: "基于 RAG + MCP + LangGraph 的运营助手平台，连接 SOP、产品手册、历史工单和订单/定价系统。",
      points: ["知识查询从 3 分钟降至 10 秒", "超时订单处理自动化率 70%", "新增工具集成成本降低 60%"],
      tags: ["RAG", "MCP", "LangGraph", "ReAct", "Agent"],
    },
    {
      title: "基于 Coze 平台的智能助手",
      text: "通过多模型协同、本地知识库和实时搜索校验，解决传统搜索广告干扰和信息可信度问题。",
      points: ["过滤约 30% 无效广告信息", "单次有效信息获取时间缩短约 40%", "支持问题类型驱动的模型动态调度"],
      tags: ["Coze", "Python", "多模型调度", "知识库", "搜索校验"],
    },
  ],
  internship: [
    {
      title: "百度广州分公司 · AI 实习生",
      text: "参与大模型 Prompt 优化、数据标注质量管理、评测题设计和结果分析。",
      points: ["完成 2000+ 条高质量标注数据", "设计 500+ 道模型评测题", "输出幻觉、偏见、逻辑断裂等问题分析报告"],
      tags: ["Prompt Engineering", "模型评测", "数据标注", "质量控制"],
    },
    {
      title: "佛山市国星光电 · 测试工程师",
      text: "本科实习期间用 Python + PyTest 搭建数据驱动测试框架，并结合图像识别做光学性能判定。",
      points: ["发现并解决 2 项内部测试框架深层产品缺陷", "积累自动化测试与工程质量经验"],
      tags: ["Python", "PyTest", "自动化测试", "图像识别"],
    },
  ],
  education: [
    {
      title: "桂林电子科技大学 · 计算机技术硕士",
      text: "研究方向为人工智能，学分绩 84.39/100，专业前 30%。",
      points: ["主修自然语言处理、数据仓库与数据挖掘、运筹学", "校级二等奖学金一次，三等奖学金两次", "中文核心期刊论文第一作者"],
      tags: ["人工智能", "NLP", "强化学习", "机制设计"],
    },
    {
      title: "桂林电子科技大学 · 网络工程本科",
      text: "学分绩 83.78/100，专业前 10%，计算机基础扎实。",
      points: ["主修数据结构与算法、操作系统、计算机网络、数据库"],
      tags: ["网络工程", "数据结构", "操作系统", "数据库"],
    },
  ],
  skills: [
    {
      title: "AI 能力",
      text: "围绕大模型应用落地的完整能力栈。",
      points: ["RAG、LangChain、LangGraph、MCP", "Prompt 工程、大模型评测、多智能体协作", "PyTorch、强化学习、Agent 决策"],
      tags: ["LLM", "RAG", "MCP", "Prompt", "Multi-Agent"],
    },
    {
      title: "工程能力",
      text: "具备后端、数据、测试和产品原型相关经验。",
      points: ["Java 后端服务搭建，Python 仿真建模和工具开发", "SQL / MySQL 数据提取与存储", "Git、PyTest、OBS、Xmind、墨刀"],
      tags: ["Java", "Python", "SQL", "Git", "PyTest"],
    },
  ],
  growth: [
    {
      title: "《三角洲行动》跑刀玩法拆解案",
      text: "围绕“烽火地带”跑刀玩法，拆解地图资源、出生点公平性、容器爆率、收益阈值、玩家目标差异和乐趣模型。",
      points: ["用地图与资源分布解释早期冲突方向和开局不平衡", "用安全箱收益阈值和撤离成本分析跑刀玩法可行性", "用低成本试错、高频正反馈和风险决策解释玩法为什么成为主流"],
      tags: ["FPS", "撤离玩法", "跑刀", "收益模型", "玩家心理"],
      media: [
        {
          src: "./assets/delta-page-06.png",
          title: "出生点与资源分布",
          desc: "分析随机出生点、资源密集区与早期冲突路线。",
        },
        {
          src: "./assets/delta-page-07.png",
          title: "容器爆率与目标争夺",
          desc: "将容器价值分层，解释玩家优先争夺目标。",
        },
        {
          src: "./assets/delta-page-10.png",
          title: "跑刀收益模型",
          desc: "用成本、撤离和安全箱收益阈值分析盈利条件。",
        },
        {
          src: "./assets/delta-page-12.png",
          title: "玩家目标差异",
          desc: "对比跑刀玩家与猛攻玩家的沉没成本和反馈路径。",
        },
      ],
      links: [
        {
          href: "./assets/delta-force-analysis.pdf",
          label: "完整案例",
          title: "《三角洲行动》跑刀玩法完整拆解案",
          desc: "完整展示地图资源、容器爆率、收益模型、玩家目标差异和乐趣模型分析。",
        },
        {
          href: "./assets/game-product-resume.pdf",
          label: "游戏策略简历",
          title: "游戏产品/策略方向简历",
          desc: "展示多品类游戏经历、系统拆解、原型表达、数据分析和 AI + 游戏方向潜力。",
        },
      ],
    },
    {
      title: "游戏产品能力亮点",
      text: "游戏产品类简历体现了多品类深度体验、系统拆解、原型表达和数据分析能力。",
      points: ["累计游戏时长 8000+ 小时，覆盖 ARPG、MOBA、射击、卡牌、解谜、Rouguelike、长线手游等品类", "能用 Xmind 拆解系统逻辑，用墨刀构建高保真原型，辅助功能交互表达", "具备 Excel 数据处理能力，可用于游戏日志分析、基础数值平衡测试和运营数据整理"],
      tags: ["8000+ 小时玩家", "Xmind", "墨刀", "数据分析", "多品类经验"],
    },
    {
      title: "与 AI 背景的组合价值",
      text: "游戏策划经历不是和 AI 方向割裂的补充，而是能强化产品理解和复杂系统分析能力。",
      points: ["Multi-Agent 研究背景可迁移到 NPC 行为、游戏经济系统和多人博弈分析", "Prompt 与评测经验可用于玩家反馈归因、社区舆情总结和活动复盘", "工程能力能帮助策略岗位更好地和研发、数据、AI 工具链协作"],
      tags: ["AI + 游戏", "多智能体", "策略分析", "玩家反馈", "跨职能协作"],
    },
  ],
  materials: [
    {
      title: "成绩与语言能力",
      text: "集中展示成绩单和英语四级材料，便于 HR 快速核验教育背景与基础能力。",
      points: ["硕士/本科成绩材料可作为教育背景证明", "CET-4 证书可作为英语能力佐证"],
      tags: ["成绩单", "CET-4", "教育材料"],
      media: [
        {
          src: "./assets/transcript.pdf",
          thumb: "./assets/transcript-page-1.png",
          type: "document",
          title: "学生成绩单",
          desc: "完整成绩单 PDF，点击后在当前页面预览。",
        },
        {
          src: "./assets/cet4.pdf",
          thumb: "./assets/cet4-page-1.png",
          type: "document",
          title: "英语四级证书",
          desc: "CET-4 证明材料，点击后在当前页面预览。",
        },
      ],
    },
    {
      title: "奖学金与志愿服务",
      text: "用证书材料补充展示稳定表现、责任意识和校园/社会服务经历。",
      points: ["2022 年、2023 年研究生奖学金", "2023 环广西公路自行车世界巡回赛优秀志愿者"],
      tags: ["奖学金", "优秀志愿者", "综合素质"],
      media: [
        {
          src: "./assets/scholarship-2023.jpg",
          title: "2023 年奖学金证书",
          desc: "研究生阶段奖学金证明材料。",
        },
        {
          src: "./assets/scholarship-2022.jpg",
          title: "2022 年奖学金证书",
          desc: "研究生阶段奖学金证明材料。",
        },
        {
          src: "./assets/volunteer.jpg",
          title: "优秀志愿者证书",
          desc: "环广西公路自行车世界巡回赛志愿服务证明。",
        },
        {
          src: "./assets/profile-photo.jpg",
          title: "生活照",
          desc: "当前数字人区域使用的临时形象占位照片。",
        },
      ],
    },
  ],
};

const chatLog = document.querySelector("#chatLog");
const askForm = document.querySelector("#askForm");
const questionInput = document.querySelector("#questionInput");
const quickButtons = document.querySelectorAll("[data-question]");
const tabButtons = document.querySelectorAll("[data-tab]");
const tabContent = document.querySelector("#tabContent");
const casePreview = document.querySelector("#casePreview");
const casePreviewPanel = casePreview?.querySelector(".case-preview-panel");
const casePreviewImage = document.querySelector("#casePreviewImage");
const casePreviewFrame = document.querySelector("#casePreviewFrame");
const casePreviewTitle = document.querySelector("#casePreviewTitle");
const casePreviewDesc = document.querySelector("#casePreviewDesc");
let activePreviewTrigger = null;

function addMessage(role, text) {
  const message = document.createElement("article");
  message.className = `message ${role}`;
  const speaker = role === "user" ? "HR" : "楼超 AI";
  message.innerHTML = `
    <span class="speaker">${speaker}</span>
    <div class="bubble">${text}</div>
  `;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function findAnswer(question) {
  const normalized = question.toLowerCase();
  const match = answers.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword.toLowerCase())),
  );

  if (match) return match.text;

  return `这个问题我可以结合简历进一步展开。当前最值得 HR 关注的亮点有：\n\n${resume.highlights
    .map((item, index) => `${index + 1}. ${item}`)
    .join("\n")}\n\n如果要接入真实大模型，下一步会把这份简历拆成结构化知识库，并让回答严格基于资料生成。`;
}

function ask(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;
  addMessage("user", cleanQuestion);
  window.setTimeout(() => {
    addMessage("assistant", findAnswer(cleanQuestion));
    window.digitalHumanSpeak?.();
  }, 260);
}

function renderTab(tabName) {
  tabContent.innerHTML = tabs[tabName]
    .map(
      (item) => `
        <article class="info-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <ul>
            ${item.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
          ${
            item.media
              ? `<div class="case-gallery">
                  ${item.media
                    .map(
                      (media) => `
                        <button
                          class="case-shot"
                          type="button"
                          data-preview-src="${media.src}"
                          data-preview-type="${media.type || "image"}"
                          data-preview-title="${media.title}"
                          data-preview-desc="${media.desc}"
                        >
                          <img src="${media.thumb || media.src}" alt="${media.title}" loading="lazy" />
                          <strong>${media.title}</strong>
                          <span>${media.desc}</span>
                        </button>
                      `,
                    )
                    .join("")}
                </div>`
              : ""
          }
          ${
            item.links
              ? `<div class="case-actions">
                  ${item.links
                    .map(
                      (link) => `
                        <button
                          type="button"
                          data-preview-src="${link.href}"
                          data-preview-type="document"
                          data-preview-title="${link.title}"
                          data-preview-desc="${link.desc}"
                        >
                          ${link.label}
                        </button>
                      `,
                    )
                    .join("")}
                </div>`
              : ""
          }
          <div class="tag-list">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

askForm.addEventListener("submit", (event) => {
  event.preventDefault();
  ask(questionInput.value);
  questionInput.value = "";
});

quickButtons.forEach((button) => {
  button.addEventListener("click", () => ask(button.dataset.question));
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderTab(button.dataset.tab);
  });
});

tabContent.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-preview-src]");
  if (!trigger) return;
  openCasePreview(trigger);
});

casePreview?.addEventListener("click", (event) => {
  if (event.target.closest("[data-preview-close]")) {
    closeCasePreview();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && casePreview?.classList.contains("is-open")) {
    closeCasePreview();
  }
});

renderTab("projects");
addMessage(
  "assistant",
  "您好，我是楼超的 AI 数字分身。您可以问我项目、实习、科研、成绩或技术栈。我会用面试表达方式，把简历信息讲清楚。",
);

function initDigitalHuman3D() {
  const canvas = document.querySelector("#digitalHumanCanvas");
  if (!canvas) return;

  if (window.THREE) {
    initThreeDigitalHuman(canvas);
    return;
  }

  initWebGLDigitalHuman(canvas);
}

function initThreeDigitalHuman(canvas) {
  const THREE = window.THREE;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0.05, 7.1);

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
  keyLight.position.set(-3.2, 5.5, 4);
  scene.add(keyLight);
  scene.add(new THREE.AmbientLight(0x9ec5ff, 1.2));

  const root = new THREE.Group();
  scene.add(root);

  const materials = {
    skin: new THREE.MeshStandardMaterial({ color: 0xf0bd8d, roughness: 0.58, metalness: 0.02 }),
    hair: new THREE.MeshStandardMaterial({ color: 0x151a25, roughness: 0.75 }),
    suit: new THREE.MeshStandardMaterial({ color: 0x1e63df, roughness: 0.42, metalness: 0.08 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.5 }),
    accent: new THREE.MeshStandardMaterial({ color: 0x00a6d6, emissive: 0x006c94, emissiveIntensity: 0.5 }),
    mouth: new THREE.MeshStandardMaterial({ color: 0xd64255, roughness: 0.5 }),
  };

  const sphere = new THREE.SphereGeometry(1, 32, 18);
  const body = mesh(sphere, materials.suit, [0, -1.15, 0], [1.0, 0.72, 0.34]);
  const shoulderLeft = mesh(sphere, materials.dark, [-0.82, -1.34, 0], [0.52, 0.28, 0.24]);
  const shoulderRight = mesh(sphere, materials.dark, [0.82, -1.34, 0], [0.52, 0.28, 0.24]);
  const neck = mesh(sphere, materials.accent, [0, -0.72, 0.03], [0.38, 0.24, 0.24]);
  const head = mesh(sphere, materials.skin, [0, 0.2, 0], [0.62, 0.72, 0.58]);
  const hair = mesh(sphere, materials.hair, [0, 0.82, -0.02], [0.66, 0.34, 0.54]);
  const eyeLeft = mesh(sphere, materials.dark, [-0.22, 0.28, 0.53], [0.065, 0.065, 0.035]);
  const eyeRight = mesh(sphere, materials.dark, [0.22, 0.28, 0.53], [0.065, 0.065, 0.035]);
  const mouth = mesh(sphere, materials.mouth, [0, -0.08, 0.58], [0.18, 0.035, 0.025]);
  const ring = mesh(new THREE.TorusGeometry(0.3, 0.025, 12, 72), materials.accent, [0, -0.86, 0.42], [1, 1, 1]);
  ring.rotation.x = Math.PI / 2;

  root.add(body, shoulderLeft, shoulderRight, neck, head, hair, eyeLeft, eyeRight, mouth, ring);
  shoulderLeft.rotation.z = 0.18;
  shoulderRight.rotation.z = -0.18;

  let pointerX = 0;
  let pointerY = 0;
  let speakUntil = 0;

  canvas.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  });

  canvas.addEventListener("pointerleave", () => {
    pointerX = 0;
    pointerY = 0;
  });

  window.digitalHumanSpeak = () => {
    speakUntil = performance.now() + 1600;
  };

  function mesh(geometry, material, position, scale) {
    const item = new THREE.Mesh(geometry, material);
    item.position.set(position[0], position[1], position[2]);
    item.scale.set(scale[0], scale[1], scale[2]);
    return item;
  }

  function resizeRenderer() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const needResize = canvas.width !== Math.floor(width * pixelRatio) || canvas.height !== Math.floor(height * pixelRatio);
    if (needResize) {
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
  }

  function animate(now) {
    resizeRenderer();
    const idle = Math.sin(now * 0.0016) * 0.035;
    const talking = now < speakUntil ? Math.sin(now * 0.04) * 0.045 : 0;
    const turn = pointerX * 0.22 + Math.sin(now * 0.0008) * 0.08;
    const nod = -pointerY * 0.12 + idle;

    root.rotation.y = turn * 0.35;
    head.position.y = 0.2 + idle + talking;
    head.rotation.set(nod, turn, 0);
    hair.position.y = 0.82 + idle;
    hair.rotation.set(nod - 0.04, turn, 0);
    eyeLeft.position.y = 0.28 + idle;
    eyeRight.position.y = 0.28 + idle;
    mouth.position.y = -0.08 + idle + talking;
    mouth.scale.y = 0.035 + Math.abs(talking) * 0.6;
    ring.scale.setScalar(1 + Math.abs(Math.sin(now * 0.003)) * 0.16);
    ring.rotation.z += 0.012;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

function initWebGLDigitalHuman(canvas) {
  const gl = canvas.getContext("webgl", { alpha: true, antialias: true });
  if (!gl) {
    canvas.insertAdjacentHTML("afterend", '<div class="avatar-face"><span>L</span><span>C</span></div>');
    return;
  }

  const vertexShaderSource = `
    attribute vec3 aPosition;
    attribute vec3 aNormal;
    uniform mat4 uMatrix;
    uniform mat4 uModel;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vec4 worldPosition = uModel * vec4(aPosition, 1.0);
      vPosition = worldPosition.xyz;
      vNormal = mat3(uModel) * aNormal;
      gl_Position = uMatrix * worldPosition;
    }
  `;

  const fragmentShaderSource = `
    precision mediump float;
    uniform vec3 uColor;
    uniform float uGlow;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 light = normalize(vec3(-0.45, 0.8, 0.55));
      float shade = max(dot(normal, light), 0.0);
      float rim = pow(1.0 - max(dot(normal, normalize(vec3(0.0, 0.0, 1.0))), 0.0), 2.0);
      vec3 color = uColor * (0.48 + shade * 0.62) + vec3(0.1, 0.42, 0.95) * rim * uGlow;
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
  const positionLocation = gl.getAttribLocation(program, "aPosition");
  const normalLocation = gl.getAttribLocation(program, "aNormal");
  const matrixLocation = gl.getUniformLocation(program, "uMatrix");
  const modelLocation = gl.getUniformLocation(program, "uModel");
  const colorLocation = gl.getUniformLocation(program, "uColor");
  const glowLocation = gl.getUniformLocation(program, "uGlow");
  const sphere = createSphere(32, 18);
  const buffers = createMeshBuffers(gl, sphere);

  let pointerX = 0;
  let pointerY = 0;
  let speakUntil = 0;

  canvas.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  });

  canvas.addEventListener("pointerleave", () => {
    pointerX = 0;
    pointerY = 0;
  });

  window.digitalHumanSpeak = () => {
    speakUntil = performance.now() + 1600;
  };

  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.CULL_FACE);

  function drawScene(now) {
    resizeCanvasToDisplaySize(canvas);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
    gl.enableVertexAttribArray(normalLocation);
    gl.vertexAttribPointer(normalLocation, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.index);

    const aspect = canvas.width / canvas.height;
    const projection = perspective(Math.PI / 4.6, aspect, 0.1, 100);
    const view = multiply(translation(0, -0.1, -6.8), rotationX(-0.08));
    const base = multiply(projection, view);
    const idle = Math.sin(now * 0.0016) * 0.035;
    const talking = now < speakUntil ? Math.sin(now * 0.04) * 0.045 : 0;
    const turn = pointerX * 0.22 + Math.sin(now * 0.0008) * 0.08;
    const nod = -pointerY * 0.12 + idle;

    drawPart(base, [0.15, 0.39, 0.92], [0, -1.15, 0], [1.0, 0.72, 0.34], 1.15, multiply(rotationY(turn * 0.35), rotationX(0.08)));
    drawPart(base, [0.07, 0.13, 0.22], [-0.82, -1.34, 0], [0.52, 0.28, 0.24], 0.7, rotationZ(0.18));
    drawPart(base, [0.07, 0.13, 0.22], [0.82, -1.34, 0], [0.52, 0.28, 0.24], 0.7, rotationZ(-0.18));
    drawPart(base, [0.11, 0.72, 0.82], [0, -0.72, 0.03], [0.38, 0.24, 0.24], 1.35, identity());
    drawPart(base, [0.96, 0.78, 0.58], [0, 0.2 + idle + talking, 0], [0.62, 0.72, 0.58], 1.05, multiply(rotationY(turn), rotationX(nod)));
    drawPart(base, [0.1, 0.13, 0.2], [0, 0.82 + idle, -0.02], [0.66, 0.34, 0.54], 1.0, multiply(rotationY(turn), rotationX(nod - 0.04)));
    drawPart(base, [0.08, 0.11, 0.16], [-0.22, 0.28 + idle, 0.53], [0.065, 0.065, 0.035], 0.45, identity());
    drawPart(base, [0.08, 0.11, 0.16], [0.22, 0.28 + idle, 0.53], [0.065, 0.065, 0.035], 0.45, identity());
    drawPart(base, [0.9, 0.12, 0.18], [0, -0.08 + idle + talking, 0.58], [0.18, 0.035 + Math.abs(talking) * 0.6, 0.025], 0.6, identity());
    drawPart(base, [0.0, 0.64, 0.9], [0, -0.86, 0.42], [0.26 + Math.abs(Math.sin(now * 0.003)) * 0.04, 0.035, 0.26], 1.8, rotationX(Math.PI / 2));

    requestAnimationFrame(drawScene);
  }

  function drawPart(base, color, position, scale, glow, rotation) {
    const model = multiply(translation(position[0], position[1], position[2]), multiply(rotation, scaling(scale[0], scale[1], scale[2])));
    gl.uniformMatrix4fv(matrixLocation, false, multiply(base, model));
    gl.uniformMatrix4fv(modelLocation, false, model);
    gl.uniform3fv(colorLocation, color);
    gl.uniform1f(glowLocation, glow);
    gl.drawElements(gl.TRIANGLES, sphere.indices.length, gl.UNSIGNED_SHORT, 0);
  }

  requestAnimationFrame(drawScene);
}

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader));
  }
  return shader;
}

function createProgram(gl, vertexSource, fragmentSource) {
  const program = gl.createProgram();
  gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vertexSource));
  gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fragmentSource));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program));
  }
  return program;
}

function createSphere(columns, rows) {
  const positions = [];
  const normals = [];
  const indices = [];

  for (let y = 0; y <= rows; y += 1) {
    const v = y / rows;
    const theta = v * Math.PI;
    for (let x = 0; x <= columns; x += 1) {
      const u = x / columns;
      const phi = u * Math.PI * 2;
      const sx = Math.sin(theta) * Math.cos(phi);
      const sy = Math.cos(theta);
      const sz = Math.sin(theta) * Math.sin(phi);
      positions.push(sx, sy, sz);
      normals.push(sx, sy, sz);
    }
  }

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < columns; x += 1) {
      const a = y * (columns + 1) + x;
      const b = a + columns + 1;
      indices.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }

  return { positions, normals, indices };
}

function createMeshBuffers(gl, mesh) {
  const position = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, position);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.positions), gl.STATIC_DRAW);

  const normal = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normal);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.normals), gl.STATIC_DRAW);

  const index = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(mesh.indices), gl.STATIC_DRAW);

  return { position, normal, index };
}

function resizeCanvasToDisplaySize(canvas) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.floor(canvas.clientWidth * dpr);
  const height = Math.floor(canvas.clientHeight * dpr);
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
}

function identity() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}

function perspective(fov, aspect, near, far) {
  const f = 1 / Math.tan(fov / 2);
  const nf = 1 / (near - far);
  return [f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0];
}

function translation(x, y, z) {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
}

function scaling(x, y, z) {
  return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
}

function rotationX(angle) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1];
}

function rotationY(angle) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1];
}

function rotationZ(angle) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return [c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}

function multiply(a, b) {
  const result = new Array(16);
  for (let row = 0; row < 4; row += 1) {
    for (let column = 0; column < 4; column += 1) {
      result[column * 4 + row] =
        a[0 * 4 + row] * b[column * 4 + 0] +
        a[1 * 4 + row] * b[column * 4 + 1] +
        a[2 * 4 + row] * b[column * 4 + 2] +
        a[3 * 4 + row] * b[column * 4 + 3];
    }
  }
  return result;
}

initDigitalHuman3D();

function openCasePreview(trigger) {
  if (!casePreview || !casePreviewPanel || !casePreviewImage || !casePreviewFrame) return;

  activePreviewTrigger = trigger;
  casePreviewPanel.getAnimations().forEach((animation) => animation.cancel());
  const previewType = trigger.dataset.previewType || "image";
  const sourceElement = trigger.querySelector("img") || trigger;
  const sourceRect = sourceElement.getBoundingClientRect();

  casePreview.classList.toggle("is-document", previewType === "document");
  casePreview.classList.toggle("is-image", previewType !== "document");
  if (previewType === "document") {
    casePreviewImage.removeAttribute("src");
    casePreviewImage.alt = "";
    casePreviewFrame.src = trigger.dataset.previewSrc;
  } else {
    casePreviewFrame.removeAttribute("src");
    casePreviewImage.src = trigger.dataset.previewSrc;
    casePreviewImage.alt = trigger.dataset.previewTitle;
  }
  casePreviewTitle.textContent = trigger.dataset.previewTitle;
  casePreviewDesc.textContent = trigger.dataset.previewDesc;

  casePreview.classList.remove("is-closing");
  casePreview.classList.add("is-open");
  casePreview.setAttribute("aria-hidden", "false");
  document.body.classList.add("preview-open");

  const targetRect = casePreviewPanel.getBoundingClientRect();
  const startScaleX = Math.max(sourceRect.width / targetRect.width, 0.08);
  const startScaleY = Math.max(sourceRect.height / targetRect.height, 0.08);
  const startX = sourceRect.left + sourceRect.width / 2 - (targetRect.left + targetRect.width / 2);
  const startY = sourceRect.top + sourceRect.height / 2 - (targetRect.top + targetRect.height / 2);

  casePreviewPanel.focus?.();
  animatePreviewPanel(startX, startY, startScaleX, startScaleY, true);
}

function closeCasePreview() {
  if (!casePreview || !casePreviewPanel) return;
  if (!activePreviewTrigger) {
    finishCasePreviewClose();
    return;
  }

  casePreviewPanel.getAnimations().forEach((animation) => animation.cancel());
  const sourceImage = activePreviewTrigger.querySelector("img");
  const sourceRect = (sourceImage || activePreviewTrigger).getBoundingClientRect();
  const targetRect = casePreviewPanel.getBoundingClientRect();
  const endScaleX = Math.max(sourceRect.width / targetRect.width, 0.08);
  const endScaleY = Math.max(sourceRect.height / targetRect.height, 0.08);
  const endX = sourceRect.left + sourceRect.width / 2 - (targetRect.left + targetRect.width / 2);
  const endY = sourceRect.top + sourceRect.height / 2 - (targetRect.top + targetRect.height / 2);

  casePreview.classList.add("is-closing");
  const animation = animatePreviewPanel(endX, endY, endScaleX, endScaleY, false);
  animation.onfinish = finishCasePreviewClose;
}

function animatePreviewPanel(x, y, scaleX, scaleY, opening) {
  const from = `translate3d(${x}px, ${y}px, 0) scale(${scaleX}, ${scaleY})`;
  const to = "translate3d(0, 0, 0) scale(1)";
  return casePreviewPanel.animate(
    [
      { opacity: opening ? 0.25 : 1, transform: opening ? from : to },
      { opacity: opening ? 1 : 0, transform: opening ? to : from },
    ],
    {
      duration: opening ? 420 : 320,
      easing: opening ? "cubic-bezier(0.18, 0.88, 0.22, 1)" : "cubic-bezier(0.5, 0, 0.2, 1)",
      fill: "both",
    },
  );
}

function finishCasePreviewClose() {
  casePreview.classList.remove("is-open", "is-closing", "is-image", "is-document");
  casePreview.setAttribute("aria-hidden", "true");
  document.body.classList.remove("preview-open");
  activePreviewTrigger = null;
  casePreviewFrame?.removeAttribute("src");
  casePreviewImage?.removeAttribute("src");
  casePreviewPanel.getAnimations().forEach((animation) => animation.cancel());
}
