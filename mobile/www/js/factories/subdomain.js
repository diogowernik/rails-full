angular.module('brasilia.factories')

.factory('SubdomainResource', function($resource) {

  return $resource(AppSettings.baseApiUrl + "/subdomains.json", null , {
    'get':    {method:'GET'},
    'save':   {method:'POST'},
    'query':  {method:'GET', isArray:true},
    'remove': {method:'DELETE'},
    'delete': {method:'DELETE'},
    'update': {method:'PUT'}
  });

});
