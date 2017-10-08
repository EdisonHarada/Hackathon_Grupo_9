app.controller('homeController', homeController)

function homeController($stateParams, $http) {
	var vm = this;
	
	vm.admin = true;
	
	var datasets = [
		{
			codProcesso: 1,
			data: [{
				fornecedor: 'Entregas Expressas ME',
				valorTotal: 500,
				centroCusto: 'Informática'
			}, {
				fornecedor: 'Entregas Expressas ME',
				valorTotal: 700,
				centroCusto: 'Recursos Humanos'
			}, {
				fornecedor: 'Entregas Expressas ME',
				valorTotal: 650,
				centroCusto: 'Financeiro'
			}, {
				fornecedor: 'Locações de Automóveis ME',
				valorTotal: 1200,
				centroCusto: 'Informática'
			}, {
				fornecedor: 'Locações de Automóveis ME',
				valorTotal: 300,
				centroCusto: 'Financeiro'
			}, {
				fornecedor: 'Locações de Automóveis ME',
				valorTotal: 2500,
				centroCusto: 'Logística'
			}, {
				fornecedor: 'Locações de Automóveis ME',
				valorTotal: 500,
				centroCusto: 'Comercial'
			}, {
				fornecedor: 'Locações de Automóveis ME',
				valorTotal: 900,
				centroCusto: 'Operacional'
			}, {
				fornecedor: 'Telecom ME',
				valorTotal: 5300,
				centroCusto: 'Marketing'
			}, {
				fornecedor: 'Telecom ME',
				valorTotal: 100,
				centroCusto: 'Informática'
			}, {
				fornecedor: 'Assessoria Jurídica Ltda',
				valorTotal: 300,
				centroCusto: 'Informática'
			}, {
				fornecedor: 'Assessoria Jurídica Ltda',
				valorTotal: 2000,
				centroCusto: 'Financeiro'
			}, {
				fornecedor: 'Assessoria Jurídica Ltda',
				valorTotal: 500,
				centroCusto: 'Administrativo'
			}, {
				fornecedor: 'Locações de Automóveis ME',
				valorTotal: 532,
				centroCusto: 'Informática'
			}, {
				fornecedor: 'Entregas Expressas ME',
				valorTotal: 1230,
				centroCusto: 'Administrativo'
			}]
		},
		{
			codProcesso: 2,
			data: [{
				fornecedor: 'Entregas Expressas ME',
				valorTotal: 125,
				centroCusto: 'Informática',
				vencimento: new Date(2016, 11, 13)
			}, {
				fornecedor: 'Entregas Expressas ME',
				valorTotal: 527,
				centroCusto: 'Recursos Humanos',
				vencimento: new Date(2017, 08, 01)
			}, {
				fornecedor: 'Entregas Expressas ME',
				valorTotal: 723,
				centroCusto: 'Financeiro',
				vencimento: new Date(2017, 07, 27)
			}, {
				fornecedor: 'Locações de Automóveis ME',
				valorTotal: 1152,
				centroCusto: 'Informática',
				vencimento: new Date(2017, 07, 24)
			}, {
				fornecedor: 'Locações de Automóveis ME',
				valorTotal: 276,
				centroCusto: 'Financeiro',
				vencimento: new Date(2017, 05, 01)
			}, {
				fornecedor: 'Locações de Automóveis ME',
				valorTotal: 2342,
				centroCusto: 'Logística',
				vencimento: new Date(2017, 06, 17)
			}, {
				fornecedor: 'Locações de Automóveis ME',
				valorTotal: 235,
				centroCusto: 'Comercial',
				vencimento: new Date(2016, 11, 23)
			}, {
				fornecedor: 'Locações de Automóveis ME',
				valorTotal: 875,
				centroCusto: 'Operacional',
				vencimento: new Date(2017, 08, 23)
			}, {
				fornecedor: 'Telecom ME',
				valorTotal: 5300,
				centroCusto: 'Marketing',
				vencimento: new Date(2017, 06, 14)
			}, {
				fornecedor: 'Telecom ME',
				valorTotal: 135,
				centroCusto: 'Informática',
				vencimento: new Date(2017, 07, 18)
			}, {
				fornecedor: 'Assessoria Jurídica Ltda',
				valorTotal: 275,
				centroCusto: 'Informática',
				vencimento: new Date(2017, 08, 15)
			}, {
				fornecedor: 'Assessoria Jurídica Ltda',
				valorTotal: 2123,
				centroCusto: 'Financeiro',
				vencimento: new Date(2017, 09, 03)
			}, {
				fornecedor: 'Assessoria Jurídica Ltda',
				valorTotal: 553,
				centroCusto: 'Administrativo',
				vencimento: new Date(2017, 04, 28)
			}, {
				fornecedor: 'Locações de Automóveis ME',
				valorTotal: 532,
				centroCusto: 'Informática',
				vencimento: new Date(2017, 06, 15)
			}, {
				fornecedor: 'Entregas Expressas ME',
				valorTotal: 1233,
				centroCusto: 'Administrativo',
				vencimento: new Date(2017, 07, 26)
			}, {
				fornecedor: 'Fornecedor 1',
				valorTotal: 543,
				centroCusto: 'Informática',
				vencimento: new Date(2017, 08, 27)
			}]
		}];
	
	var json = [{
		"numeroFluig": "10",
		"descricao": "Conta de Energia Elétrica",
		"dataVencimento": "17/10/2017",
		"valor": "12560,87",
		"aprovar": ""
	},{
		"numeroFluig": "11",
		"descricao": "Conta de Água",
		"dataVencimento": "17/10/2017",
		"valor": "3254,85",
		"aprovar": ""
	},{
		"numeroFluig": "12",
		"descricao": "Conta Telefonica",
		"dataVencimento": "17/10/2017",
		"valor": "325,10",
		"aprovar": ""
	},{
		"numeroFluig": "13",
		"descricao": "Conta Internet",
		"dataVencimento": "17/10/2017",
		"valor": "160,87",
		"aprovar": ""
	},{
		"numeroFluig": "14",
		"descricao": "Conta Outros",
		"dataVencimento": "17/10/2017",
		"valor": "7120,30",
		"aprovar": ""
	}];
	
	if((localStorage.getItem("cad") != "" && localStorage.getItem("cad") != null) || window.location.search.indexOf("id") > -1)
		inicializar(datasets);
	
	if(window.location.search.indexOf("id") == -1)
		carregaRelatorio(json);
	else
		$("#homeCLient").hide();
	
	jQuery(document).ready(function() {
		pageSetUp();
	});
}

