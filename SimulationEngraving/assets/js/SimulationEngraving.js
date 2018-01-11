(function($)
{
    $.fn.Base=function()
    {
		/*Liste variables globals*/
			var color  ;
			var sizeFont ='16' ;
			var fontFamily;
			var chooseText;
			var nbLengh ;

						
		/*Récupération de la taille de l'image */
			var imgWidth = $('#chooseImg').width();
			var imgHeight = $('#chooseImg').height();
        /*Attribution de la taille de l'image choisis au conteneur de celle ci*/
			 $('#blockImage').css({ 
				'width': imgWidth,
				'height': imgHeight,
			});
        
        
        /*Récupération de la position du repère en récupérant top et left renseignés dans le css*/
		var repereLeft = parseInt($('#repere').css("left")); 
		var repereTop = parseInt($('#repere').css("top"));
console.log(repereTop-sizeFont);		
		
 		
			/*Récuperation des valeurs selectionnés des selects, si pas de selection elles prennent la première valeur*/  
			$( "#valid" ).on( "click", function() {
				color = $('#zColor').val();
				sizeFont = $('#zFontSize').val();
				fontFamily = $('#zFontFamily').val();
				chooseText = $('#chooseText').val();

				
				/*Appelle de la génération du texte*/    
				generateEngraving();
			} );
				
			/*Attribution des valeurs des selects au texte de gravure*/  
			function generateEngraving() {
					$( "#blockImage span" ).remove();
					$("#blockImage").append('<span>'+chooseText+'</span>');
					$('#blockImage span').css({
						'position': 'relative',
						'color': color,
						'font-family': fontFamily,
						'left': repereLeft,
						'top':repereTop-sizeFont+'px',
						'z-index': '7',
						'font-size':sizeFont+'px',
						'display': '-webkit-box'
					});
				/*Suppression du point*/
				$( "#repere" ).remove();
			};			
    };
	
	
	/*Fonctions pour mettre les valeurs dans les selects*/
    /*Liste couleurs*/
    $.fn.listColor=function()
    {
        var x = 0;
        while (x<arguments.length) {
            $("#zColor").append('<option id=color'+[x]+'>'+arguments[x]+'</option>');
            $('#color'+[x]).css({
            'background-color': arguments[x]           
            });
            x++;
        }
    };

    /*Liste font-size*/
    $.fn.listeFontSize=function()
    {
        var x = 0;
        while (x<arguments.length) {
            $("#zFontSize").append('<option>'+arguments[x]+'</option>');
            x++;
        } 
    };

    /*Liste font-family*/
    $.fn.listeFontFamily=function()
    {
        var x = 0;
        while (x<arguments.length) {
            $("#zFontFamily").append('<option id=font'+[x]+' >'+arguments[x]+'</option>');
            $('#font'+[x]).css({
            'font-family': arguments[x]           
            });            
            x++;
        }  
    };

    /*Nombre de caractéres*/
    $.fn.nbCharacter=function(nbLengh)
    {
		$("#chooseText").attr('maxlength',nbLengh);   
    };
       
})(jQuery);