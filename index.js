// 1
// const user = {
//     name: 'Dima',
//     age: 12,
//     friends: ['Maxim','Sahsa', 'Artur'],
//     hobby: 'Komputer Games',
//     premium: true,
//     changingUsersSettings () {
//         this.mood = 'Happy';
//         this.hobby = 'Skydiving';
//         this.premium = false;
//         let userKeys = Object.keys(user);
//         for(let i = 0;i < userKeys.length; i += 1) {
//             if(userKeys[i] !== 'changingUsersSettings') { 
//                 console.log(`${userKeys[i]}: ${user[userKeys[i]]}`);
//             }
//             else{
//                 continue;
//             }
//         }
//     }
// }
// user.changingUsersSettings();
// const {name, age, friends :[firstFriend, secondFriend, thirstFriend], hobby, premium, mood} = user;

// 2
// const user1 = {
//     name1: 'Dima',
//     age1: 12,
//     friends1: ['Maxim','Sahsa', 'Artur'],
//     hobby1: 'Komputer Games',
//     premium1: true,
// }
// const countProps = user1 => {
//     return Object.keys(user1).length;
// }
// const {name1, age1, friends1: [friend1, friend2, friend3], hobby1, premium1} = user1

// // 3
// const employees = {
//     Nikita: 14,
//     Bogdan: 15,
//     Maxim: 9,
//     Oleg: 11,
// }
// const findBestEmployee = employees => {
//     let bestEmployee = Number.parseFloat(Object.values(employees).splice(0, 1).join());
//     for (const key in employees) {
//         if (employees[key] > bestEmployee) {
//             bestEmployee = parseFloat(employees[key]);
//         }

//     }
//     return bestEmployee
// }
// const {nikita, bogdan, maxim, oleg} = employees;

// // 4
// const employeesOfAnotherCompany = {
//         Dima: 40000,
//         Artem: 45000,
//         Petro: 32000,
//         Obizan: 38000,
// }
// const countTotalSalary = employeesOfAnotherCompany => {
//     let sum = 0;
//     for(const key in employeesOfAnotherCompany) {
//         sum += employeesOfAnotherCompany[key];
//     }
//     return sum;
// }
// const {dima, artem, petro, obizan} = employeesOfAnotherCompany;

// // 5
// const arr = [
//     {
//         element1: 5,
//         element2: 7,
//         element3: 3,
//     },
//     {
//         element1: 8,
//         element2: 11,
//         element3: 0,
//     },
//     {
//         element1: 6,
//         element2: 9,
//         element3: 4,
//     }
// ];
// console.log(Object.values(arr))
// const getAllPropValues = (arr) => {
//     let arrayOfElement1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrayOfElement1.push(arr[i].element1);
//     }
//     return arrayOfElement1;
// }
// const {[0]: {element1, element2, element3}} = arr;


// 6
// const shop = [
//     {
//         aplles: 4,
//         bananas: 8,
//         kiwi: 20,
//     },
//     {
//         box: 5,
//         cup: 250,
//         mirror: 250,
//     },
//     {
//         mobilePhone: 9000,
//         laptop: 22000,
//         pc: 40000,
//     }
// ]
// const nameOfProductToCalculate = shop[1].box

// const findPriceOfProduct = (nameOfProductToCalculate) => {
//     return (nameOfProductToCalculate * 5);
// }
// console.log(findPriceOfProduct(nameOfProductToCalculate));
// const {[0]: {aplles, bananas, kiwi}, [1]: {box, cup, mirror}, [2]: {mobilePhone, laptop, pc}} = shop;


// // 7
// const account = {
//     ownerName: 'Bogdan',
//     accountNumber: 6453428,
//     balance: 877.00,
//     history: '',
//     deposit() {
//         for (let i = 0; i > -1; i++) {
//             const askSumOfDeposite = prompt('Яку сумму ви хочете покласти на рахунок? Якщо не хочете, натисніть відмінити.');
//             console.log(askSumOfDeposite);
//             if (askSumOfDeposite === null) {
//                 break;
//             }
//             else if (askSumOfDeposite === '') {
//                 this.balance += 0;
//             }
//             else if (isNaN(askSumOfDeposite) === false) {
//                 alert(`Ваш рахунок було поповнено на ${askSumOfDeposite}₴.`);
//                 this.balance += parseFloat(askSumOfDeposite);
//                 alert(`На вашому рахунку зараз ${this.balance}₴`);
//                 this.history += (`Ваш рахунок було поповнено на ${askSumOfDeposite}₴.
//                     `);
//             }
//             else {
//                 this.balance += 0;
//             }
//         }
//     },
//     withdraw() {
//         for (let i = 0; i > -1; i++) {
//             const askSumOfDeposite = prompt('Яку сумму ви хочете зняти з рахунку? Якщо не хочете, натисніть відмінити.');
//             if (askSumOfDeposite === null) {
//                 break;
//             }
//             else if (askSumOfDeposite === '') {
//                 this.balance -= 0;
//             }
//             else if (isNaN(askSumOfDeposite) === false) {
//                 alert(`З вашого рахунку було знято ${askSumOfDeposite}₴.`);
//                 this.balance -= parseFloat(askSumOfDeposite);
//                 alert(`На вашому рахунку зараз ${this.balance}₴`);
//                 this.history += (`З вашого рахунку було знято ${askSumOfDeposite}₴.
//                 `);
//             }
//             else {
//                 this.balance -= 0;
//             }
//         }
//     },
// }
// account.deposit();
// account.withdraw();
// alert(`Ось історія вашого рахунку: ${account.history}
//     Зараз на вашому рахунку ${account.balance}₴`);
// const {ownerName, accountNumber, balance, history} = account