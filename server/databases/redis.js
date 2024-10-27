const config = require('../utils/config')
const logger = require('../utils/logger')

const client = require('redis').createClient({
  url: `rediss://${config.REDIS_USERNAME}:${config.REDIS_PASSWORD}@${config.REDIS_HOST}:${config.REDIS_PORT}`
})

const connectToRedis = () => {
  client.connect()
    .then(() => logger.info('Connected to Redis'))
    .catch((error) => logger.error('error:', error.message))
}

module.exports = {
  connectToRedis,
  client,
}