'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-list', {
        url: '/usuarios-list',
        template: '<usuarios-list></usuarios-list>'
      });
  });
