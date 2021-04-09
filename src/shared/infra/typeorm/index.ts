import { Connection, createConnection, getConnectionOptions } from "typeorm";

// createConnection();

export default async (host = "rentxDB"): Promise<Connection> => {
  const connectionOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(connectionOptions, {
      host,
    })
  );
};
