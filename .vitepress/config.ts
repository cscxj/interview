import { defineConfigWithTheme } from "vitepress";
import { metaData } from "./config/constants";
import head from "./config/head";
import baseConfig from "@vue/theme/config";
import nav from "./config/nav";

export default defineConfigWithTheme({
  extends: baseConfig,
  title: metaData.site,
  description: metaData.description,
  head,
  themeConfig: {
    nav,
    algolia: {
      indexName: "vuejs",
      appId: "ML0LEBN7FQ",
      apiKey: "f49cbd92a74532cc55cfbffa5e5a7d01",
      searchParameters: {
        facetFilters: ["version:v3"],
      },
    },
  },
});
