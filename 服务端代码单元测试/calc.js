function add(x,y){
    if(((typeof x) === 'number') && (typeof y) === 'number')
        return x+y;
    else
        return NaN;
}

module.exports = add;

// 安装模块
// npm i chai grunt grunt-mocha-cli grunt-mocha-istanbul istanbul mocha mochawesome --save-dev