// import digui from './js/call';
import './public.less';
// document.write(data());
Function.prototype.call2 = function(context) {
    context.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    console.log(args.toString());

    eval('context.fn(' + args +')');

    delete context.fn;
}

// 测试一下
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    // console.log(this.value);
}

bar.call2(foo, 'mack', 18);
// digui();

function box(age, number){
    let params = [arguments[0], arguments[1]];
    bar(params)
}
// box('musk', 123);