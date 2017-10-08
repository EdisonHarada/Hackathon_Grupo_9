'use strict'

app.controller('gerarLinkController', gerarLinkController)

function gerarLinkController($stateParams, $http, $timeout, $state, $scope) {

    let vm = this

    let LINKS = localStorage.getItem('LINKS')

    if (LINKS) {
        vm.LINKS = JSON.parse(LINKS)
    } else {
        vm.LINKS = []
    }

    vm.cad = {}
    
    vm.gerarLink = function() {
        let guid = vm.gerarGUID()
        vm.cad.guid = "http://fluig09.hackathon2017.fluig.io:8080/portal/1/hackathonpublico?id=" + guid;
        let ax = angular.copy(vm.cad)
        vm.LINKS.push(ax)
        localStorage.setItem('LINKS', JSON.stringify(vm.LINKS));
    }

    vm.removerLink = function(link) {

        if (confirm('Deseja remover?')){
            let ax = []
            
            vm.LINKS.forEach(function(value, index){
                if ( value.guid != link.guid ) {
                    ax.push(value)
                }
            })
    
            vm.LINKS = ax
            localStorage.setItem('LINKS', JSON.stringify(ax));
        }

    }

    vm.gerarGUID = function() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

}