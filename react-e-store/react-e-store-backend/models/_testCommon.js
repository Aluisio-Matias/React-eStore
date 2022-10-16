const bcrypt = require("bcrypt");

const db = require("../db.js");
const { BCRYPT_WORK_FACTOR } = require("../config");


async function commonBeforeAll() {
    // noinspection SqlWithoutWhere
    await db.query("DELETE FROM users");

    await db.query(`
        INSERT INTO users(email,
                          username,
                          password,
                          first_name,
                          last_name,
                          phone,
                          address1,
                          city,
                          state,
                          zipcode)
        VALUES ('u1@email.com', 'u1', $1, 'U1F', 'U1L', 'U1P', 'U1A', 'U1C', 'U1S', '94101'),
               ('u2@email.com', 'u2', $2, 'U2F', 'U2L', 'U2P', 'U2A', 'U2C', 'U2S', '94102')
        RETURNING username`,
        [
            await bcrypt.hash("password1", BCRYPT_WORK_FACTOR),
            await bcrypt.hash("password2", BCRYPT_WORK_FACTOR),
        ]);

}

async function commonBeforeEach() {
    await db.query("BEGIN");
}

async function commonAfterEach() {
    await db.query("ROLLBACK");
}

async function commonAfterAll() {
    await db.end();
}


module.exports = {
    commonBeforeAll,
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll,
};