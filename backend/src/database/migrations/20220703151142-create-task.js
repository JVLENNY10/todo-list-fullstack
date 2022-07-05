'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
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
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};
