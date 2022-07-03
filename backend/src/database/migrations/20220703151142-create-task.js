'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task: {
        type: Sequelize.STRING
      },
      inProgress: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};
