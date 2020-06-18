function xmsfw(userName){
	$.ajax({
		url: 'http://moa.cispdr.com:8066/cjwsjy-xmgl/txmbWjglSwglAppAction.do?getAllTodoNum&uuid=' + userName,
		timeout: 3000,
		dataType: 'json',
		success: function(data) {
			var count = 0;
			$.each(data, function(key, value) {
				count += value;
			});
			if(count > 0) {
				var _span = $("<span class='mui-badge2'>")
				_span.html(count)
				if(count.length == 3) {
					_span.css("margin-left", "-35px")
				}
				if(count.length == 4) {
					_span.css("margin-left", "-40px")
				}
				if($('#公文管理待办').find('span').length != 0) {
					var total = parseInt($('#公文管理待办').find('span').html());
					total += parseInt(count);
					$('#公文管理待办').find('span').html(total)
				} else {
					$('#公文管理待办').append(_span)
				}
				if($('#总数').find('span').length == 0) {
					var _spanTotal = _span.clone()
					$('#总数').append(_spanTotal)
				} else {
					var total = parseInt($('#总数').find('span').html());
					total += parseInt(count);
					$('#总数').find('span').html(total)
				}
			}
		}
	});
	
}