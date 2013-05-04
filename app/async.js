if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	return {
    		then: function(fn) {
    			fn(value);
    		}
    	}
    },

    manipulateRemoteData : function(url) {
    	return {
    		then: function(fn) {
    			$.get(url, function(data) {
    				var names = data.people.map(function(person) {
    					return person.name;
    				});
    				fn(names.sort());
    			})
    		}
    	}
    }
  };
});
