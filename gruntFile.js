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
  });
  //   load plugins
  grunt.loadNpmTasks("grunt-contrib-uglify");
  // register tasks
  grunt.registerTask("default", ["uglify"]);
};
