if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
    	return arr.indexOf(item);
    },

    sum : function(arr) {
    	return arr.reduce(function(previous, current) {
    		return previous + current;
    	})
    },

    remove : function(arr, item) {
    	return arr.filter(function(element) {
    		return element != item;
    	});
    },
    
    removeWithoutCopy : function(arr, item) {
    	var pos = arr.indexOf(item);
    	while(pos != -1) {
    		arr.splice(pos, 1);
    		pos = arr.indexOf(item);
    	}
    	return arr;
    },

    append : function(arr, item) {
    	arr.push(item);
    	return arr;
    },

    truncate : function(arr) {
    	arr.pop();
    	return arr;
    },

    concat : function(arr1, arr2) {
    	return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
    	arr.splice(index, 0, item);
    	return arr;
    },

    count : function(arr, item) {
    	var items = arr.filter(function(elem) {
    		return elem == item;
    	})
    	return items.length;
    },

    duplicates : function(arr) {    	
    	return arr.map(function(elem, i) {
    		var lastPos = arr.lastIndexOf(elem);
    		
    		// must be the only instance, next element
    		if(lastPos == i) return;
    		
    		// remove duplicates so they aren't counted again 
    		while(lastPos != i) {
    			arr.splice(lastPos, 1);
    			lastPos = arr.lastIndexOf(elem);
    		}
    		
    		return elem;
    	})
    	.filter(function(elem) {
    		return elem !== undefined;
    	});
    },

    square : function(arr) {
    	return arr.map(function(elem) {
    		return elem * elem;
    	});
    },

    findAllOccurrences : function(arr, target) {
    	return arr.map(function(elem, i) {
    		if(elem == target) {
    			return i;
    		}
    	})
    	.filter(function(elem) {
    		return elem !== undefined;
    	});
    }
  };
});
