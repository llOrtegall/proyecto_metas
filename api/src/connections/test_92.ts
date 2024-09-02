import { PoolConnection } from 'mysql2/promise'
import 'dotenv/config'

const TEST_70_DB_USER = process.env.DB_TEST_70_USER as string
const TEST_70_DB_PASSWORD = process.env.DB_TEST_70_PASSWORD
const TEST_70_DB_HOST = process.env.DB_TEST_70_HOST
const TEST_70_DB_PORT = process.env.DB_TEST_70_PORT as string
const TEST_70_DB_DATABASE = process.env.DB_TEST_70_DATABASE as string

