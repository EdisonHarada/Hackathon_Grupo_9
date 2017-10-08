'use strict'

app.controller('cadastroIndicadoresController', cadastroIndicadoresController)

function cadastroIndicadoresController($stateParams, $http, $timeout, $state, $scope) {

	let vm = this

	// Objeto de cadastro
	vm.cad = {}
	vm.cad.REGRAS = []

	vm.TIPOS = [
		{ id: 'GRAFICO', label: 'Gráfico' },
		{ id: 'APROVACAO', label: 'Aprovação' },
		{ id: 'LISTA', label: 'Lista' }
	]

	vm.LOGICAAPROVACAO = [
		{ id: 'MaiorOuIgual', label: 'Maior ou Igual' },
		{ id: 'Maior',        label: 'Maior'          },
		{ id: 'Igual',        label: 'Igual'          },
		{ id: 'Diferente',    label: 'Diferente'      },
		{ id: 'Menor',        label: 'Menor'          },
		{ id: 'MenorOuIgual', label: 'Menor ou Igual' }
	]

	vm.MODELOSGRAFICO = [
		{ id: 'PIZZA', label: 'Pizza' },
		{ id: 'BARRA', label: 'Barra' }
	]

	vm.PROCESSOS = [
		{ id: 1, label: 'Aprovaçao de Pedido de Compras' },
		{ id: 2, label: 'Aprovaçao de Contas a Pagar' }
	]

	vm.CAMPOSPROCESS = [
		{ 
			codProcesso: 1,
			fields: ['fornecedor', 'valorTotal', 'centroCusto']
		},
		{ 
			codProcesso: 2,
			fields: ['fornecedor', 'valorTotal', 'centroCusto', 'vencimento']
		}
	]

	vm.OPERACOES = [
		{ id: 'SOMA', label: 'Soma' },
		{ id: 'CONTADOR', label: 'Contador' }
	]	

	// busca o campo de um processo selecionado
	vm.getFields = function() {
		let codProcesso = vm.cad.processo
		vm.CAMPOSPROCESS.forEach(function(value, index) {
			if ( codProcesso == value.codProcesso ) {
				vm.CAMPOSFORMULARIO = value.fields
			}
		})
	}

	// contador para insrir as regras
	vm.cad.REGRASID = 1
	// funcao para adicinar regras
	vm.adicionarRegra = function() {

		let aux = {
			id: vm.cad.REGRASID,
			campoFormulario: '',
			logicaAprovacao: '',
			parametro: ''
		}
		vm.cad.REGRASID++
		vm.cad.REGRAS.push(aux)
	}

	// remover uma regra
	vm.removerRegra = function(id) {
		let auxArr = []
		vm.cad.REGRAS.forEach(function(value,index){
			if ( id != value.id ) {
				auxArr.push(value)
			}
		})
		vm.cad.REGRAS = auxArr
	}

	// gravar um indicador
	vm.gravarIndicador = function() {
		var strLocalStorage = localStorage.getItem('cad')

		if ( strLocalStorage ) {
			let axCad = JSON.parse(localStorage.getItem('cad'))
			axCad.push(vm.cad)
			localStorage.setItem('cad', JSON.stringify(axCad))
		} else {
			let axCad = []
			axCad.push(vm.cad)
			localStorage.setItem('cad', JSON.stringify(axCad))
		}
		
		$state.go('indicadores')
	}

	vm.listarIndicadores = function() {
		var strLocalStorage = localStorage.getItem('cad')
		if ( strLocalStorage ) {
			vm.INDICADORES = JSON.parse(localStorage.getItem('cad'))
		}
	}

	vm.apagarIndicador = function(indicador) {

		if ( confirm('Atenção\nDeseja realmente remover esse indicador?') ) {
			let aux = []
			vm.INDICADORES.forEach(function(value, index){
				if ( value.descricao != indicador.descricao ) {
					aux.push(value)
				}
			})
			vm.INDICADORES = aux

			localStorage.setItem('cad', JSON.stringify(vm.INDICADORES))
		}


	}

}