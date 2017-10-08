'use strict'

const app = angular.module('josiSystem', ['ui.router', 'ngSanitize', 'ui.select', 'gridshore.c3js.chart'])

app.config(myRoutes)

function myRoutes($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/home');
	
	// roteamento
	const sp = $stateProvider
	
	sp.state('home', {
		url: '/home',
		templateUrl: '/wcm_hackathon/resources/js/app/home/views/home.html',
		controller: 'homeController',
		controllerAs: 'vm'
	})
	
	.state('cadastro-indicadores', {
		url: '/cadastro-indicadores',
		templateUrl: '/wcm_hackathon/resources/js/app/cadastro-indicadores/views/cadastro-indicadores.html',
		controller: 'cadastroIndicadoresController',
		controllerAs: 'vm'
	})

	.state('indicadores', {
		url: '/indicadores',
		templateUrl: '/wcm_hackathon/resources/js/app/cadastro-indicadores/views/indicadores.html',
		controller: 'cadastroIndicadoresController',
		controllerAs: 'vm'
	})

	.state('gerar-link-publico', {
		url: '/gerar-link-publico',
		templateUrl: '/wcm_hackathon/resources/js/app/gerar-link-publico/views/gerar-link.html',
		controller: 'gerarLinkController',
		controllerAs: 'vm'
	})
}