import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Quick Links",
  description: "A page to store your links",
  lang: "en-US",
  base: "/quick-links/",

  head: [
    ["link", { rel: "icon", href: "icon.svg" }],
    ["meta", { name: "author", content: "Your Name" }],
    ["link", { rel: "preconnect", href: "https://rsms.me/"}],
    ["link", { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" }],
  ],

  themeConfig: {
    copyright: true,

    author: {
      name: "Your Name",
      link: "https://example.com",
    },
  },
});
