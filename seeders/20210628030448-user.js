'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   queryInterface.bulkInsert(
     'Users',
     [
       {
         fullName: 'Leonardo',
         email: 'leo@test.com',
         senha: '1234',
         endereco: 'rua1',
         idade: '2',
         telefone: '1212121212'
       },
       {
         fullName: 'Leticia',
         email: 'leticia@test.com',
         senha: '4321',
         endereco: 'rua2',
         idade: '3',
         telefone: '13131313'
       },
       {
        fullName: 'AaAA',
        email: 'aaaa@test.com',
        senha: '4321',
        endereco: 'rua3',
        idade: '03',
        telefone: '131313883'
      },
     ],
     {}
   )
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
