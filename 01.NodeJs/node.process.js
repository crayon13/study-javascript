// process.argv

console.log('- process.env :', process.env);
console.log('- process.version : ', process.version);
console.log('- process.versions : ', process.versions);
console.log('- process.arch : ', process.arch);
console.log('- process.platform : ', process.platform);
console.log('- process.memoryUsage() : ', process.memoryUsage());
console.log('- process.uptime() : ', process.uptime());

process.argv.forEach(
	function(item, index)
	{
		// 출력 합니다.
		console.log(index + ' : ' + typeof(item) + ' : ', item);

		// 실행 매개 변수에 --exit가 있을 때
		if ( item == '--exit' )
		{
			// 다음 실행 매개 변수를 얻습니다.
			var exitTime = Number(process.argv[index+1]);

			// 일정시간 후 프로그램을 종료 합니다.
			setTimeout(
				function()
				{
					process.exit();
				}
				, exitTime
			);
		}

	}
);




