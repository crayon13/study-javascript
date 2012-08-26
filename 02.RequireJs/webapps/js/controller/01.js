//console.log('01.js');

/*
require(['/js/module/MyMath.js'], function(MyMath){
    
    console.log(MyMath.add(1, 2));  
 
});
*/

function add()
{
	require(
		['/js/module/MyMath.js']
		, function(MyMath){
		    try
		    {
		    	console.log(MyMath.add(1, 2));  
		    } 
		    catch (ex)
		    {
		    	alert(MyMath.add(1,2));
		    }
		}
	);	
}

function doTest01()
{

	require(
		['/js/data/Data01.js']
		, function(Data01)
		{
		    try
		    {
		    	console.log('1' + Data01.data.a + ':' + Data01.data.b);
		    } 
		    catch (ex)
		    {
		    	alert('1' + Data01.data.a + ':' + Data01.data.b);
		    }			
			
			
			
		}
	);

	/*
	require(['/js/module/MyMath.js'], function(MyMath){
	    
	    //console.log(MyMath.add(1, 2));  
		alert(MyMath.data);
	 
	});		
	*/
}