CREATE KEYSPACE IF NOT EXISTS bdnr WITH
replication = {'class': 'SimpleStrategy',
               'replication_factor' : 2};


create table bdnr.vehicle_registry(
    id uuid,
    vehicle_id int,
    waves float,
    temperature float,
    vibration float,
    pressure float,
    voltage float,
    speed float,
    time bigint,
    primary key(vehicle_id, id)
)