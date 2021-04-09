import { hash } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

import createConnection from "../index";

(async () => {
  const connection = await createConnection();

  const id = uuidv4();
  const password = await hash("admin", 8);

  await connection.query(`
    INSERT INTO users(id, name, email, password, admin, driver_license, created_at, avatar)
    VALUES('${id}', 'admin', 'admin@rentx.com', '${password}', true, 'XXXXXX', 'now()', 'null')
  `);
  await connection.close();

  console.log("Admin user successfully created");
})();
