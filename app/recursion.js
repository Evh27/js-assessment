if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	var files = [];
    	function extractFiles (dir, collect) {
    		dir.files.forEach(function(item) {
    			// if directory
    			if(typeof item === 'object') {
    				// go to subdir and test if should collect files
    				extractFiles(item, collect || item.dir == dirName);
    			} 
    			// else if file and should collect
    			else if(collect) {
					files.push(item);
    			}
    		});
    	}
    	// always collect files if no subdir requested
    	extractFiles(data, dirName === undefined);
    	return files;
    },

    permute: function(arr) {
    	var answers = [];
    	
    	function perm (array, head) {
    		array.forEach(function(item, i) {    			
    			var a = array.concat([]);
    			var h = head.concat([]);
    			
    			h.push(item);
    			a.splice(i, 1);
    			
    			if(a.length) {
    				perm(a,h)
    			} else {
    				answers.push(h);
    			}    			
    		})    		
    	}
    	
    	perm(arr, []);
    	console.log(answers)
    	return answers;
    }
  };
});
