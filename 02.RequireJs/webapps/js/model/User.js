define(
	/*
	{
		User : function(name)
		{
			this.name = name || 'Default name';
		}
	}
	*/
	function(){
		this.name = '';
	    function User(name){
	        this.name = name || 'Default name';
	    }
	     
	    return User;
	}

);