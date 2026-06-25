-- Scenario 1: Apply 1% Interest Rate Discount for Customers Above 60
DECLARE
BEGIN
    FOR cust IN (
        SELECT CustomerID
        FROM Customers
        WHERE EXTRACT(YEAR FROM SYSDATE) - EXTRACT(YEAR FROM DOB) > 60
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = cust.CustomerID;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Interest rate discount applied successfully.');
END;
/

select * from loans;

-- Scenario 2: Promote Customers to VIP Status
ALTER TABLE Customers
ADD IsVIP VARCHAR2(5) default 'FALSE';

DECLARE
BEGIN
    FOR cust IN (
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = cust.CustomerID;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('VIP status updated successfully.');
END;
/

select * from customers;


-- Scenario 3: Send Reminders for Loans Due Within the Next 30 Days
SET SERVEROUTPUT ON;

DECLARE
BEGIN
    FOR loan_rec IN (
        SELECT c.CustomerID,
               c.Name,
               l.LoanID,
               l.EndDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '
            || loan_rec.Name
            || ' (ID: ' || loan_rec.CustomerID || ')'
            || ' has Loan '
            || loan_rec.LoanID
            || ' due on '
            || TO_CHAR(loan_rec.EndDate, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/