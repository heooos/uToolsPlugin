// 开发者可以暴露自定义API供后加载脚本使用

// preload.js 中使用nodejs
const { readFileSync } = require('fs')

window.readConfig = function () {
  const data = readFileSync('./config.json')
  return data
}

const {cmd} = require('node-cmd')

window.cmdOrder = function(){
	cmd.get(
        'pwd',
        function(err, data, stderr){
            console.log('the current working dir is : ',data)
        }
    );
	cmd.run('sh ./sync.sh');
}


