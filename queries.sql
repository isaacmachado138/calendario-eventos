
-- Criação do banco de dados
CREATE DATABASE Calendario;
USE Calendario;

-- Criação das tabelas
CREATE TABLE user (
user_id INT PRIMARY KEY auto_increment,
user_name VARCHAR(80) NOT NULL,
user_email VARCHAR(100),
user_password VARCHAR(20) NOT NULL,
user_cpf VARCHAR(13) NOT NULL,
user_nasc DATE,
user_telefone VARCHAR(20)
);
CREATE TABLE evento(
evento_id INT PRIMARY KEY auto_increment,
 user_id INT(13) NOT NULL,
 evento_start DATETIME NOT NULL,
 evento_end DATETIME NOT NULL,
 evento_desc VARCHAR(150)
 );

-- Populando base de usuários

INSERT INTO users (user_name, user_email, user_password, user_cpf, user_nasc, user_telefone) VALUES ('ADMIN', 'isaacmachado138@gmail.com', '1234', '111', '2003-06-02', '19997192838');
INSERT INTO users (user_name, user_email, user_password, user_cpf, user_nasc, user_telefone) VALUES ('ADMIN2', 'aa', '1234', '111', '2003-06-02', '19997192838');

