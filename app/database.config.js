
const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "2080",
  database: "users",
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  synchronize: true,
  logging: false,
}); 

export default AppDataSource
