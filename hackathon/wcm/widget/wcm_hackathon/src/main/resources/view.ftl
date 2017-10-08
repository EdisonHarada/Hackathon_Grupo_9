<div data-ng-app="josiSystem" id="wcm_hackathon_${instanceId}" class="super-widget wcm-widget-class">

	<style>
		.input-group-addon{
			cursor: pointer;
		}
		
		.table-striped tbody tr:nth-child(even) td {
			background: none !important;
		}
		
		.errorSpan{
			font-size: smaller !important;
			color: #D20505 !important;
		}
	</style>
	
	<link rel="stylesheet" href="/wcm_hackathon/resources/css/wcm_hackathon.css" />
	<script src="/wcm_hackathon/resources/js/wcm_hackathon.js"></script>
		<script src="/wcm_hackathon/resources/js/app/libs/js/plugin/moment/moment.min.js"></script>	
		<script src="/wcm_hackathon/resources/js/app/libs/js/plugin/chartjs/chart.min.js"></script>

		<title> Hackathon V2 </title>
		<meta name="description" content="">
		<meta name="author" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
					
		<!-- Basic Styles -->
		<link rel="stylesheet" type="text/css" media="screen" href="/wcm_hackathon/resources/js/app/libs/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" media="screen" href="/wcm_hackathon/resources/js/app/libs/css/font-awesome.min.css">

		<!-- SmartAdmin Styles : Caution! DO NOT change the order -->
		<link rel="stylesheet" type="text/css" media="screen" href="/wcm_hackathon/resources/js/app/libs/css/smartadmin-production-plugins.min.css">
		<link rel="stylesheet" type="text/css" media="screen" href="/wcm_hackathon/resources/js/app/libs/css/smartadmin-production.min.css">
		<link rel="stylesheet" type="text/css" media="screen" href="/wcm_hackathon/resources/js/app/libs/css/smartadmin-skins.min.css">
		
		<link rel="stylesheet" type="text/css" media="screen" href="/wcm_hackathon/resources/js/app/libs/js/datatables/datatables.min.css">
		
		<!-- SmartAdmin RTL Support -->
		<link rel="stylesheet" type="text/css" media="screen" href="/wcm_hackathon/resources/js/app/libs/css/smartadmin-rtl.min.css">
		
		<!-- FAVICONS -->
		<link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
		<link rel="icon" href="img/favicon/favicon.ico" type="image/x-icon">
		
		<!-- GOOGLE FONT -->
		<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,700">
		
		<link rel="apple-touch-icon" href="img/splash/sptouch-icon-iphone.png">
		<link rel="apple-touch-icon" sizes="76x76" href="img/splash/touch-icon-ipad.png">
		<link rel="apple-touch-icon" sizes="120x120" href="img/splash/touch-icon-iphone-retina.png">
		<link rel="apple-touch-icon" sizes="152x152" href="img/splash/touch-icon-ipad-retina.png">

		<!-- iOS web-app metas : hides Safari UI Components and  Changes Status Bar Appearance -->
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">

		<!-- Startup image for web apps -->
		<link rel="apple-touch-startup-image" href="img/splash/ipad-landscape.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape)">
		<link rel="apple-touch-startup-image" href="img/splash/ipad-portrait.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)">
		<link rel="apple-touch-startup-image" href="img/splash/iphone.png" media="screen and (max-device-width: 320px)">
		
		<!-- iCheck -->
		<link href="/wcm_hackathon/resources/js/app/libs/css/icheck/custom.css" rel="stylesheet">
		
		<!-- alertify -->
		<link href="/wcm_hackathon/resources/js/app/libs/css/alertifycss/alertify.css" rel="stylesheet">
    	<link href="/wcm_hackathon/resources/js/app/libs/css/alertifycss/themes/semantic.min.css" rel="stylesheet">
    	
    	<!-- select2 -->
		<link href="/wcm_hackathon/resources/js/app/libs/css/select2/select2.min.css" rel="stylesheet">
		
		<!-- c3js -->
		<link href="/wcm_hackathon/resources/js/app/libs/css/c3/c3.min.css" rel="stylesheet">
		
		<!-- jstree -->
		<link href="/wcm_hackathon/resources/js/app/libs/css/jstree/style.min.css" rel="stylesheet">
		
    	<body class="desktop-detected pace-done smart-style-6 mobile-view-activated">

			<!-- HEADER -->
			<header id="header">
				<div id="logo-group">
					<!-- PLACE YOUR LOGO HERE -->
					<span id="logo">
						<img class="img-responsive" style="width: 12%;" src="/wcm_hackathon/resources/images/logotipo.png" alt="rtAdmin">
					</span>
				</div>
	
				<!-- projects dropdown -->
				<div class="project-context hidden-xs">
				</div>
				<!-- end projects dropdown -->
	
				<!-- pulled right: nav area -->
				
				
				
				
				
				<div class="pull-right">
				
					<!-- collapse menu button -->
					<div id="hide-menu" class="btn-header pull-right">
						<span> <a href="javascript:void(0);" data-action="toggleMenu" title="Collapse Menu"><i class="fa fa-reorder"></i></a> </span>
					</div>
					<!-- end collapse menu -->
				
					<!-- fullscreen button -->
					<div id="fullscreen" class="btn-header transparent pull-right">
						<span> <a href="javascript:void(0);" data-action="launchFullscreen" title="Full Screen"><i class="fa fa-arrows-alt"></i></a> </span>
					</div>
					<!-- end fullscreen button -->
					
					<!-- 
					<button  id="rect">Gravar</button>
					 -->
					
					
					
					<!-- #Voice Command: Start Speech -->
					<div id="speech-btn" class="btn-header transparent pull-right hidden-sm hidden-xs">
						<div> 
							<a onclick="functionVoz()"  href="javascript:void(0)" title="Utilizar microfone" ><i class="fa fa-microphone"></i></a> 
							
						</div>
					</div>
					
					
					
				</div>	
				<!-- end pulled right: nav area -->
			</header>
			<!-- END HEADER -->
	
			<!-- Left panel : Navigation area -->
			<!-- Note: This width of the aside area can be 
				adjusted through LESS variables -->
			<aside id="left-panel">
	
				<nav>
	
					<ul>
						<li ng-class="active">
							<a href="#!/home">
								<i class="fa fa-lg fa-fw fa-home"></i>
								<span class="menu-item-parent">Dashboard
								</span>
							</a>
						</li>
						
						<li id="menu-indicadores">
							<a  href="#!/indicadores">
								<i class="fa fa-lg fa-fw fa-pencil-square-o"></i>
								<span class="menu-item-parent">Cadastro de Indicadores
								</span>
							</a>
						</li>
						
						<li id="menu-link">
							<a href="#!/gerar-link-publico">
								<i class="fa fa-lg fa-fw fa-link"></i>
								<span class="menu-item-parent"> Gerar Link Público
								</span>
							</a>
						</li>
						
					</ul>
				</nav>
				<span class="minifyme" data-action="minifyMenu">
					<i class="fa fa-arrow-circle-left hit"></i>
				</span>
	
			</aside>
			<!-- END NAVIGATION -->
	
	
			<!-- MAIN PANEL -->
			<div id="main" role="main">
	
				<!-- RIBBON -->
				<div id="ribbon">
	
					<span class="ribbon-button-alignment">
						<span id="refresh" class="btn btn-ribbon"
							data-action="resetWidgets" data-title="refresh"
							rel="tooltip" data-placement="bottom"
							data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings."
							data-html="true">
							<i class="fa fa-refresh"></i>
						</span>
					</span>
				</div>
				<!-- END RIBBON -->
				
				
				
				
				
				
	
				<!-- MAIN CONTENT -->
				<div id="content">
					<div ui-view></div>
				</div>
				<!-- END MAIN CONTENT -->
			</div>
			<!-- END MAIN PANEL -->
	
			<!-- DATASETS -->
			<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
			
			<!-- AngularJS -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/libs/jquery-2.1.1.min.js"></script>
			<script src="/wcm_hackathon/resources/js/app/libs/js/angularjs/angular.min.js"></script>
			<script src="/wcm_hackathon/resources/js/app/libs/js/angular-ui-router/ui-router.js"></script>
			<!--<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-sanitize.js"></script> -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/angularjs/angular-sanitize.js"></script>
	
			<script src="/wcm_hackathon/resources/js/app/libs/js/bootstrap/bootstrap.min.js"></script>

			<!-- CONTROLLERS -->
			<script src="/wcm_hackathon/resources/js/app/routerconfig.js"></script>
			<script src="/wcm_hackathon/resources/js/app/home/controllers/homeController.js"></script>
			<script src="/wcm_hackathon/resources/js/app/cadastro-indicadores/controllers/cadastroIndicadoresController.js"></script>
			<script src="/wcm_hackathon/resources/js/app/gerar-link-publico/controllers/gerarLinkController.js"></script>
			
			<!-- PACE LOADER - turn this on if you want ajax 
				loading to show (caution: uses lots of memory on iDevices) -->
			<script data-pace-options='{ "restartOnRequestAfter": true }' src="/wcm_hackathon/resources/js/app/libs/js/plugin/pace/pace.min.js"></script>
	
			<script src="/wcm_hackathon/resources/js/app/libs/js/angularjs/jquery-ui.min.js"></script>
	
			<!-- IMPORTANT: APP CONFIG -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/app.config.js"></script>
	
			<!-- BOOTSTRAP JS -->	
	
			<!-- CUSTOM NOTIFICATION -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/notification/SmartNotification.min.js"></script>
	
			<!-- JARVIS WIDGETS -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/smartwidgets/jarvis.widget.min.js"></script>
	
			<!-- browser msie issue fix -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/plugin/msie-fix/jquery.mb.browser.min.js"></script>
	
			<!-- FastClick: For mobile devices -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/plugin/fastclick/fastclick.min.js"></script>
	
			<!-- MAIN APP JS FILE -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/app.min.js"></script>
	
			<!-- Full Calendar -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/plugin/moment/moment.min.js"></script>
			
			<!-- DATA TABLE -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/datatables/datatables.min.js"></script>
			<script src="/wcm_hackathon/resources/js/app/libs/js/datatables/dataTables.buttons.min.js"></script>
			
			
			<!-- icheck -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/plugin/icheck/icheck.min.js"></script>
			
			<!-- alertify -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/plugin/alertifyjs/alertify.js"></script>
			
			<!-- mask -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/plugin/mask/jquery.mask.min.js"></script>
			
			<!-- select2-->
			<script src="/wcm_hackathon/resources/js/app/libs/js/plugin/select2/select.min.js"></script>
			
			<!-- c3js-->
			<script src="/wcm_hackathon/resources/js/app/libs/js/plugin/c3/c3-angular.min.js"></script>
			<script src="/wcm_hackathon/resources/js/app/libs/js/plugin/c3/c3.min.js"></script>
			<script src="/wcm_hackathon/resources/js/app/libs/js/plugin/c3/d3.min.js"></script>
			
			<!-- jstree -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/plugin/jstree/jstree.min.js"></script>
			
			
			
			<!-- ENHANCEMENT PLUGINS : NOT A REQUIREMENT -->
			<!-- Voice command : plugin -->
			<script src="/wcm_hackathon/resources/js/app/libs/js/speech/voicecommand.min.js"></script>
			
			<script>
			
				$.root_ = $('body');
			
				$(document).ready(function() {
					pageSetUp();
					
					$("#menuToggle").click(function(){
					     var isMobile = WCMAPI._isMobile();
					     
					     if(isMobile){
					       	$.root_.hasClass("menu-on-top") ? $.root_.hasClass("menu-on-top") && $(window).width() < 979 && ($("html").toggleClass("hidden-menu-mobile-lock"),
					                   $.root_.toggleClass("hidden-menu"),
					                   $.root_.removeClass("minified")) : ($("html").toggleClass("hidden-menu-mobile-lock"),
					                   $.root_.toggleClass("hidden-menu"),
					                   $.root_.removeClass("minified"))
					     }
				    
				    })
					
				});
				
				
				var functionVoz = function(){
					recognizer.start();
					
					setTimeout(function(){ 
						recognizer.stop();
					}, 5000);
				}
				
				
			var aprovarSolicitacao = function(numeroSolicitacao){
				var botaoAprovar = $("#aprovar_" + numeroSolicitacao);
				
				if(botaoAprovar.length == 0){
					$.smallBox({
						title : "Falha",
						content : "Solicitação não encontrada! Por favor tente novamente.",
						color : "#a90329",
						timeout: 4000,
						icon : "fa fa-times"
					});
					return;
				}
				
				botaoAprovar.click();
					$.smallBox({
						title : "Sucesso",
						content : "Solicitação " + numeroSolicitacao + " foi aprovada com sucesso!",
						color : "#40ac2b",
						timeout: 4000,
						icon : "fa fa-check"
					});
			}
			
			var reprovarSolicitacao = function(numeroSolicitacao){
				var botaoReprovar = $("#reprovar_" + numeroSolicitacao);
				
				if(botaoReprovar.length == 0){
					$.smallBox({
						title : "Falha",
						content : "Solicitação não encontrada! Por favor tente novamente.",
						color : "#a90329",
						timeout: 4000,
						icon : "fa fa-times"
					});
					return;
				}
				
				botaoReprovar.click();
				$.smallBox({
					title : "Sucesso",
					content : "Solicitação " + numeroSolicitacao + " foi reprovada com sucesso!",
					color : "#40ac2b",
					timeout: 4000,
					icon : "fa fa-check"
				});
			}
				
			    //Test browser support
				window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null
		
				//caso não suporte esta API DE VOZ            
				if (!window.SpeechRecognition) {
					document.getElementById('unsupported').removeAttribute('hidden');
				}else {
				
					var recognizer = new window.SpeechRecognition();
					recognizer.lang = 'pt-BR';
		
					recognizer.continuous = true;
					
					//RESULTADO DAS PALAVRAS
					recognizer.onresult = function(event){
					
		                for (var i = event.resultIndex; i < event.results.length; i++) {
		                    if(event.results[i].isFinal){
		                        
		                        var retorno = event.results[i][0].transcript;
		                        
		                        var comandos = {
									'aprovar solicitação #parametro': function(numeroSolicitacao) { aprovarSolicitacao(numeroSolicitacao) },
									'aprovar solicitações #parametro': function(numeroSolicitacao) { aprovarSolicitacao(numeroSolicitacao) },
									'aprova solicitação #parametro': function(numeroSolicitacao) { aprovarSolicitacao(numeroSolicitacao) },
									'aprova solicitações #parametro': function(numeroSolicitacao) { aprovarSolicitacao(numeroSolicitacao) },
									'prova solicitação #parametro': function(numeroSolicitacao) { aprovarSolicitacao(numeroSolicitacao) },
									'prova solicitações #parametro': function(numeroSolicitacao) { aprovarSolicitacao(numeroSolicitacao) },
									
									'reprovar solicitação #parametro': function(numeroSolicitacao) { reprovarSolicitacao(numeroSolicitacao) },
									'reprova solicitação #parametro': function(numeroSolicitacao) { reprovarSolicitacao(numeroSolicitacao) },
									'reprovar solicitações #parametro': function(numeroSolicitacao) { reprovarSolicitacao(numeroSolicitacao) },
									'reprova solicitações #parametro': function(numeroSolicitacao) { reprovarSolicitacao(numeroSolicitacao) },
									'cadastrar indicador': function () {  window.location = "#!/cadastro-indicadores"; },
									'cadastrar indicadores': function () {  window.location = "#!/cadastro-indicadores"; },
									'cadastra indicador': function () {  window.location = "#!/cadastro-indicadores"; },
									'cadastra indicadores': function () {  window.location = "#!/cadastro-indicadores"; },
									'cadastro de indicador': function () {  window.location = "#!/cadastro-indicadores"; },
									'cadastro de indicadores': function () {  window.location = "#!/cadastro-indicadores"; },
									'cadastros de indicador': function () {  window.location = "#!/cadastro-indicadores"; },
									'cadastros de indicadores': function () {  window.location = "#!/cadastro-indicadores"; },
									'cadastro indicador': function () {  window.location = "#!/cadastro-indicadores"; },
									'cadastro indicadores': function () {  window.location = "#!/cadastro-indicadores"; },
									'consultar indicador': function () {  window.location = "#!/indicadores"; },
									'consultar indicadores': function () {  window.location = "#!/indicadores"; },
									'consulta indicador': function () {  window.location = "#!/indicadores"; },
									'dashboard': function () {  window.location = "#!/home"; },
									'gerar link': function () {  window.location = "#!/gerar-link-publico"; },
									'gera link': function () {  window.location = "#!/gerar-link-publico"; },
									'gerar link publico': function () {  window.location = "#!/gerar-link-publico"; },
									'gera link publico': function () {  window.location = "#!/gerar-link-publico"; }
								}; 
		                        
		                        for(var comando in comandos){
		                        	
		                        	var aux = comando;
		                        	
		                        	if(comando.indexOf("#parametro") >= 0){
		                        		aux = comando.replace("#parametro", "").trim();
		                        	}
		                        	
			                        if(retorno.indexOf(aux) >= 0){
			                        
			                        	if(comando.indexOf("#parametro") == -1){
			                        		$.smallBox({
												title : "Aguarde",
												content : "Comando sendo executado!!",
												color : "#40ac2b",
												timeout: 4000,
												icon : "fa fa-check"
											});
			                        	}
			                        
			                        	var comandoSeparado = comando.split("#parametro");			                        			                        
			                        	comando.indexOf("#parametro") >= 0 ? comandos[comando](retorno.replace(comandoSeparado[0], "").replace(comandoSeparado[1], "")) : comandos[comando]();
			                        	return;
			                        }
		                        	
		                        }
		                        
		                        
		                        
		                        $.smallBox({
									title : "Falha",
									content : "Comando <b>" + retorno + "</b> não encontrado!!",
									color : "#a90329",
									timeout: 4000,
									icon : "fa fa-times"
								});
		                        
		                        
		                        
		                    }else{
		                         $.smallBox({
										title : "Falha",
										content : "Falha ao capturar voz, tente novamente!!.",
										color : "#a90329",
										timeout: 4000,
										icon : "fa fa-times"
									});
		                    }
		                }
		            }
				}
	
			</script>
			
			<script>
				$(function(){
					if(window.location.search.indexOf("id") > -1){
						$("#menu-indicadores").hide();
						$("#menu-link").hide();
					}
				})
			</script>
			
		</body>
</div>

