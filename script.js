let waiters;

const RESTORAN = {
  employee: 20,
  director: 'Piter',
  isOpen: true,
}

RESTORAN.rooms = 10;
RESTORAN['square'] = '1000m';
delete RESTORAN['square'];
console.log(RESTORAN);

const VEHICLE = {
};
VEHICLE['brandName'] = 'BMW';
VEHICLE['model'] = 'X5';
VEHICLE['model'] = 'M1';
delete VEHICLE['model'];
console.log(VEHICLE);



let salaries = {
  Aroo: 100,
  Dalida: 160,
  Samat: 130
}
let result = 0;
for(let key in salaries){
  result +=salaries[key]
}

console.log(result);