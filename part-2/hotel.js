const {
  grabGuests,
  grabRooms,
  grabOpenRooms,
  grabBookings,
  grabRoomBooking,
} = require('./database.js');
const Table = require('cli-table2');

const command = process.argv[2];
const string = process.argv[3];

function listGuests() {
  const guestTable = new Table({
    chars: {'top': '-' , 'top-mid': '+' , 'top-left': '|' , 'top-right': '|'
         , 'bottom': '-' , 'bottom-mid': '+' , 'bottom-left': '|' , 'bottom-right': '|'
         , 'left': '|' , 'left-mid': '|' , 'mid': '-' , 'mid-mid': '+'
         , 'right': '|' , 'right-mid': '|' , 'middle': '│'},
    head: ['ID', 'Guest Name', 'Email'],
    style: {
      head: [],
      border: [],
    },
  });
  grabGuests().then((data) => {
    data.forEach((guest) => {
      guestTable.push([guest.id, guest.name, guest.email]);
    });
  });
}

function listRooms() {

}

function listOpenRooms() {

}

function listBookings() {

}

function listRoomBookings() {

}

switch (command) {
  case 'guests':
    listGuests();
    break;
  case 'shopper-orders':
    shopperOrders(string);
    break;
  case 'real-shoppers':
    realShoppers();
    break;
  default:
    console.log('Not a right command');
}
