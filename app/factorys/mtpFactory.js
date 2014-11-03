var servicesConfig = [
    {
        name: 'WXMIS007',
        url: 'http://localhost/XXX'
    },
    {
        name: 'WXMIS008',
        url: ''
    }
];

angular.module('myApp.mtpFactory', ['ngResource'])
.factory('monServers', ['$resource',
    function ($resource) {
        var services = [];
        servicesConfig.forEach(function (service) {
            services.push({
                name: service.name,
                resource: $resource(service.url, null, {
                    'get': {
                        isArray: true
                    }
                })
            });
        });
        return services;
}]);