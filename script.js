// let fruits = [5, 7, 6, 1, 3, 9];
// console.log(fruits.sort()) //sortirovka qiladi (сортирует);

// let fruits = [1, 2, 3];
// console.log(fruits.reverse()) //teskari qiladi (делает наоборот)

// let user = ['Shoxruz', 'qalesa'];
// console.log(user.join(' oytovo '))  //ortasiga qoshish (добавляет по середине)

// let user = [1, 2, 3, 4, 5];
// user.splice(1,2,9)
// console.log(user)

// let words = ['Привет', 'как', 'дела'];
// console.log(words.join('-'));

// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(1,2,100,200)
// console.log(numbers)

// const ismlar = ['ansor', 'husi', 'shox', 'bonu'];
// for(let i = 0; i < ismlar.length; i++){
//     console.log(ismlar)
// }

// const ismlar =  ['ansor', 'husi', 'shox', 'bonu'];
// ismlar.forEach(function(ism){
//     const newIsm = ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + 'bek'
//     console.log(newIsm)    //har bittasiga (для каждого)
// })
 


// const words = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'gul'];
// let wordsWithN = [], wordsWithoutN = [];

// words.forEach(word => (word.includes('n')? wordsWithN: wordsWithoutN).push(word));

// wordsWithN.sort().reverse();
// wordsWithoutN.sort().reverse();

// console.log(wordsWithN, "'n harfi ishtrok etgan so'zlar'");
// console.log(wordsWithoutN, "'n harfi ishrtok etmagan so'zlar'");




const words = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'gul'];
let wordsWithN = [], wordsWithoutN = [];

words.forEach(word => (word.includes('n') ? wordsWithN : wordsWithoutN).push(word));

wordsWithN.sort().reverse();
wordsWithoutN.sort().reverse();

console.log(wordsWithN, "'n harfi ishtirok etgan so'zlar'");
console.log(wordsWithoutN, "'n harfi ishtirok etmagan so'zlar'");
