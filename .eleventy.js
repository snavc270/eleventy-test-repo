const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .toFormat("LLLL d, yyyy");
  });

  //creating a filter for our urls for gh-pages
  eleventyConfig.addFilter("prefixedUrl", (url, prefix = "/eleventy-test-repo/") => {
  // remove leading slash from URL, then prepend prefix
  return prefix + url.replace(/^\/+/, "");
    });

  // Add pathPrefix as a global variable
  eleventyConfig.addGlobalData("pathPrefix", "/eleventy-test-repo/");

  return {
    dir: { input: ".", output: "docs" },
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};
