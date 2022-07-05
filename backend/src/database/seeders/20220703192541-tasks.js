'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          task: 'Treinar (Academia)',
          progress: 'pendente'
        },
        {
          task: 'Límpar a casa',
          progress: 'pendente'
        },
        {
          task: 'Levar o lixo para fora',
          progress: 'Em andamento'
        },
        {
          task: 'Lavar o carro',
          progress: 'Em andamento'
        },
        {
          task: 'Estudar',
          progress: 'pendente'
        },
      ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
