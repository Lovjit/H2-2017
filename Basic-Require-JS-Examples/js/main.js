require.config({
  paths: {
    "jquery": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery",
    "underscore": "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore",
  }
});

require(['jquery','underscore','dummy'],function($,_,dummy){
	$('body').html(dummy);
});