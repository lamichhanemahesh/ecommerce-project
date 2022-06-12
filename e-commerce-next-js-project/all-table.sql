 CREATE SEQUENCE product_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;
  
  create table product(
  id number(10) not null,
  name varchar2(200) not null,
  description varchar2(400) not null,
  price number(10) not null,
  pictureurl varchar2(150) not null,
  type varchar2(100) not null,
  brand varchar2(100) not null,
  quantityinstock number(10) not null,
  constraint product_pk primary key(id)
  );
  drop table product;
insert into product values(1,'Angular Speedster Board 2000','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',20000,'/images/products/sb-ang1.png','Angular','Boards',100);
insert into product values(2,'Green Angular Board 3000','Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.',15000,'/images/products/sb-ang2.png','Angular','Boards',100);
insert into product values(3,'Core Board Speed Rush 3','Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',1800,'/images/products/sb-core1.png','NetCore"','Boards',100);
insert into product values(4,'Net Core Super Board','Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',30000,'/images/products/sb-core2.png','NetCore','Boards',100);
insert into product values(5,'React Board Super Whizzy Fast','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',25000,'/images/products/sb-react1.png','React','Boards',100);
insert into product values(6,'Typescript Entry Board','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',12000,'/images/products/sb-ts1.png','TypeScript','Boards',100);
insert into product values(7,'Core Blue Hat','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',1000,'/images/products/hat-core1.png','NetCore','Hats',100);
insert into product values(8,'Green React Woolen Hat','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',8000,'/images/products/hat-react1.png','React','Hats',100);
insert into product values(9,'Purple React Woolen Hat','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',1500,'/images/products/hat-react2.png','React','Hats',100);
insert into product values(10,'Blue Code Gloves','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',1800,'/images/products/glove-code1.png','VS Code','Gloves',100);
insert into product values(11,'Green Code Gloves','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',1500,'/images/products/glove-code2.png','VS Code','Gloves',100);
insert into product values(12,'Purple React Gloves','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',1600,'/images/products/glove-react1.png','React','Gloves',100);
insert into product values(13,'Green React Gloves','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',1400,'/images/products/glove-react2.png','React','Gloves',100);
insert into product values(14,'Redis Red Boots','Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',25000,'/images/products/boot-redis1.png','Redis','Boots',100);
insert into product values(15,'Core Red Boots','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',18999,'/images/products/boot-core2.png','NetCore','Boots',100);
insert into product values(16,'Core Purple Boots','Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',19999,'/images/products/boot-core1.png','NetCore','Boots',100);
insert into product values(17,'Angular Purple Boots','Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.',15000,'/images/products/boot-ang2.png','Angular','Boots',100);
insert into product values(18,'Angular Blue Boots','Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',18000,'/images/products/boot-ang1.png','Angular','Boots',100);