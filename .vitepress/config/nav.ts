import { DefaultTheme } from "vitepress";

export default <DefaultTheme.Config["nav"]>[
  {
    text: "题库",
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: "Vue2", link: "/questions/vue2" },
      { text: "Vue3", link: "/questions/vue3" },
      { text: "react", link: "/questions/react" },
      { text: "js基础", link: "/questions/javascript" },
      { text: "Typescript", link: "/questions/typescript" },
      { text: "前端工程化", link: "/questions/project" },
      { text: "工作流程", link: "/questions/workflow" },
      { text: "浏览器工作原理", link: "/questions/browser" },
      { text: "git", link: "/questions/git" },
      { text: "网络", link: "/questions/network" },
    ],
  },
];
