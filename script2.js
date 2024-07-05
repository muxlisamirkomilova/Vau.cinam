// let arr = [1,2,3,4,"aaaaa",6,7,8,9,10];
// console.log(arr.length);
// let users =[
//     {
//         name:"muchi",
//         age:16
//     },
//     {
//         name:"ziyo",
//         age:17
//     }
// ]
// console.log(users[1].name);

// let users = ["aaaa","bbbb","cccc","dddd"];

// users.splice(1,2,"otabek")
// users.push("muxlisa")
// users.unshift("wwww")
// users.pop()
// users.shift("gggg")
// console.log(users);

// let str = "Hello World";
// let addStr = str.split("d")
// console.log(addStr);

// Bo'sh massiv yaratish
let arr = [];

// Foydalanuvchi buyruqlarini qabul qilish
function processCommands(command) {
  if (command.startsWith('add')) {
    let element = command.split('.')[1].trim();
    arr.push(element);
  } else if (command.startsWith('del')) {
    let element = command.split('.')[1].trim();
    let index = arr.indexOf(element);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  } else if (command === 'stop') {
    console.log('Final array:', arr);
    return;
  }
  console.log('Current array:', arr);
}

// Foydalanuvchi buyruqlarini qabul qilish
function getUserInput() {
  let command = prompt('Enter a command:');
  processCommands(command);
  if (command !== 'stop') {
    getUserInput();
  }
}

getUserInput();