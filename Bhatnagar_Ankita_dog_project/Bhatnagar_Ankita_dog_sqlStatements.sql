INSERT INTO dog (number, name, weightKg, length, breed)
VALUES (3,	'Barky',25,	50,	'datahound');

INSERT INTO dog (number, name, weightKg, length, breed)
VALUES (1,	'Rex',	5,	42,	'muddypaw');

INSERT INTO dog (number, name, weightKg, length, breed)
VALUES (2,	'Grand Duke of S.Q.L',	15,	20,	'bulldog');

INSERT INTO dog (number, name, weightKg, length, breed)
VALUES (6,	'Spot'	1,	70,	'lapdog');

INSERT INTO dog (number, name, weightKg, length, breed)
VALUES (4,	'Gigant Howler'	7,	30,	'furry tail-wagger');

INSERT INTO dog (number, name, weightKg, length, breed)
VALUES (5,	'Hound of Basker W.I.11e',	10,	40,	'watchdog');

INSERT INTO dog (number, name, weightKg, length, breed)
VALUES (7,	'Canine The III', 45,35,'spaniel');

SELECT * FROM dog;

SELECT  number, name, breed FROM dog;

SELECT * FROM dog WHERE weightKg = 30;

SELECT * FROM dog WHERE lenght = 30;

SELECT * FROM dog WHERE breed = 'muddypaw';


update dog set name='Grand Duke of S.Q.L', weightKg= 30 where number =3;

update dog set length= 70, weightKg= 10 where number =5;

update dog set name='Grand Duke of S.Q.L', length= 50, weightKg = 30  where number =1;

update dog set breed='furry tail-wagger', name='Barky', length = 50 where number =5;


delete from dog where number=2;

delete from dog where number=6;

delete from dog where breed='watchdog';

delete from dog where weightKg = 13 or lenght = 50; 

delete from dog where weightKg=5 or weightKg = 1 or lenght = 35;












