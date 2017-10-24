const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/grocerystore';
const db = pgp(connectionString);

function grabGuests() {
  return db.any('SELECT * FROM guests')
    .catch((err) => {
      console.log(err);
    });
}

function grabRooms() {
  return db.any('SELECT * FROM rooms')
    .catch((err) => {
      console.log(err);
    });
}

function grabOpenRooms() {
  return db.any('SELECT * FROM rooms WHERE available=true')
    .catch((err) => {
      console.log(err);
    });
}

function grabBookings() {
  return db.any('SELECT * FROM bookings')
    .catch((err) => {
      console.log(err);
    });
}

function grabRoomBooking(id) {
  return db.any('SELECT * FROM bookins where id=$1', [id])
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  grabGuests,
  grabRooms,
  grabOpenRooms,
  grabBookings,
  grabRoomBooking,
};
