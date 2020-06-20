const fs = require('fs');
const log = console.log;
/*const book={
    title:'Immortals of Meluha',
    author:'Amish',
};
const bookJSON=JSON.stringify(book);
// log(bookJSON);
// const parsedData=JSON.parse(bookJSON);
// log('dodo');
// log(parsedData);
// log('pelican');
// log(parsedData.author);
fs.writeFileSync('jsonPractice.JSON',bookJSON);
*/
// const dataBuffer = fs.readFileSync('jsonPractice.JSON');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// log(data.title);

const practiceBuffer=fs.readFileSync('jsonPractice.JSON');
const practiceJSON=practiceBuffer.toString();
const practice=JSON.parse(practiceJSON);
practice.name='dodo';
practice.age=14;
const practiceDodo=JSON.stringify(practice);
fs.writeFileSync('jsonPractice.JSON',practiceDodo);
log(practiceDodo);