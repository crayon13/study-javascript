var fs = require('fs');

try 
{
	var text = fs.readFileSync('textfile.txt', 'utf8');
	console.log(text);
}
catch (e)
{
	console.log(e);
}


fs.readFile('textfile.txt', 'utf8', 
	function (error, data)
	{
		if (error)
		{
			console.log(error);
		}
		else
		{
			console.log(data);
		}
	}
);

var data = 'Hello World...';

fs.writeFile('textFileOtherWrite.txt', data, 'utf8', 
	function (error)
	{
		if ( error )
		{
			console.log(error);
		}
		else
		{
			console.log('WRITE FILE ASYNC COMPLETE');
		}
	}
);

try 
{
	fs.writeFileSync('textFileOtherWriteSync.txt', data, 'utf8');
	console.log('WRITE FILE SYNC COMPLETE');
}
catch (e)
{
	console.log(e);
}
