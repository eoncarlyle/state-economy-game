drop table if exists target_states;
drop table if exists puzzle_sessions;
drop table if exists guesses;

create table target_states (
    id integer primary key,
    name varchar(60),
    gdp integer,
    createdAt datetime,
    updatedAt datetime);

create table puzzle_sessions (
    id varchar(36) primary key,
    lastRequestTimestamp integer,
    createdAt datetime,
    updatedAt datetime
);

create table guesses (
    id varchar(36) primary key,
    puzzleSessionId varchar(36),
    stateName varchar(60),
    createdAt datetime,
    updatedAt datetime,
    foreign key (puzzleSessionId) references puzzle_sessions (id) on delete cascade
);

insert into target_states (id, name, gdp) values (1, 'Rhode Island', 72772);
