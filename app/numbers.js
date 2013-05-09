if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
    	var numStr = num.toString(2);
    	var bitStr = numStr[numStr.length - bit];
    	return parseInt(bitStr);
    },

    base10: function(str) {
    	return parseInt(str, 2);
    },

    convertToBinary: function(num) {
    	var str = num.toString(2);
    	while (str.length < 8) {
    		str = '0' + str;
    	}
    	return str;
    },

    multiply: function(a, b) {
    	var places = b.toString().split('.')[1].length;
    	return parseFloat((a * b).toFixed(places));
    }
  };
});

