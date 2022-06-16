create table product(
    id number(10) not null primary key,
    name varchar2(100) not null,
    description varchar2(300) not null,
    price number(10) not null,
    pictureurl varchar2(100) not null,
    type varchar2(50) not null,
    brand varchar2(50) not null,
    quantityinstock number(10) not null
);

              
insert into product values(16,'Net Core Super Board','Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',30000,'/images/products/sb-core2.png','Netcore','Boards',100);
insert into product values(15,'React Board Super Whizzy Fast','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',25000,'/images/products/sb-react1.png','React','Boards',100);
insert into product values(14,'Typescript Entry Board','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',12000,'/images/products/sb-ts1.png','Typescript','Boards',100);
insert into product values(13,'Core Blue Hat','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',1000,'/images/products/hat-core1.png','Netcore','Hats',100);
insert into product values(12,'Green React Woolen Hat"','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',1500,'/images/products/hat-react1.png','React','Hats',100);
insert into product values(11,'Purple React Woolen Hat','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',1500,'/images/products/hat-react2.png','React','Hats',100);
insert into product values(10,'Blue Code Gloves','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',1800,'/images/products/glove-code1.png','VS Code','Gloves',100);
insert into product values(9,'Green Code Gloves','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',1500,'/images/products/glove-code2.png','VS Code','Gloves',100);
insert into product values(8,'Purple React Gloves','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',1600,'/images/products/glove-react1.png','React','Gloves',100);
insert into product values(1,'Angular Speedster Board 2000','Lorem ipsum dolor sit amet',18999,'/images/products/boot-core2.png','NetCore','Boots',100);
insert into product values(2,'Angular Blue Boots','Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',18000,'/images/products/boot-ang1.png','Angular','Boots',100);
insert into product values(3,'Angular Purple Boots','Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.',15000,'/images/products/boot-ang2.png','Angular','Boots',100);
insert into product values(4,'Core Purple Boots','Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',19999,'/images/products/boot-core1.png','Netcore','Boots',100);
insert into product values(5,'Core Red Boots','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',18999,'/images/products/sb-ang1.png','Angular','Boards',100);
insert into product values(6,'Redis Red Boots','Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',25000,'/images/products/boot-redis1.png','Redis','Boots',100);
insert into product values(7,'Green React Gloves','Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',1400,'/images/products/glove-react2.png','React','Gloves',100);