//FUNCAO PARA CARREGAR O RELATÓRIO
var carregaRelatorio = function(data){
	
	//FUNCAO DATATABLE
	var oTable = $('#grid').DataTable({
		data: data,
		destroy: true,
		columns: [
			{ data: "numeroFluig"},
			{ data: "descricao"},
			{ data: "dataVencimento"},
			{ data: "valor"}
		],
		"aoColumnDefs": [{
		              "aTargets": [4],
		              "mData": "numeroFluig",
		              "className": "text-center",
		              "mRender": function (data, type, full) {
		            	  return '<a style="width: 100px;" onclick="functionAprovar('+data+', this)" class="btn btn-info" id="aprovar_'+ data + '">Aprovar</a>'+
		            	         '<a style="width: 100px; margin-left: 10px" onclick="functionReprovar('+data+', this)" class="btn btn-danger" id="reprovar_'+ data + '">Reprovar</a>';
		              }
		          }
	      ],
		"order": [ 0, "asc" ],
		//TRADUÇÃO DOS CAMPOS
		"language": {
			"sEmptyTable": "Nenhum registro encontrado",
			"sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
			"sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
			"sInfoFiltered": "(Filtrados de _MAX_ registros)",
			"sInfoPostFix": "",
			"sInfoThousands": ".",
			"sLengthMenu": "_MENU_ resultados por página",
			"sLoadingRecords": "Carregando...",
			"sProcessing": "Processando...",
			"sZeroRecords": "Nenhum registro encontrado",
			"sSearch": "Pesquisar",
			"oPaginate": {
				"sNext": "Próximo",
				"sPrevious": "Anterior",
				"sFirst": "Primeiro",
				"sLast": "Último"
			},
			"oAria": {
				"sSortAscending": ": Ordenar colunas de forma ascendente",
				"sSortDescending": ": Ordenar colunas de forma descendente"
			}
		}
	});
	
	//REMOVE O FILTRO
	$('#grid_filter').remove();
	 
}

