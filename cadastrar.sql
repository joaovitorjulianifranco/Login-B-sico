create database Cadastrar;

create table Cadastrar(
Id tinyint,
Nome nvarchar(22) not null,
Sobre_Nome nvarchar(22) not null,
Email nvarchar(20),
Pwd varchar(100) not null, 
Data_Nasc date,
Idade smallint,
Genero char(2),
check(Idade >= 18 and Pwd >= 100),
primary key(Id, Idade));

select * from Cadastrar;

use [Cadastrar]
go



drop table Cadastrar;
drop database Cadastrar;
