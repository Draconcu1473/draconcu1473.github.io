const fs = require('fs');
const path = require('path');
const User = require('./models/user');
const Owner = require('./models/owner');
const Auto = require('./models/auto');

const users = [
    new User(1, 'Иванов', 'Иван', '+79266542398', 'ivanushka@durovmail.ru', 'Костромская обл.'),
    new User(2, 'Иванова', 'Ольга', '+79887772184', 'ivanushkina@durovmail.com', 'Костромская обл.'),
];

const autos = [
    new Auto(1, 'Lada', 'Niva', 'бордовый', 'А344МЕ44'),
    new Auto(2, 'ВАЗ', '2107', 'баклажановый', 'У344СУ44'),
];

const owners = [
    new Owner(1, 1, '21-11-2011', null),
    new Owner(2, 2, '2-3-1993', '10-3-2009'),
];


function saveToCSV(data, fileName){
    const header = Object.keys(data[0].toJSON()).join(',');
    const rows = data.map(item => item.toCSV()).join('\n');
    const content = `${header}\n${rows}`;

    fs.writeFileSync(path.join(__dirname, 'data', fileName), content, `utf-8`);
    console.log(`Данные сохранены в ${fileName}`);
}

function saveToJSON(data, fileName) {
    const content = JSON.stringify(data.map(item => item.toJSON()), null, 2);

    fs.writeFileSync(path.join(__dirname, 'data', fileName), content, 'utf-8');
    console.log(`Данные сохранены в ${fileName}`);
}

//Сохраняем данные
saveToCSV(users, 'users.csv');
saveToCSV(autos, 'autos.csv');
saveToCSV(owners, 'owners.csv');

saveToJSON(users, 'users.JSON');
saveToJSON(autos, 'autos.JSON');
saveToJSON(owners, 'owners.JSON');