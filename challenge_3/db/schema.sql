DROP DATABASE checkouts;

CREATE DATABASE checkouts;

USE checkouts;

CREATE TABLE `transactions` (
  `id` integer auto_increment primary key,
  `name` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `address1` varchar(255),
  `address2` varchar(255),
  `city` varchar(255),
  `state` varchar(255),
  `zip` integer,
  `phone` integer,
  `card` integer,
  `exp` varchar(255),
  `cvv` integer,
  `billing` integer
);