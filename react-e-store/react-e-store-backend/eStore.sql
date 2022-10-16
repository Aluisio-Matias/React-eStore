\echo 'Delete and recreate e_store db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE e_store;
CREATE DATABASE e_store;
\connect e_store

\i eStore-schema.sql
\i eStore-seed.sql

\echo 'Delete and recreate e_store_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE e_store_test;
CREATE DATABASE e_store_test;
\connect e_store_test

\i eStore-schema.sql
