import { createPool, PoolOptions } from 'mysql2/promise'
import 'dotenv/config'

const TEST_70_DB_USER = process.env.DB_TEST_70_USER as string
const TEST_70_DB_PASSWORD = process.env.DB_TEST_70_PASSWORD
const TEST_70_DB_HOST = process.env.DB_TEST_70_HOST
const TEST_70_DB_PORT = process.env.DB_TEST_70_PORT as string
const TEST_70_DB_DATABASE = process.env.DB_TEST_70_DATABASE as string

const config: PoolOptions = {
  host: TEST_70_DB_HOST,
  port: parseInt(TEST_70_DB_PORT),
  user: TEST_70_DB_USER,
  password: TEST_70_DB_PASSWORD,
  database: TEST_70_DB_DATABASE,
  multipleStatements: true,
  timezone: '-05:00',
}

const pool_test = createPool(config)

export { pool_test }