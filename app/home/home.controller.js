export default function HomeController(app) {
    angular.module(app).controller('HomeController', function() {
        function init() {
            console.log('carregando homecontroller');
        }
        init();
    })
}