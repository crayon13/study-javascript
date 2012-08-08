// process.argv
process.argv.forEach(
		function (item, index)
		{
			//출력합니다
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
