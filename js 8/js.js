// 1
const friends = [`Mango`, `Poly`, `Kiwi`, `Ajax`];

let result = ``;

for (let i = 0; i < friends.length; i++) {
  result += friends[i];
  if (i < friends.length - 1) {
    result += `, `;
  }
}

console.log(result);



const friendJoin = friends.join(`, `);
console.log(friendJoin);


// 2
const cards = [
    `Картка-1`,
    `Картка-2`,
    `Картка-3`,
    `Картка-4`,
    `Картка-5`,
];


console.log(cards.indexOf(`Картка-3`));
const cardToRemove = cards.splice(2, 1);
console.log(cards);


const cardToInsert = cards.splice(5, 0, `Картка-6`);
console.log(cards);


const cardToUpdate = cards.splice(2, 1, `Картка №4`);
console.log(cards);