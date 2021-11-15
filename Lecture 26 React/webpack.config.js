module.exports = {
    entry:'./src/school.jsx',
    output:{
        filename:'newFile.js',
        path:__dirname+'/dist'
    },
    module:{
        rules:[
            {
                test:/.jsx/,
                loader:'babel-loader',
                query:{
                    presets:['react']
                }
            }
        ]
    }
};