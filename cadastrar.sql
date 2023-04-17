create database Cadastrar;

create table Cadst(
Id tinyint,
Nome varchar(22) not null,
Sobre_Nome varchar(22) not null,
Email varchar(20),
DDD int not null,
Telefone bigint not null,
Pwd varchar(100) not null, 
Data_Nasc date,
Idade int,
Genero char(1),
check(Idade >= 18 and Pwd >= 100),
primary key(Id, DDD, Telefone, Idade));

select * from Cadst;



drop table Cadst;
