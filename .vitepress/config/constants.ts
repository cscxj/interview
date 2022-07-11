const isProd = process.env.NODE_ENV === "production";

const site = isProd ? "https://ms.cscxj.icu" : "http://localhost:3000";

export const metaData = {
  title: "2022前端面试指南",
  description: "2022年前端面试题搜集，答案点到为止，如何展开自由发挥",
  site,
  image: `${site}/assets/og-image.png`,
};
