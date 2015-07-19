//add new javascript dependencies with below..
bower install <XXXXXX> --save

//get packages if not already have. referenced from bower.json
bower update

//insert dependencies into 'index.html' via manual grunt task (TODO:add to build)
grunt bowerInstall


//watch for changes to files and reload browser
grunt reload watch


