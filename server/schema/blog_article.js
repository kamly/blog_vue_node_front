/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blog_article', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    des: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    cover: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    copyright: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pv: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    state: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: '0'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'blog_article'
  });
};