//FUNCAO APROVAR
var functionAprovar = function(ev, sv){
	console.log('APROVAR --> ' + ev, sv)
	$(sv).parent().html('<label class="badge bg-color-greenLight">APROVADO</label>');
	
}

//FUNCAO REPROVAR
var functionReprovar = function(ev, sv){
	console.log('REPROVAR --> ' + ev, sv)
	$(sv).parent().html('<label class="badge bg-color-red">REPROVADO</label>');
}


var inicializar = function (datasets) {
	var auxLocalStorage  = "";
	
	if(window.location.search.indexOf("id") == -1)
		auxLocalStorage = JSON.parse(localStorage.getItem("cad"));
	else
		auxLocalStorage = JSON.parse("[{\"REGRAS\":[],\"REGRASID\":1,\"descricao\":\"Compras\",\"tipo\":\"GRAFICO\",\"modeloGrafico\":\"PIZZA\",\"processo\":1,\"campoDescritivo\":\"fornecedor\",\"campoValor\":\"valorTotal\",\"operacao\":\"SOMA\"}]");
	
	for (var i = 0; i < auxLocalStorage.length; i++) {
		let item = auxLocalStorage[i];

		let dataset = datasets.find(function (dataset) { return dataset.codProcesso == item.processo; });

		if(!dataset) continue;

		if(item.tipo == "APROVACAO"){
			continue;
		}

		if(item.tipo == "GRAFICO"){			
			if(item.modeloGrafico == "PIZZA"){
				generatePieChart(item.descricao, dataset.data, item.campoDescritivo, item.campoValor, item.operacao);
				continue;
			}
			
			//	Barra
			generateBarChart(item.descricao, dataset.data, item.campoDescritivo, item.campoValor, item.operacao);			
			continue;
		}

		if(item.tipo == "LISTA"){
			generateDataTable(item.descricao, dataset);
			continue;
		}
	}
}

var generateDataTable = function (nomeFluxo, data){
	var tabela = $("#tabela").text();
	var colunas = [];
	var colunasDataTable = [];
	for(var nomeColuna in data.data[0]){
		colunas.push({ nome: nomeColuna });
		colunasDataTable.push({ data: nomeColuna });
	}
	
	var conteudo = Mustache.to_html(tabela, {
		id: "lista" + nomeFluxo.replace(/ /g, ""),
		colunas:colunas
	});
	
	$("div.my-content").append(Mustache.to_html($("#widgetGrid").text(),{
		title: nomeFluxo,
		content: conteudo
	}));
	
	var oTable = $('#lista' + nomeFluxo.replace(/ /g, "")).DataTable({
		data: data.data,
		destroy: true,
		columns: colunasDataTable,
//		"aoColumnDefs": [{
//		              "aTargets": [4],
//		              "mData": "numeroFluig",
//		              "className": "text-center",
//		              "mRender": function (data, type, full) {
//		            	  return '<a style="width: 100px;" onclick="functionAprovar('+data+', this)" class="btn btn-info" id="aprovar_'+ data + '">Aprovar</a>'+
//		            	         '<a style="width: 100px; margin-left: 10px" onclick="functionReprovar('+data+', this)" class="btn btn-danger" id="reprovar_'+ data + '">Reprovar</a>';
//		              }
//		          }
//	      ],
		"order": [ 0, "asc" ],
		//TRADUÇÃO DOS CAMPOS
		"language": {
			"sEmptyTable": "Nenhum registro encontrado",
			"sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
			"sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
			"sInfoFiltered": "(Filtrados de _MAX_ registros)",
			"sInfoPostFix": "",
			"sInfoThousands": ".",
			"sLengthMenu": "_MENU_ resultados por página",
			"sLoadingRecords": "Carregando...",
			"sProcessing": "Processando...",
			"sZeroRecords": "Nenhum registro encontrado",
			"sSearch": "Pesquisar",
			"oPaginate": {
				"sNext": "Próximo",
				"sPrevious": "Anterior",
				"sFirst": "Primeiro",
				"sLast": "Último"
			},
			"oAria": {
				"sSortAscending": ": Ordenar colunas de forma ascendente",
				"sSortDescending": ": Ordenar colunas de forma descendente"
			}
		}
	});
	
	//REMOVE O FILTRO
	$('#' + nomeFluxo.replace(/ /g, "")).remove();
}

