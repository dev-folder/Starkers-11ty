module.exports = function(eleventyConfig){

// Import prior to `module.exports` within `.eleventy.js`
const { DateTime } = require("luxon");

eleventyConfig.addFilter("postDate", (dateObj) => {
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
});
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addPassthroughCopy('./source/assets/style.css');
    eleventyConfig.addPassthroughCopy('./source/assets/script.js');
    eleventyConfig.addPassthroughCopy('./source/assets/img/');

    return {
        dir: {
            input: "source",
            output: "docs",
            includes: "_includes",
            data: "_data"
        },
        templateFormats : ["html", "md", "css"],
        htmlTemplateEngine : "liquid",
        markdownTemplateEngine : "liquid"
    };
}