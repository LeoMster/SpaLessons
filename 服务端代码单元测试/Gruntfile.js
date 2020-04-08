module.exports = function(grunt){
    grunt.initConfig({
        mocha_istanbul:{
            coverage:{
                src:'test'
            }
        },
        //覆盖率检查
        istanbul_check_corerage:{
            default:{
                options:{
                    coverageFolder:'coverage',
                    //要求
                    check:{
                        lines:90,
                        statements:90
                    }
                }
            }
        }
    })

    grunt.loadNpmTasks("grunt-mocha-cli");
    grunt.loadNpmTasks("grunt-mocha-istanbul");

    grunt.registerTask("cover",["mocha_istanbul"]);
    grunt.registerTask("check_cover",["istanbul_check_corerage"]);
}