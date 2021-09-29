import fs from 'fs';

const file = fs.createWriteStream("./big.file");

for (let i = 0; i < 1e5; i++){
file.write(`Enim sint do cupidatat ex laborum eu nisi officia aliquip irure est eiusmod. Veniam nostrud dolore amet laborum esse mollit tempor est Lorem non minim. Incididunt cupidatat commodo anim excepteur minim in eu anim nisi dolore ea culpa esse. Labore exercitation magna deserunt do duis ad nostrud. Ipsum proident aute excepteur est qui irure culpa qui elit dolor. Ea ut sint voluptate sit aute sunt. Irure ut irure aliqua id esse mollit ex fugiat deserunt.
Magna ut ut adipisicing aute velit nulla labore minim magna Lorem nisi aliquip ex. Magna fugiat mollit officia amet aute excepteur culpa nisi velit ex cillum ex tempor est. Minim dolor fugiat ea nulla nulla incididunt deserunt nostrud laborum minim eu nisi.`);
}

file.end();

