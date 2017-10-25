const {
  grabGuests,
  grabRooms,
  grabOpenRooms,
  grabBookings,
  grabRoomBookings,
} = require('./database.js');
const Table = require('cli-table2');
const pgp = require('pg-promise');

const command = process.argv[2];
const string = process.argv[3];

function listGuests() {
  const guestTable = new Table({
    chars: {'top': '-' , 'top-mid': '+' , 'top-left': '|' , 'top-right': '|',
      'bottom': '-' , 'bottom-mid': '+' , 'bottom-left': '|' , 'bottom-right': '|',
      'left': '|' , 'left-mid': '|' , 'mid': '-' , 'mid-mid': '+',
      'right': '|' , 'right-mid': '|' , 'middle': '│'
    },
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
    console.log(guestTable.toString());
  });
}

function listRooms() {
  const roomTable = new Table({
    chars: {'top': '-' , 'top-mid': '+' , 'top-left': '|' , 'top-right': '|',
      'bottom': '-' , 'bottom-mid': '+' , 'bottom-left': '|' , 'bottom-right': '|',
      'left': '|' , 'left-mid': '|' , 'mid': '-' , 'mid-mid': '+',
      'right': '|' , 'right-mid': '|' , 'middle': '│'
    },
    head: ['Room #', 'Capacity', 'Available'],
    style: {
      head: [],
      border: [],
    },
  });
  grabRooms().then((data) => {
    data.forEach((room) => {
      roomTable.push([room.room_num, room.capacity, room.available]);
    });
    console.log(roomTable.toString());
  });
}

function listOpenRooms() {
  const roomTable = new Table({
    chars: {'top': '-' , 'top-mid': '+' , 'top-left': '|' , 'top-right': '|',
      'bottom': '-' , 'bottom-mid': '+' , 'bottom-left': '|' , 'bottom-right': '|',
      'left': '|' , 'left-mid': '|' , 'mid': '-' , 'mid-mid': '+',
      'right': '|' , 'right-mid': '|' , 'middle': '│'
    },
    head: ['Room #', 'Capacity', 'Available'],
    style: {
      head: [],
      border: [],
    },
  });
  grabOpenRooms().then((data) => {
    data.forEach((room) => {
      roomTable.push([room.room_num, room.capacity, room.available]);
    });
    console.log(roomTable.toString());
  });
}

function listBookings() {
  const bookingTable = new Table({
    chars: {'top': '-' , 'top-mid': '+' , 'top-left': '|' , 'top-right': '|',
      'bottom': '-' , 'bottom-mid': '+' , 'bottom-left': '|' , 'bottom-right': '|',
      'left': '|' , 'left-mid': '|' , 'mid': '-' , 'mid-mid': '+',
      'right': '|' , 'right-mid': '|' , 'middle': '│'
    },
    head: ['Room #', 'Guest Name', 'Check-In', 'Check-Out'],
    style: {
      head: [],
      border: [],
    },
  });
  grabBookings().then((data) => {
    data.forEach((booking) => {
      const checkIn = booking.check_in.toISOString().slice(0, 10);
      const checkOut = booking.check_out.toISOString().slice(0, 10);
      bookingTable.push([booking.room_num, booking.name, checkIn, checkOut]);
    });
    console.log(bookingTable.toString());
  });
}

function listRoomBookings(roomNum) {
  const bookingTable = new Table({
    chars: {'top': '-' , 'top-mid': '+' , 'top-left': '|' , 'top-right': '|',
      'bottom': '-' , 'bottom-mid': '+' , 'bottom-left': '|' , 'bottom-right': '|',
      'left': '|' , 'left-mid': '|' , 'mid': '-' , 'mid-mid': '+',
      'right': '|' , 'right-mid': '|' , 'middle': '│'
    },
    head: ['Room #', 'Guest Name', 'Check-In', 'Check-Out'],
    style: {
      head: [],
      border: [],
    },
  });
  grabRoomBookings(roomNum).then((data) => {
    data.forEach((booking) => {
      const checkIn = booking.check_in.toISOString().slice(0, 10);
      const checkOut = booking.check_out.toISOString().slice(0, 10);
      bookingTable.push([booking.room_num, booking.name, checkIn, checkOut]);
    });
    console.log(bookingTable.toString());
  });
}

switch (command) {
  case 'guests':
    listGuests();
    break;
  case 'rooms':
    if (string === '--available') {
      listOpenRooms();
    } else {
      listRooms();
    }
    break;
  case 'bookings':
    if (string !== undefined) {
      listRoomBookings(string);
    } else {
      listBookings();
    }
    break;
  default:
    console.log('Not a right command');
}
