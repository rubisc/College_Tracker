angular
  .module('college_tracker', ['ui.router'])
  .config(CollegeRouter)

CollegeRouter.$inject = ['$stateProvider', '$urlRouterProvider']
function CollegeRouter($stateProvider, $urlRouterProvider){

  // Front end routes using angular ui.router:
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'colleges_templates/index.html'
    // controller: 'CollegesController',
    // controllerAs: 'CollegesCtrl'
  })
  .state('signin', {
    url: '/signin',
    templateUrl: 'signin.html',
  })
  .state('show', {
    url: '/colleges/:id',
    templateUrl: 'colleges_templates/show.html'
    // controller: 'CollegesController',
    // controllerAs: 'CollegesCtrl'
  })
  .state('collegeList', {
    url: '/students/:id',
    templateUrl: 'students_templates/show.html'
  })

  // Default (fallback) route:
  $urlRouterProvider.otherwise('/')

}
