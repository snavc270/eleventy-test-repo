const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .toFormat("LLLL d, yyyy");
  });

  return {
    dir: { input: ".", output: "docs" },
    pathPrefix: "/eleventy-test-repo/",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};