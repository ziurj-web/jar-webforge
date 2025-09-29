module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/styles.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/script.js");
    
    return {
        dir: {
            input: "src", // Where we're working out of
            output: "public" // What others see
        }
    }
}