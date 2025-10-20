const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    // Things we're going to need.
    eleventyConfig.addPassthroughCopy("./src/styles.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/script.js");
    eleventyConfig.addPassthroughCopy("./src/admin");
    
    // Date filter for blog posts.
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    });

    return {
        dir: {
            input: "src", // Where we're working out of
            output: "public" // What others see
        }
    }
}