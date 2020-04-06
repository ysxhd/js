import {hellowebpack} from './hellowebpack';
import './public.scss';
document.write(hellowebpack())


function Person() {

}
// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin

var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
let json = {a: 111};
function checkscope(json){
    json.a = '3333';
    console.log(json, '---');
}
var obj = {
    value: 1
};
function foo(o) {
    o = 2;
    console.log(o); //2
}
foo(obj);
console.log(obj.value) // 1