if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
    	return fn.apply({}, arr);
    },

    speak : function(fn, obj) {
    	return fn.call(obj);
    },

    functionFunction : function(str) {
    	return function(suffix) {
    		return str + ', ' + suffix; 
    	}
    },

    makeClosures : function(arr, fn) {
    	return arr.map(function(elem) {
    		return function() {
    			return fn(elem);
    		}
    	})
    },

    partial : function(fn, str1, str2) {
    	return fn.bind({}, str1, str2);
    },

    useArguments : function() {
    	var total = 0.0;
    	
    	for(var i = 0; i < arguments.length; i++) {
    		total = total + arguments[i];
    	}	
    	
    	return total;
    },

    callIt : function(fn) {
    	fn.apply({}, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
    	var args = Array.prototype.slice.call(arguments, 1);
		args.forEach(function(arg) {
			fn = fn.bind({}, arg);
		})
		return fn;
    },

    curryIt : function(fn) {
    	var args = [];
    	function curry(f) {
    		return function(param) { 
    			args.push(param)
    			if(f.length == args.length) {
        			return f.apply({}, args);
        		} else {
        			return curry(f);
        		}
    		}    		
    	}    	
    	return curry(fn);
    }
  };
});
