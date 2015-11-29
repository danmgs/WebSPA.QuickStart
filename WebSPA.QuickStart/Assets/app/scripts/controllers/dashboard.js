'use strict';

angular.module('myDashboardModule', ['adf', 'adf.structures.base', 'adf.widget.clock', 'adf.widget.linklist', 'LocalStorageModule'])
  .config(function (dashboardProvider) {

      //dashboardProvider
      //  .structure('4-8', {
      //      rows: [{
      //          columns: [{
      //              styleClass: 'col-md-2'
      //          }, {
      //              styleClass: 'col-md-10'
      //          }]
      //      }]
      //  });
  })
.controller('DashboardCtrl', function ($scope, localStorageService) {

    var name = 'My_Dashboard_Name';
    var model = localStorageService.get(name);
    if (!model) {
        // set default model for demo purposes
        model = {
            title: "My Dashboard Name" + new Date(),
            structure: "4-8"
            //,
            //rows: [{
            //    columns: [{
            //        styleclass: "col-md-4",
            //        widgets: [{
            //            type: "linklist",
            //            config: {
            //                links: [{
            //                    title: "scm-manager",
            //                    href: "http://www.scm-manager.org"
            //                }, {
            //                    title: "github",
            //                    href: "https://github.com"
            //                }, {
            //                    title: "bitbucket",
            //                    href: "https://bitbucket.org"
            //                }, {
            //                    title: "stackoverflow",
            //                    href: "http://stackoverflow.com"
            //                }]
            //            },
            //            title: "links"
            //        }, {
            //            type: "weather",
            //            config: {
            //                location: "hildesheim"
            //            },
            //            title: "weather hildesheim"
            //        }, {
            //            type: "weather",
            //            config: {
            //                location: "edinburgh"
            //            },
            //            title: "weather"
            //        }, {
            //            type: "weather",
            //            config: {
            //                location: "dublin,ie"
            //            },
            //            title: "weather"
            //        }]
            //    }, {
            //        styleclass: "col-md-8",
            //        widgets: [{
            //            type: "randommsg",
            //            config: {},
            //            title: "douglas adams"
            //        }, {
            //            type: "markdown",
            //            config: {
            //                content: "![scm-manager logo](https://bitbucket.org/sdorra/scm-manager/wiki/resources/scm-manager_logo.jpg)\n\nthe easiest way to share and manage your git, mercurial and subversion repositories over http.\n\n* very easy installation\n* no need to hack configuration files, scm-manager is completely configureable from its web-interface\n* no apache and no database installation is required\n* central user, group and permission management\n* out of the box support for git, mercurial and subversion\n* full restful web service api (json and xml)\n* rich user interface\n* simple plugin api\n* useful plugins available ( f.e. ldap-, activedirectory-, pam-authentication)\n* licensed under the bsd-license"
            //            },
            //            title: "markdown"
            //        }]
            //    }]
            //}]
        };
    }
    $scope.name = name;
    $scope.model = model;
    $scope.collapsible = true;
    $scope.maximizable = true;

    $scope.$on('adfdashboardchanged', function (event, name, model) {
        localStorageService.set(name, model);
    });
});