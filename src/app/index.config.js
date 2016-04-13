(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;


    // setup icons
    // $mdIconProvider.defaultIconSet(url, [viewBoxSize]);

    // theming
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('indigo')
      .warnPalette('red');

    $mdThemingProvider.theme('default-side-menu', 'default')
      .backgroundPalette('blue-grey', {
        'default': '50'
      });

    $mdThemingProvider.theme('account')
      .primaryPalette('blue', {
        'default': '700'
      });

    $mdThemingProvider.theme('account-side-menu', 'account')
      .backgroundPalette('blue-grey', {
        'default': '50'
      });

    $mdThemingProvider.theme('teams')
      .primaryPalette('cyan', {
        'default': '700'
      });

    $mdThemingProvider.theme('teams-side-menu', 'teams')
      .backgroundPalette('blue-grey', {
        'default': '50'
      });

    $mdThemingProvider.theme('white-bg', 'default')
      .backgroundPalette('blue-grey', {
        "default": "50"
      });

    $mdThemingProvider.theme('indigo-bg', 'default')
      .backgroundPalette('indigo');

    $mdThemingProvider.alwaysWatchTheme(true);
  }

})();
