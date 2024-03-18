create table TargetStateName (id integer primary key, targetStateName varchar(60), targetStateGdp integer, createdAt datetime, updatedAt datetime);
create table GameIds (id varchar(36) PRIMARY KEY, lastRequestTimestamp integer , createdAt datetime, updatedAt datetime);
create table Guess (id varchar(36) PRIMARY KEY, gameId varchar(36), stateName varchar(60), createdAt datetime, updatedAt datetime);

insert into TargetStateName (id, targetStateName, targetStateGdp) values (1, 'Rhode Island', 72772);
