const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/hotel';
const db = pgp(connectionString);

function grabGuests() {
  return db.any('SELECT * FROM guests')
    .catch((err) => {
      console.log(err);
    });
}

function grabRooms() {
  return db.any('SELECT room_num, capacity, true as available from rooms \
	JOIN bookings \
	ON bookings.room_id = rooms.id \
	WHERE check_in >= $1 AND $1 <= check_out', [new Date()])
    .catch((err) => {
      console.log(err);
    });
}

function grabOpenRooms() {
  return db.any('SELECT DISTINCT room_num, capacity FROM rooms JOIN bookings ON bookings.room_id = rooms.id')
    .catch((err) => {
      console.log(err);
    });
}

function grabBookings() {
  return db.any('SELECT * FROM bookings JOIN guests ON guests.id = bookings.guest_id JOIN rooms ON rooms.id = bookings.room_id WHERE check_in > now()')
    .catch((err) => {
      console.log(err);
    });
}

function grabRoomBookings(roomNum) {
  return db.any('SELECT * FROM bookings JOIN guests ON guests.id = bookings.guest_id JOIN rooms ON rooms.id = bookings.room_id WHERE room_num=$1 AND check_in > now()', [roomNum])
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  grabGuests,
  grabRooms,
  grabOpenRooms,
  grabBookings,
  grabRoomBookings,
};
