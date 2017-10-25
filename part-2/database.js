const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/hotel_db';
const db = pgp(connectionString);

function grabGuests() {
  return db.any('SELECT * FROM guests')
    .catch((err) => {
      console.log(err);
    });
}

function grabRooms() {
  let today = new Date();
  today = today.toISOString().slice(0, 10);
  return db.any("SELECT room_num, capacity, FALSE AS available FROM rooms JOIN bookings ON bookings.room_id = rooms.id WHERE check_in <= $1 AND $1 <= check_out UNION SELECT room_num, capacity, TRUE AS available FROM rooms JOIN bookings ON bookings.room_id = rooms.id WHERE check_in >= $1 AND $1 <= check_out AND room_num NOT IN(SELECT room_num FROM rooms JOIN bookings ON bookings.room_id = rooms.id WHERE check_in <= $1 AND $1 <= check_out) ORDER BY room_num", [`${today}`])
    .catch((err) => {
      console.log(err);
    });
}

function grabOpenRooms() {
  let today = new Date();
  today = today.toISOString().slice(0, 10);
  return db.any("SELECT room_num, capacity, available FROM (SELECT room_num, capacity, FALSE AS available FROM rooms JOIN bookings ON bookings.room_id = rooms.id WHERE check_in <= $1 AND $1 <= check_out UNION SELECT room_num, capacity, TRUE AS available FROM rooms JOIN bookings ON bookings.room_id = rooms.id WHERE check_in >= $1 AND $1 <= check_out AND room_num NOT IN(SELECT room_num FROM rooms JOIN bookings ON bookings.room_id = rooms.id WHERE check_in <= $1 AND $1 <= check_out)) as available WHERE available = true ORDER BY room_num", [`${today}`])
    .catch((err) => {
      console.log(err);
    });
}

function grabBookings() {
  return db.any('SELECT * FROM bookings JOIN guests ON guests.id = bookings.guest_id JOIN rooms ON rooms.id = bookings.room_id WHERE check_out >= now() ORDER BY check_in')
    .catch((err) => {
      console.log(err);
    });
}

function grabRoomBookings(roomNum) {
  return db.any('SELECT * FROM bookings JOIN guests ON guests.id = bookings.guest_id JOIN rooms ON rooms.id = bookings.room_id WHERE room_num=$1 AND check_out >= now() ORDER BY check_in', [roomNum])
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
