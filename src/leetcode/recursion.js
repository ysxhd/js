//两数字之和
export default () => {
    helper(["h","e","l","l","o"]);
}

function helper(arr, index){
    if(index === arr.length){
        return;
    }
    arr.push(arr[arr.length - 1]);
    arr.splice( index, 1, arr.shift());
    helper(arr, index + 1);
    console.log(arr, index);
    
}

function helper(arr){
    if(!arr){
        return;
    }
    arr.shift();
    helper(arr);
    console.log(arr);
}