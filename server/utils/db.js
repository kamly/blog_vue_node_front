/**
 * Created by kamlyli on 2017/8/20.
 */

const Sequelize = require('sequelize')
const config = require('../config/config')

// todo time out
const Blog = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options,
)


module.exports = {
  Blog
}
