require(
	['/js/model/User.js']
	, function(User)
	{
		var users = [
		             	new User('user1')
		             	, new User('user2')
		             	, new User('user3')
		             ];
		
		for ( var idx = 0, len = users.length; idx < len; idx++ )
		{
			console.log(users[idx].name);
		}
		
		localStorage.users = JSON.stringify(users);
		
	}
);