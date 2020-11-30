// - создать массив с 20 числами.
//
// let numbers = [20, 9, -3, 55, 110, 1020, 400, 34, 90, 88, -100, 0.34, 37, 42, 93, 68, 0.23, -14, -0.456, 301];



// -- при помощи метода sort и колбека отсортировать массив.
//
// let sort = numbers.sort( (a, b) => {
//     return a-b;
// });
// console.log(sort);



// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//
// let sorts = numbers.sort((a, b) => {
//     return b-a;
// });
// console.log(sorts);



// -- при помощи filter получить числа кратные 3
//
// let filterNum = numbers.filter(value => !(value%3));
// console.log(filterNum);



// -- при помощи filter получить числа кратные 10
//
// let fltr = numbers.filter(value => !(value%10));
// console.log(fltr);



// -- перебрать (проитерировать) массив при помощи foreach()
//
// let iter = numbers.forEach(value => console.log(value));



// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
//
// let mass = numbers.map(value => {
//     return value*3;
// } );
// console.log(mass);



// ---------------------------------------------------------------------------------------------------------------------------------------


// - создать массив со словами на 15-20 элементов.

// let arr = ['Hello', 'World', 'Car', 'dog', 'cat', 'Wednesday', 'Thursday', 'Java', 'Monday', 'year', 'bicycle', 'University', 'red', 'blue', 'black', 'Laptop'];

// -- отсортировать его по алфавиту в восходящем порядке.
//
// let alfavit = arr.sort((a, b) => {
//     if(a.toLowerCase() > b.toLowerCase()) {
//         return 1;
//     }
//     else if (a.toLowerCase() < b.toLowerCase()) {
//         return -1;
//     }
//     else return 0;
// } )
// console.log(alfavit);


// -- отсортировать его по алфавиту  в нисходящем порядке.
//
// let alfavit = arr.sort((a, b) => {
//     if(a.toLowerCase() > b.toLowerCase()) {
//         return -1;
//     }
//     else if (a.toLowerCase() < b.toLowerCase()) {
//         return 1;
//     }
//     else return 0;
// } )
// console.log(alfavit);


// -- отфильтровать слова длиной менее 4х символов
//
// let fltr = arr.filter(value => value.length < 4);
// console.log(fltr);


// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
//
// let newArr = arr.map(value => value += '!');
// console.log(newArr);



// ---------------------------------------------------------------------------------------------------------------------------------------


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//
//
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//         ];
// console.log(users);

// - відсортувати його за  віком (зростання , а потім окремо спадання)
//
// let newUsers = JSON.parse(JSON.stringify(users));
// let sortAge = newUsers.sort((a, b) => a.age - b.age);
// console.log(sortAge);
//
//
// let newUsersObj = JSON.parse(JSON.stringify(users));
// let newSort = newUsersObj.sort((a, b) => b.age - a.age);
// console.log(newSort);


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//
// let newU = JSON.parse(JSON.stringify(users));
// newU.sort((a, b) => a.name.length - b.name.length);
// console.log(newU);
//
// let newUsr = JSON.parse(JSON.stringify(users));
// newUsr.sort((a, b) => b.name.length - a.name.length);
// console.log(newUsr);


// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
//
// let newUsers = JSON.parse(JSON.stringify(users));
//
// newUsers.map((user, index) => {
//     user.id = Math.floor(Math.random() *100);
//     return user;
// });
// console.log(newUsers);
//
//
// // - відсортувати його за індентифікатором
//
// let sortUserId = newUsers.sort((a, b) => a.id - b.id);
// console.log(sortUserId);




// ---------------------------------------------------------------------------------------------------------------------------------------



// -- написать функцию калькулятора с 2мя числами и колбеком
//
// function calculate(numOne, numTwo, callback) {
//     return callback(numOne, numTwo);
// }
// const result = calculate(10,5,(numOne, numTwo) => {
//     return numOne+numTwo;
// });
// console.log(result);




// -- написать функцию калькулятора с 3мя числами и колбеком
//
//
// function calculate(numOne, numTwo, numThree, callback) {
//     return callback(numOne,numTwo,numThree);
// }
// const result = calculate(22,8,2,(numOne, numTwo, numThree) => {
//     return numOne + numTwo - numThree;
// });
// console.log(result);



