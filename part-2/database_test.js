const { expect } = require('chai');
const {
  grabGuests,
  grabRooms,
  grabOpenRooms,
  grabBookings,
  grabRoomBookings,
} = require('./database.js');

describe('testing the database.js functions', () => {
  describe('grabGuests', () => {
    it('should return a specific name', (done) => {
      grabGuests().then((guest) => {
        expect(guest[0].name).to.equal('Aurthur Velti');
        done();
      });
    });
    it('should return a specific email', (done) => {
      grabGuests().then((guest) => {
        expect(guest[13].email).to.equal('asawkind@comsenz.com');
        done();
      });
    });
    it('should return an array', (done) => {
      grabGuests().then((guest) => {
        expect(guest).to.be.an('array');
        done();
      });
    });
    it('should return an exact amount of rows', (done) => {
      grabGuests().then((guest) => {
        expect(guest.length).to.be.equal(20);
        done();
      });
    });
  });

  describe('grabRooms', () => {
    it('should return a specific room number', (done) => {
      grabRooms().then((room) => {
        expect(room[0].room_num).to.equal('2A');
        done();
      });
    });
    it('should return a specific capacity', (done) => {
      grabRooms().then((room) => {
        expect(room[5].capacity).to.equal(4);
        done();
      });
    });
    it('should return an array', (done) => {
      grabRooms().then((room) => {
          expect(room).to.be.an('array');
          done();
        });
      });
    it('should return an exact amount of rows', (done) => {
      grabRooms().then((room) => {
        expect(room.length).to.be.equal(18);
        done();
      });
    });
  });

  describe('grabOpenRooms', () => {
    it('should return a specific first number', (done) => {
      grabOpenRooms().then((room) => {
        expect(room[9].room_num).to.equal('4A');
        done();
      });
    });
    it('should return a specific capacity', (done) => {
      grabOpenRooms().then((room) => {
        expect(room[11].capacity).to.equal(5);
        done();
      });
    });
    it('should return an array', (done) => {
      grabOpenRooms().then((room) => {
        expect(room).to.be.an('array');
        done();
      });
    });
    it('should return an exact amount of rows', (done) => {
      grabOpenRooms().then((room) => {
        expect(room.length).to.be.equal(15);
        done();
      });
    });
  });

  describe('grabBookings', () => {
    it('should return a specific name', (done) => {
      grabBookings().then((booking) => {
        expect(booking[0].name).to.equal('Susanna Loosmore');
        done();
      });
    });
    it('should return a specific room number', (done) => {
      grabBookings().then((booking) => {
        expect(booking[8].room_num).to.equal('3D');
        done();
      });
    });
    it('should return an array', (done) => {
      grabBookings().then((booking) => {
        expect(booking).to.be.an('array');
        done();
      });
    });
    it('should return an exact amount of rows', (done) => {
      grabBookings().then((booking) => {
        expect(booking.length).to.be.equal(34);
        done();
      });
    });
  });

  describe('grabRoomBookings', () => {
    it('should return a specific first name', (done) => {
      grabRoomBookings('2B').then((booking) => {
        expect(booking[0].name).to.equal('Karlens Hallas');
        done();
      });
    });
    it('should return an array', (done) => {
      grabRoomBookings('2B').then((booking) => {
        expect(booking).to.be.an('array');
        done();
      });
    });
    it('should return an exact amount of rows', (done) => {
      grabRoomBookings('2B').then((booking) => {
        expect(booking.length).to.be.equal(3);
        done();
      });
    });
    it('should return no rows', (done) => {
      grabRoomBookings('4F').then((booking) => {
        expect(booking.length).to.be.equal(0);
        done();
      });
    });
  });
});
