const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .toFormat("LLLL d, yyyy");
  });

  // Add pathPrefix as a global variable
  eleventyConfig.addGlobalData("pathPrefix", "/eleventy-test-repo/");

  return {
    dir: { input: ".", output: "docs" },
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};
