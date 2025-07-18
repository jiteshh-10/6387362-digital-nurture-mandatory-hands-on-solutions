CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
	FOR RECORD IN (
		SELECT CUSTOMERID FROM CUSTOMERS
		FOR UPDATE
	) LOOP
		UPDATE CUSTOMERS
		SET BALANCE = BALANCE + BALANCE * 0.01
		WHERE CUSTOMERID = RECORD.CUSTOMERID;
	END LOOP;

	COMMIT;
END;
/

BEGIN
	ProcessMonthlyInterest;
END;