require('dotenv').config()

const {
  PORT,
  MONGO_URI,
  REDIS_USERNAME,
  REDIS_PASSWORD,
  REDIS_HOST,
  REDIS_PORT
} = process.env

module.exports = {
  PORT,
  MONGO_URI,
  REDIS_USERNAME,
  REDIS_PASSWORD,
  REDIS_HOST,
  REDIS_PORT
}