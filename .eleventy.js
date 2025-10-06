const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles");
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" })
            .toFormat("LLLL d, yyyy");
    });

    // Determine if we are in production
    const isProduction = process.env.ELEVENTY_ENV === "production";

    // Set pathPrefix once as a global
    eleventyConfig.addGlobalData("pathPrefix", isProduction ? "/eleventy-test-repo/" : "/");

    // Creating a filter for URLs for GH Pages
    eleventyConfig.addFilter("prefixedUrl", (url, prefix) => {
        // Use the prefix from argument or fallback to global pathPrefix
        const finalPrefix = prefix || (isProduction ? "/eleventy-test-repo/" : "/");
        // Remove leading slash from URL, then prepend prefix
        return finalPrefix + url.replace(/^\/+/, "");
    });
    return {
        dir: { input: ".", output: "docs" },
        htmlTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"]
    };
};
