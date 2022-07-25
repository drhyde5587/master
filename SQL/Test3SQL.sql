create table model(
id int identity(1,1) primary key,
make varchar(30),
model varchar(30)
); /*Create table model*/

/*Inserting the values*/
insert into model(make,model) values('Toyota','Corolla')
insert into model(make,model) values('Toyota','Camry')
insert into model(make,model) values('Nissan','Duke')
insert into model(make,model) values('Nissan','Duke')
insert into model(make,model) values('Mazda','Mazda3')
insert into model(make,model) values('Mazda','CX5')
insert into model(make,model) values('Toyota','Camry')
insert into model(make,model) values('Ford','Raptor')

select * from model /*Execute this line before running delete query */

delete m from model m 
where m.id < (select max(id) from model m2 where (m2.make=m.make and m2.model=m.model)) /*Deleting the duplicates with lower ID */

select * from model /*Execute after delete query*/