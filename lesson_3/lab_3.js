// // for-of
// const arr = [1, 34, 23, 43, 13];
// for (let i of arr) {
//     console.log(i);
// }
// // 数字，下表，数组
// arr.forEach(function (ITEM, index, arr) {
//     console.log(ITEM);
// })
// const newarr = arr.map(function (item) {
//     return item * 2;
// })
// console.log(newarr);
// // 筛选
// const newarr2 = arr.filter(function (item) {
//     return item > 10;
// })
// const sum = arr.reduce(function (a, b) {
//     return a + b;
// });
// console.log(sum);
// const arr = Array(10).fill(0).map(function () {
//     return Math.random();
// });
// console.log(arr);
// const arr2 = Array(10).fill(0).map(function () {
//     return Math.floor(Math.random() * 100)
// });
// console.log(arr2);
// 判断文件类型
// const filetet = [".png", "jpg", "txt"]
// const s = [".png"]
// console.log(filetet.includes(".png"));
let students = [{
    name: "shuak",
    age: 18,
    sex: "women",
    addreus: "almaty",
    phone: "123"
},
{
    name: "erkejan",
    age: 16,
    sex: "women",
    addreus: "esik",
    phone: "345"
}
]
// students["name"] = ("karlikash")
// console.log(Object.values(students));
// for (let i = 0; i < students.length; i++) {
//     if (students[i].name === "erkejan") {
//         console.log(students[i].name);
//     }
// }
// let name = students.filter(function (stu) {
//     return stu.name === "erkejan";
// })
// console.log(name);
// let age = students.filter(function (stu) {
//     return stu.age < 18;
// })
// console.log(age);
// let name = students.filter(function (stu) {
//     return stu.name.endswith("n");
// })
// console.log(name);
// let phone = students.filter(function (stu) {
//     return stu.phone.endswith("3");
// })
// console.log(phone.join(" ,"));
// let name = students.map(function (stu) {
//     return `<p>${stu.name}</p>`;
// })

// // let namehtml = `<p>${name}</p>`
// console.log(name.join(" "));
// let name = students.filter(function (stu) {
//     return stu.sex == "women" && stu.age < 18;
// }).map(function (stu) {
//     return { name: stu.name, phone: stu.phone };
// })

// console.log(name);
// let age = students.reduce(function (a, b) {
//     return a + b.age
// }, 0);
// console.log(age / students.length);
// let age = students.reduce(function (a, b) {
//     a.name.push(b.name)
//     a.phone.push(b.phone)
//     return a;
// }, { name: [], phone: [] });
// console.log(age);
let addreus = students.find(function (stu) {
    return stu.addreus === "esik";
});
console.log(addreus);