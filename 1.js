let arr = [1,2,3,4,5]
arr.a = 99
for (let key in arr)
{
    console.log(arr[key]);
}

for (let key of arr)
{
    console.log(key);
}

//2) filter 是否操作原数组： 返回结果  回调函数的返回结果： 过滤后的新数组，回调函数的返回值结果：如果返回为true,表示这一项放到新数组中

let newArr = arr.filter(function (item) {
    return item > 3
})

console.log(newArr);
//3)map 不操作原数组 返回新数组  回调函数中返回什么这一项就是什么

let arr1 = [1,2,3].map(function (item) {
    return `<li>item</li>`
})
console.log(arr1.join(''));

//4) includes
let arr3 = [1,2,3,4,55]


//5) 找到具体的某一项 用find 回调函数中返回true表示找到了，找到后停止循环，找不到返回的是undefined

console.log(arr3.find(function (item,index) {
    // return item.toString().indexOf(5) > -1
    return true
}));

//6) some 找true 找到 true后 停止 返回 true  找不到返回false


//7) every


//8) reduce  s收敛 4个参数  返回的是叠加后的结果，原数组不发生变化 ，回调函数返回的结果

let sum  = [1,2,3,4,5].reduce(function (prev,next,index,item) {
    console.log(arguments);
    return prev + next
},0)

console.log(sum);

//9)reduce 实现扁平化数组



