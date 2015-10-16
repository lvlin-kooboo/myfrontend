	// mobile animate scroll
	function scroll(scrollTo, time) {
	    var scrollFrom = parseInt(document.body.scrollTop),
	        i = 0,
	        runEvery = 5;
	    
	    scrollTo = parseInt(scrollTo);
	    time /= runEvery;
	    
	    var interval = setInterval(function () {
	        i++;
	        
	        document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom;
	       
	        if (i >= time) {
	            clearInterval(interval);
	        }
	    }, runEvery);
	}

	// bound to 

	Function.prototype.bound = function(context){
		var that = this,
			args = Array.prototype.slice.call(arguments,1);
		return function(){
			args = args.concat(args.slice.call(arguments));
			return that.apply(context,args);
		}
	}

	// debounce excute function
    
    function debouncer( func , timeout ) {
       var timeoutID , timeout = timeout || 200;
       return function () {
          var scope = this , args = arguments;
          clearTimeout( timeoutID );
          timeoutID = setTimeout( function () {
            func.apply( scope , Array.prototype.slice.call( args ) );
          } , timeout );
       }
    }	