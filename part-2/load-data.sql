\c hotel

\COPY guests FROM './guests.csv' DELIMITER ',' CSV HEADER;

\COPY rooms FROM './rooms.csv' DELIMITER ',' CSV HEADER;

\COPY bookings FROM './bookings.csv' DELIMITER ',' CSV HEADER;
