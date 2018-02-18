/**
 * Created by kamlyli on 2017/8/20.
 */

const Sequelize = require('sequelize')
const config = require('./config')

const Blog = new Sequelize(`mysql://${config.mysql_user}:${config.mysql_password}@${config.mysql_ip}/${config.mysql_db}`, {
  define: {
    timestamps: false
  }
})

module.exports = {
  Blog
}
