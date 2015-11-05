/*
    script file for the index.html page
*/

angular.module('ContactsApp', ['ui.router', 'angular-uuid', 'LocalStorageModule'])
    .constant('storageKey', 'contacts-list')
    .factory('contacts', function(localStorageService) {
        return [
            {
                id: 'temp-delete-later',
                fname: 'Fred',
                lname: 'Flintstone',
                phone: '206-555-1212',
                dob: '1/1/1900'
            }
        ];
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('list', {
                url: '/contacts',
                templateUrl: 'views/contacts-list.html',
                controller: 'ContactsController'
            })
            .state('detail', {
                url: '/contacts/:id',
                templateUrl: 'views/contact-detail.html',
                controller: 'ContactDetailController'
            })
            .state('edit', {
                url: '/contacts/:id/edit',
                templateUrl: 'views/edit-contact.html',
                controller: 'EditContactController'
            });

        $urlRouterProvider.otherwise('/contacts');
    })
    .controller('ContactsController', function($scope, contacts) {
        $scope.contacts = contacts;
    })
    .controller('ContactDetailController', function($scope, $stateParams, $state, contacts) {
        $scope.contact = contacts.find(function(contact) {
            return contact.id === $stateParams.id;
        });

    })
    .controller('EditContactController', function($scope, $stateParams, $state, contacts) {
        //find the contact using the id from the URL (available from $stateParams)
        var existingContact = contacts.find(function(contact) {
            return contact.id === $stateParams.id;
        });

        //make a copy of it for editing
        $scope.contact = angular.copy(existingContact);

        $scope.saveContact = function() {
            //copy our edits back to the original contact
            angular.copy($scope.contact, existingContact);

            //use $state to go back to the list view
            $state.go('list');
        };
    });
