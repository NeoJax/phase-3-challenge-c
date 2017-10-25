const { expect } = require('chai');
const {
  grabGuests,
  grabRooms,
  grabOpenRooms,
  grabBookings,
  grabRoomBookings,
} = require('./database.js');

describe('testing the database.js functions', () => {
  // Before each refresh the database
  describe('grabGuests', () => {
    it('should return a specific first name', (done) => {
      grabGuests().then((guest) => {
        expect(guest[0].name).to.equal('Aurthur Velti');
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
        expect(guest).to.be.an('array');
        done();
      });
    });
  });
  // Before each refresh the database
  describe('grabRooms', () => {
    it('should return a specific first name', (done) => {
      grabRooms().then((room) => {
        expect(room[0].room_num).to.equal('3B');
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
        expect(room).to.be.an('array');
        done();
      });
    });
  });
    // Before each refresh the database
  describe('grabOpenRooms', () => {
    it('should return a specific first name', (done) => {
      grabOpenRooms().then((room) => {
        expect(room[0].room_num).to.equal('3B');
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
        expect(room).to.be.an('array');
        done();
      });
    });
  });
  // Before each refresh the database
  describe('grabBookings', () => {
    it('should return a specific first name', (done) => {
      grabBookings().then((booking) => {
        expect(booking[0].name).to.equal('Janie Powers');
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
        expect(booking).to.be.an('array');
        done();
      });
    });
  });
    // Before each refresh the database
  describe('grabRoomBookings', () => {
    it('should return a specific first name', (done) => {
      grabRoomBookings().then((booking) => {
        expect(booking[0].name).to.equal('Janie Powers');
        done();
      });
    });
    it('should return an array', (done) => {
      grabRoomBookings().then((booking) => {
        expect(booking).to.be.an('array');
        done();
      });
    });
    it('should return an exact amount of rows', (done) => {
      grabRoomBookings().then((booking) => {
        expect(booking).to.be.an('array');
        done();
      });
    });
  });
});
