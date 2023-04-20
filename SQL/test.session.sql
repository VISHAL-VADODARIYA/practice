---@block
-- Write a SQL statement to create a table named countries including columns country_id, country_name and region_id and make sure that no countries except Italy, India and China will be entered in the table. and combination of columns country_id and region_id will be unique.


--@block
CREATE table countries (
    country_id INT UNIQUE,
    country_name VARCHAR(255),
    region_id INT UNIQUE,                                                          
    CONSTRAINT country_names CHECK(country_name IN ('India', 'Italy', 'China'))
);


--@block
INSERT INTO countries
VALUES(4, 'gkjsdfsfsdfsfsfsdf', 4);



--@block
SELECT *
FROM countries;


--@block
DROP TABLE countries;