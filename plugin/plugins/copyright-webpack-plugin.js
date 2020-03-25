class CopyrightWebpackPlugin {
    constructor(options) {
        // 插件的参数
        // console.log(options)
    }

    apply(compiler) {

        compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compiler) => {
           console.log('compiler');
        });
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            debugger;
            compilation.assets['copyright.txt'] = {
                source: function() {
                    return 'copyright by hzp';
                },

                size: function() {
                    return 16;
                }
            };
            cb();
        })
    }
}

module.exports = CopyrightWebpackPlugin;
