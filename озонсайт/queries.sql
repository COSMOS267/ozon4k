
-- create
CREATE TABLE PROD (
  empId INTEGER PRIMARY KEY,
  id_FRID INTEGER foreign KEY,
  id_custmer INTEGER foreign KEY,
  id_pick-up_point INTEGER foreign KEY;
);
-- create
CREATE TABLE pick-up_point  (
  empId INTEGER PRIMARY KEY,
  id_pick-up_point INTEGER foreign KEY,
  country text not,
  city INTEGER foreign KEY,
  adress INTEGER foreign KEY,
  Phon INTEGER foreign KEY;
);
-- create
CREATE TABLE FRID  (
  empId INTEGER PRIMARY KEY,
  id_FRID INTEGER foreign KEY,
  id_Number_FRID INTEGER foreign KEY ,
  id_PRIZNAK_FRID INTEGER foreign KEY;
);
-- create
CREATE TABLE custmer  (
  empId INTEGER PRIMARY KEY,
  id_name INTEGER foreign KEY,
  id_adrs INTEGER foreign KEY ,
  id_email INTEGER foreign KEY,
  id_TPhon INTEGER foreign KEY;
  );

-- insert
INSERT INTO PROD VALUES (0001, 0001, 0001);
INSERT INTO pick-up_point VALUES (0001, 0001,0001,0001 );
INSERT INTO FRID (0001, 0001, 0001, 0001);
INSERT INTO custmer VALUES (0001, 0001, 0001, 0001);

-- fetch 
SELECT * FROM EMPLOYEE WHERE dept = 'Sales';