var generatePieChart = function (chartName, data, descriptionColumn, valueColumn, operation){
	var pieData = { datasets: [ {data:[], backgroundColor: [] }], labels: []};
	var finalData = [];
	for (let i = 0; i < data.length; i++) {
		let row = data[i];
		
		let description = row[descriptionColumn];
		let value = row[valueColumn];

		let dataInFinalData = finalData.find(function(data) { return data.description == description; });
		if(!dataInFinalData){
			finalData.push({
				description: description,
				value: (operation == "SOMA") ? value : 1
			});
		}
		else{
			dataInFinalData.value += (operation == "SOMA") ? value : 1;
		}
	}

	for (var i = 0; i < finalData.length; i++) {
		var element = finalData[i];
		
		pieData.datasets[0].backgroundColor.push(random_rgba());
		pieData.datasets[0].data.push(element.value);
		pieData.labels.push(element.description);
	}

	$("div.my-content").append(Mustache.to_html($("#widgetGrid").text(), {
		title: chartName,
		content: '<canvas id="' + chartName.replace(/ /g, "") + '"></div>'
	}));
	var ctx = document.getElementById(chartName.replace(/ /g, "")).getContext("2d");
	var myPieChart = new Chart(ctx,{
		type: 'pie',
		data: pieData,
		options: { responsive: true }
	});

	window.myPie = new Chart(ctx, myPieChart);
}

var generateBarChart = function (chartName, data, descriptionColumn, valueColumn, operation){
	var barData = { datasets: [ {data: [], label: "", backgroundColor: [] }], labels: []};
	var finalData = [];

	for (var i = 0; i < data.length; i++) {
		var row = data[i];
		
		var description = row[descriptionColumn];
		var value = row[valueColumn];

		var dataInFinalData = finalData.find(function(data) { return data.description == description; });
		if(!dataInFinalData){
			finalData.push({
				description: description,
				value: (operation == "SOMA") ? value : 1
			});
		}
		else{
			dataInFinalData.value += (operation == "SOMA") ? value : 1;
		}
	}

	barData.datasets[0].label = valueColumn;
	for (var i = 0; i < finalData.length; i++) {
		var element = finalData[i];
		
		barData.datasets[0].backgroundColor.push(random_rgba());
		barData.datasets[0].data.push(element.value);
		barData.labels.push(element.description);
	}

	
	
	$("div.my-content").append(Mustache.to_html($("#widgetGrid").text(), {
		title: chartName,
		content: '<canvas id="' + chartName.replace(/ /g, "") + '"></div>'
	}));

	var ctx = document.getElementById(chartName.replace(/ /g, ""));
	var myBarData = new Chart(ctx,{
		type: 'bar',
		data: barData,
		options: { responsive: true,  legend: {
            onClick: (e) => e.stopPropagation()
        }}
	});
	
	window.myBar = new Chart(ctx, myBarData);
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}