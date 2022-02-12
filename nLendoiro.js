(function() {
	//nLendoiro 
	var main = function($) { 
		
		var self = $.nLendoiro = new function(){};
		
		$.extend(self, {
			nLendoiroImgs : [
			'https://s.libertaddigital.com/2019/11/29/1200/627/291x103/lendoiro.jpg',
			'https://s1.eestatic.com/2017/11/28/social/deportivo_de_la_coruna-a_coruna-lfp_liga_de_futbol_profesional_265486734_55719468_1024x576.jpg',
			'https://as01.epimg.net/futbol/imagenes/2018/02/07/primera/1518004429_427938_1518004595_noticia_normal.jpg',
			'https://phantom-marca.unidadeditorial.es/bf546dcdb651eecee790c2e853a69908/resize/1320/f/jpg/assets/multimedia/imagenes/2021/10/01/16330941775355.jpg',
			'https://okdiario.com/img/2021/07/15/augusto-cesar-lendoiro-en-una-foto-de-archivo.--rcdeportivo.es_.jpg',
			'https://cope-cdnmed.agilecontent.com/resources/jpg/3/4/1588610420443.jpg',
			'http://3.bp.blogspot.com/-x91gVJO8ygM/Te0GZIgLIEI/AAAAAAAABng/BGp26IgPWlE/s1600/Lendoiro.jpg',
			'https://e00-marca.uecdn.es/imagenes/2013/07/13/futbol/equipos/deportivo/1373726812_extras_noticia_foton_7_1.jpg',
			'https://imagenes.elpais.com/resizer/fPCbkW2pQAQ2K6UrJcKa79cSbLE=/414x311/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/GWU4DNS3TSYDDUKXDDVJX6HXOI.jpg',
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.nLendoiroImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 
 