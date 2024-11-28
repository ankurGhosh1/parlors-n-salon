// module.exports = {
//   siteUrl: "https://www.mydrivingschools.com/",
//   sitemapSize: 7000,
//   generateRobotsTxt: true, // (optional)
//   indexSitemaps: false,
//   robotsTxtOptions: {
//     host: null,
//     policies: [
//       {
//         userAgent: "*",
//         // allow: "/",
//         disallow: "/", // Uncomment and change to disallow specific paths
//       },
//     ],
//   },
// };

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.mydrivingschools.com",
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [],
  robotsTxtOptions: {
    host: null,
    policies: [
      {
        userAgent: "*",
        disallow: "",
      },
    ],
  },
};
