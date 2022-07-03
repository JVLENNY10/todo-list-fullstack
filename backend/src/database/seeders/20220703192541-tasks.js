'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          task: 'Treinar (Academia)',
          inProgress: true
        },
        {
          task: 'Límpar a casa',
          inProgress: true
        },
        {
          task: 'Levar o lixo para fora',
          inProgress: false
        },
        {
          task: 'Lavar o carro',
          inProgress: false
        },
        {
          task: 'Estudar',
          inProgress: true
        },
      ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
