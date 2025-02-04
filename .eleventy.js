module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("scripts");

  return {
      dir: {
          input: ".",
          includes: "_includes",
          data: "_data",
          output: "_site"
      }
  };
};
