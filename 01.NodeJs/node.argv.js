// process.argv
process.argv.forEach(
		function (item, index)
		{
			console.log(index + ' : ' + typeof(item) + ' : ', item);
			
			if ( item == '--exit' )
			{
				var exitTime = Number(process.argv[index + 1]);
				
				setTimeout(
						function()
						{
							proess.exit();
						}
						, exitTime
				);
				
			}
		}
);
