drop table if exists messages;
drop table if exists photos cascade;
drop table if exists animals;
drop table if exists sex_animals;
drop table if exists gender_users cascade;
drop table if exists species cascade;
drop table if exists breed;
drop table if exists users;


create table gender_users (id_gender_user serial primary key,
gender varchar (50) not null);

create table photos (id_photo serial primary key,
name varchar(255) not null,
description varchar(255) not null,
size int not null,
mimetype varchar(255) not null);


create table sex_animals (id_sex_animal serial primary key,
sex varchar (50) not null);
 
create table species (id_species serial primary key,
species varchar (255) not null);

create table breed (id_breed serial primary key,
breed varchar (255) not null,
id_species int not null references species(id_species));

create table users (id_user serial primary key,
username varchar(255) unique not null,
firstname varchar(255) not null,
description text, email varchar(255) unique not null,
city varchar(255) not null, password char(60) not null,
departement int not null,
id_photo int references photos(id_photo),
id_gender_user int not null references gender_users(id_gender_user));


create table messages (id_message serial primary key,
date date not null,
message text not null,
id_user_send int not null references users(id_user),
id_user_received int not null references users(id_user));

create table animals (id_animals serial primary key,
name varchar(255) not null,
age int not null,
id_user int not null references users(id_user),
id_breed int not null references breed(id_breed),
id_photo int not null references photos(id_photo),
id_sex_animal int not null references sex_animals(id_sex_animal));

insert into species (species) values ('Chien'), ('Chat'), ('NAC');

insert into sex_animals(sex) values ('Mâle'), ('Femelle'), ('Non sexable');

insert into gender_users(gender) values ('Ne se prononce pas'), ('Homme'), ('Femme'), ('Non binaire'), ('Non genré'), ('FTM'), ('MTF');

insert into breed(breed, id_species) values ('Labrador', 1), ('Golden retriever', 1), ('Berger australien', 1), ('Berger allemand', 1), ('Bouledogue français', 1), ('Chihuahua', 1), ('Dogue allemand', 1), ('Pitbull', 1), ('Chartreux', 2), ('Persan', 2), ('Sphinx', 2), ('Siamois', 2), ('Sacré de Birmanie', 2), ('Oiseau', 3), ('Lapin', 3), ('Furet', 3), ('Serpent', 3), ('Lézard', 3), ('Caméléon', 3);

