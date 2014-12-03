var servicesConfig = [
    {
        name: 'WXMIS007',
        url: 'http://localhost/WEB.MonitorService/MonitorService.svc/XMLService/AppList'
    },
    {
        name: 'WXMIS008',
        url: ''
    }
];

angular.module('managementCenter.mtpServers', ['ngResource'])
.factory('monServerList', ['$resource',
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