module.exports = function (grunt) {
  // configure tasks
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          "dest/output.min.js": ["src/*.js"],
        },
      },
    },
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "src/css",
            src: ["*.css", "!*.min.css"],
            dest: "dest/css",
            ext: ".min.css",
          },
        ],
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  // Register tasks
  grunt.registerTask("default", ["uglify", "cssmin"]);
};