// ---------------------------------------------------------------------------------------------------------------------------------------



let cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
    ];

// Відфільтрувати масив за наступними крітеріями :

// - двигун більше 3х літрів
//
// let result = cars.filter(element => element.volume > 3);
// console.log(result);


// - двигун = 2л
//
// let result = cars.filter(element => element.volume === 2);
// console.log(result);


// - виробник мерс
//
// let result = cars.filter(elemet => elemet.producer === 'mercedes');
// console.log(result);


// - двигун більше 3х літрів + виробник мерседес
//
// let result = cars.filter(element => (element.volume >= 3 && element.producer === 'mercedes'));
// console.log(result);


// - двигун більше 3х літрів + виробник субару
//
// let result = cars.filter(element => element.volume >= 3 && element.producer === 'subaru');
// console.log(result);


// - сили більше ніж 300
//
// let result = cars.filter(element => element.power > 300);
// console.log(result);


// - сили більше ніж 300 + виробник субару
//
// let result = cars.filter(element => element.power > 300 && element.producer === 'subaru');
// console.log(result);


// - мотор серіі ej
//
// let result = cars.filter(element =>
//     element.engine.startsWith('ej') );
// console.log(result);


// - сили більше ніж 300 + виробник субару + мотор серіі ej
//
// let result = cars.filter(car =>
//     car.power >= 300 &&
//     car.producer === 'subaru' &&
//     car.engine.startsWith('ej')
// );
// console.log(result);


// - двигун меньше 3х літрів + виробник мерседес
//
// let result = cars.filter(car =>
//     car.volume < 3 && car.producer === 'mercedes'
// );
// console.log(result);


// - двигун більше 2л + сили більше 250
//
// let result = cars.filter(car =>
//     car.volume > 2 && car.power > 250
// );
// console.log(result);


// - сили більше 250  + виробник бмв
//
// let result = cars.filter(car =>
//     car.power > 250 && car.producer === 'bmw'
// );
// console.log(result);







// - взять слдующий массив

let usersWithAddress = [
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    ];



// -- отсортировать его по id пользователей
//
// let result = usersWithAddress.sort((a,b) => {
//     return a.id - b.id;
// });
// console.log(result);


// -- отсортировать его по id пользователей в обратном опрядке
//
// let result = usersWithAddress.sort((a, b) => {
//     return b.id - a.id;
// });
// console.log(result);


// -- отсортировать его по возрасту пользователей
//
// let result = usersWithAddress.sort((a,b) => {
//     return a.age - b.age;
// });
// console.log(result);


// -- отсортировать его по возрасту пользователей в обратном порядке
//
// let result = usersWithAddress.sort((a,b) => {
//     return b.age - a.age;
// });
// console.log(result);


// -- отсортировать его по имени пользователей
//
// let result = usersWithAddress.sort((a, b) => {
//     if (a.name < b.name) {
//         return -1;
//     }
//     return 1;
// });
// console.log(result);


// -- отсортировать его по имени пользователей в обратном порядке
//
// let result = usersWithAddress.sort(((a, b) => {
//     if (a.name > b.name) {
//         return -1;
//     }
//     return 1;
// }));
// console.log(result);


// -- отсортировать его по названию улицы  в алфавитном порядке
//
// let result = usersWithAddress.sort(((a, b) => {
//     if (a.address.street < b.address.street) {
//         return -1;
//     }
//     return 1;
// }));
// console.log(result);


// -- отсортировать его по номеру дома по возрастанию
//
// let result = usersWithAddress.sort(((a, b) => {
//     return a.address.number - b.address.number;
// }));
// console.log(result);


// -- отфильтровать (оставить) тех кто младше 30
//
// let result = usersWithAddress.filter(user => user.age < 30);
// console.log(result);


// -- отфильтровать (оставить) тех у кого отрицательный статус
//
// let result = usersWithAddress.filter(user => user.status === false);
// console.log(result);


// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
//
// let result = usersWithAddress.filter(user => user.status === false && user.age < 30);
// console.log(result);


// -- отфильтровать (оставить) тех у кого номер дома четный
//
// let result = usersWithAddress.filter(user => user.address.number === 4);
// console.log(result);

