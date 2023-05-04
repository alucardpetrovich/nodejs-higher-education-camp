import { DataSource, DataSourceOptions } from "typeorm";

let connection: DataSource;

export async function createConnection(
  config: DataSourceOptions
): Promise<DataSource> {
  if (connection) {
    return connection;
  }

  connection = new DataSource(config);
  await connection.initialize();

  return connection;
}

export function getConnection(): DataSource {
  return connection;
}
