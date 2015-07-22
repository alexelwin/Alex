module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/app/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/app/**/*.js', '!src/app/components/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    
    watch: {
      options:{
        livereload:true
      },
      files: ['<%= jshint.files %>', 'src/app/**/*.js', 'src/app/**/*.html', '!src/app/components/**/*.js'],
      tasks: ['jshint']
    },

    //MODULE: grunt-bower-install (insert dependencies into html pages)
    bowerInstall: {
 
    target: { 
      src: ['src/app/index.html'],
   
      // Optional: 
      cwd: '',
      dependencies: true,
      devDependencies: false,
      exclude: [],
      fileTypes: {},
      ignorePath: '',
      overrides: {}
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-bower-install');
  grunt.registerTask('default', ['jshint', 'concat', 'uglify','bowerInstall', 'watch']);
  

};