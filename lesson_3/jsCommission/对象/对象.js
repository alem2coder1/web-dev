// ES6
const m = [2,4,7]
console.log(Math.max(...m))

const user = {
    name:'monica',
    age:17,
    address:'esik',
};
const user1 = {
    ...user,
    name:'shuak',
}
console.log(user1)
const {name,age} = user;
console.log(name)

const user2 = [{
    name:'monica',
    age:17,
    address:'esik',
},{name:'erkejan',
age:16,
    address: 'almaty'
}
]
for(const {name,age} of user2){
    console.log(name,age)
}
Object.keys(user2);
Object.values(user2);
Object.entries(user2);

let obj = {};
Object.defineProperty(obj,'a',{
    get(){
        // 读取属性a时得到的是该办法的返回值
        return 1;
    },
    set(val){
        // 设置a，就把值传入val
        console.log(val);
    }
});
obj.a = 234;