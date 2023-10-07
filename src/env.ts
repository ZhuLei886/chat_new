import type { Model } from "./types"

/**
 * 用于创建 .env.example 文件，不要直接填写敏感信息。
 * 以 CLIENT_ 开头的变量会暴露给前端
 */
export const defaultEnv = {
  CLIENT_GLOBAL_SETTINGS: {
    APIKey: "",
    password: "",
    enterToSend: true
  },
  CLIENT_SESSION_SETTINGS: {
    // 0-2
    title: "",
    saveSession: true,
    APITemperature: 0.6,
    continuousDialogue: true,
    APIModel: "gpt-3.5-turbo" as Model
  },
  CLIENT_DEFAULT_MESSAGE: `
- 防止失联(这个网站进不来，又没有加WX的可以收藏一下备用网站 [备用chat](https://chat4.zhulei.xyz))、咨询买号(有GPT-4)、买key、接个人镜像站建站可公众号👉 [私信](gzh.jpg)
- 感谢大家的打赏，如果想体验GPT-4的可以关注下👉 [公众号](gzh.jpg) 加一下体验群，后续会更新
- 你可以用TA聊天、翻译、创作、编程、撰写文案、营销策划、法律咨询、知识学习等等，提交学习工作效率！如果本项目对你有所帮助，可以给小猫 [买点零食](/zsm.jpg).
- 这个新网站大家需要用自己的key,我也会在公众号里更新一些key
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部.
`,
  CLIENT_MAX_INPUT_TOKENS: {
    "gpt-3.5-turbo": 4 * 1024,
    "gpt-4": 8 * 1024,
    "gpt-4-32k": 32 * 1024
  } as Record<Model, number>,
  OPENAI_API_BASE_URL: "api.openai.com",
  OPENAI_API_KEY: "",
  TIMEOUT: 30000,
  PASSWORD: "",
  SEND_KEY: "",
  SEND_CHANNEL: 9,
  NO_GFW: false
}

export type SessionSettings = typeof defaultEnv.CLIENT_SESSION_SETTINGS
