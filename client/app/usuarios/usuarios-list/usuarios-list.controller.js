'use strict';

(function(){

class UsuariosListComponent {
  constructor(usuariosService) {
    this.usuariosService = usuariosService;
    this.usario = {

    };
  }

  createUser(){
    this.usuariosService.save(this.usuario).$promise
    .then(response =>{
      console.log('El usuario se registro correctamente', response);
    })
    .catch(err =>{
      console.log('Error al registrar el usuario', err);
    });
  }
}
UsuariosListComponent.$inject = ['usuariosService'];
angular.module('videoClubApp')
  .component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent,
    controllerAs: 'vm'
  });

})();
