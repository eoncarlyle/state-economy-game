create table TargetStateName (id integer primary key, targetStateName varchar(60), createdAt datetime, updatedAt datetime);
create table GameIds (id varchar(36) PRIMARY KEY, attempts tinyint, createdAt datetime, updatedAt datetime);

insert into TargetStateName (id, targetStateName) values (1, 'Florida')