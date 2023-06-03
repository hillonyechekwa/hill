


module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("./src/fonts/Gotham-Light.woff2")
	eleventyConfig.addPassthroughCopy("./src/fonts/GopherText-Regular.woff2")
	eleventyConfig.addPassthroughCopy("./src/fonts/GopherText-Bold.woff2")
    eleventyConfig.addPassthroughCopy("./src/assets")
    eleventyConfig.addWatchTraget("./src/_includes/css")
    eleventyConfig.addPassthroughCopy("./src/fonts")
    eleventyConfig.addPassthroughCopy("./src/scripts")
    eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" })
    eleventyConfig.addShortCode("year", () => `${new Date().getFullYear()}`)

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}