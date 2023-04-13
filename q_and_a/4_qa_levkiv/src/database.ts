import { DataSource } from "typeorm";

let connection: DataSource;

export async function createConnection(url: string): Promise<DataSource> {
  if (connection) {
    return connection;
  }

  connection = new DataSource({
    url,
    type: "postgres",
    entities: ["**/*.entity.ts"],
  });
  await connection.initialize();

  return connection;
}

export function getConnection(): DataSource {
  return connection;
}
