const log = console.log;
// const square = function (x) {
//     return x * x;
// }

// const square=(x) => {return x*x}

// const square = (x) => x * x;

// log(square(3));

// const event = {
//     name: 'party',
//     printGuestList: () => {
//         log('guest list for ' + event.name);
//     }
// }

const event = {
    name: 'party',
    printGuestList() {
        log('guest list for ' + this.name);
    }
}

event.printGuestList();