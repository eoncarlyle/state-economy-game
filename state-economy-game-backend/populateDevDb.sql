create table TargetStateName (id integer primary key, targetStateName varchar(60), targetStateGdp integer, createdAt datetime, updatedAt datetime);
create table GameIds (id varchar(36) PRIMARY KEY, attempts tinyint, lastRequestTimestamp integer , createdAt datetime, updatedAt datetime);

insert into TargetStateName (id, targetStateName, targetStateGdp) values (1, 'Rhode Island', 72772);
