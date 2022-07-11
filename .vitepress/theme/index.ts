import "virtual:windi.css";

import { Theme } from "vitepress";
import { VPTheme } from "@vue/theme";
import { h } from "vue";

import AppNavBarTitle from "./components/AppNavBarTitle.vue";

export default <Theme>Object.assign({}, VPTheme, {
  Layout: () => {
    return h(VPTheme.Layout, null, {
      //   "sidebar-top": () => h(PreferenceSwitch),
      //   "aside-mid": () => h(SponsorsAside),
      //   "aside-bottom": () => h(VueJobs),
      "navbar-title": () => h(AppNavBarTitle),
    });
  },
});
