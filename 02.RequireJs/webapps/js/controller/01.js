console.log('01.js');

/*
require(['/js/module/MyMath.js'], function(MyMath){
    
    console.log(MyMath.add(1, 2));  
 
});
*/

function add()
{
	require(['/js/module/MyMath.js'], function(MyMath){
	    
	    console.log(MyMath.add(1, 2));  
	 
	});	
}