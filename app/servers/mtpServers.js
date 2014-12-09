angular.module('managementCenter.mtpServers', ['ngResource', 'managementCenter.config'])
.factory('monServerList', ['$resource', 'servicesConfig',
    function ($resource, servicesConfig) {
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