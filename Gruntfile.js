module.exports = function(grunt) {
  // Do grunt-related things in here

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
      sass: {
          options: {
              sourceMap: true
          },
          dist: {
              files: {
                  'style.css': 'main.scss'
              }
          }
      }
  });

  grunt.registerTask('dev', ['sass']);
};
