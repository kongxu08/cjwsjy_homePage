function dzyhp(userName,userId){
	//疫情-质安部流程
	$.ajax({
		url: 'http://moa.cispdr.com:8066/cjwsjy-yq/a/actApi/countTaskTodo?userName='+userName,
		timeout: 3000,
		dataType: 'json',
		success: function(data) {
			data = data.body.countTodo;
			if(data > 0) {
				var _span = $("<span class='mui-badge2'>")
				_span.html(data)
				if(data.length == 3) {
					_span.css("margin-left", "-35px")
				}
				if(data.length == 4) {
					_span.css("margin-left", "-40px")
				}
				if($('#yqfk').find('span').length != 0) {
					var total = parseInt($('#yqfk').find('span').html());
					total += parseInt(data);
					$('#yqfk').find('span').html(total)
				} else {
					$('#yqfk').append(_span)
				}
				if($('#总数').find('span').length == 0) {
					var _spanTotal = _span.clone()
					$('#总数').append(_spanTotal)
				} else {
					var total = parseInt($('#总数').find('span').html());
					total += parseInt(data);
					$('#总数').find('span').html(total)
				}
			}
		}
	});
	
	//疫情-核酸检测
	$.ajax({
		url: 'http://moa.cispdr.com:8066/cjwsjy-yq/a/actApi/todoCount?procDefKey=checkapply&userName=' + userName,
		timeout: 3000,
		dataType: 'json',
		success: function(data) {
			data = data.body.countTodo;
			if(data > 0) {
				var _span = $("<span class='mui-badge2'>")
				_span.html(data)
				if(data.length == 3) {
					_span.css("margin-left", "-35px")
				}
				if(data.length == 4) {
					_span.css("margin-left", "-40px")
				}
				if($('#hsjc').find('span').length != 0) {
					var total = parseInt($('#hsjc').find('span').html());
					total += parseInt(data);
					$('#hsjc').find('span').html(total)
				} else {
					$('#hsjc').append(_span)
				}
				if($('#总数').find('span').length == 0) {
					var _spanTotal = _span.clone()
					$('#总数').append(_spanTotal)
				} else {
					var total = parseInt($('#总数').find('span').html());
					total += parseInt(data);
					$('#总数').find('span').html(total)
				}
			}
		}
	});
	//低值易耗品
	$.ajax({
		url: 'http://moa.cispdr.com:8066/cjwsjy-yhp/txmbWjglSwglAppAction.do?getTodoNum&uuid=' + userName,
		timeout: 3000,
		dataType: 'json',
		success: function(data) {
			data = data.低值易耗品;
			if(data > 0) {
				var _span = $("<span class='mui-badge2'>")
				_span.html(data)
				if(data.length == 3) {
					_span.css("margin-left", "-35px")
				}
				if(data.length == 4) {
					_span.css("margin-left", "-40px")
				}
				if($('#dzyhp').find('span').length != 0) {
					var total = parseInt($('#dzyhp').find('span').html());
					total += parseInt(data);
					$('#dzyhp').find('span').html(total)
				} else {
					$('#dzyhp').append(_span)
				}
				if($('#总数').find('span').length == 0) {
					var _spanTotal = _span.clone()
					$('#总数').append(_spanTotal)
				} else {
					var total = parseInt($('#总数').find('span').html());
					total += parseInt(data);
					$('#总数').find('span').html(total)
				}
			}
		}
	});

	setTimeout(function(){
		//绩效管理平台-留言
		var uid=userId.replace(new RegExp("-","gm"),"");
		$.ajax({
			url: 'http://moa.cispdr.com:8066/cjwsjy-fy/a/formApi/lyquantity',
			data:{'userId':uid},
			type:'post',
			timeout: 3000,
			dataType: 'json',
			success: function(data) {
				data = data.body.data;
				if(data > 0) {
					var _span = $("<span class='mui-badge2'>")
					_span.html(data)
					if(data.length == 3) {
						_span.css("margin-left", "-35px")
					}
					if(data.length == 4) {
						_span.css("margin-left", "-40px")
					}
					if($('#gzjx').find('span').length != 0) {
						var total = parseInt($('#gzjx').find('span').html());
						total += parseInt(data);
						$('#gzjx').find('span').html(total)
					} else {
						$('#gzjx').append(_span)
					}
					if($('#总数').find('span').length == 0) {
						var _spanTotal = _span.clone()
						$('#总数').append(_spanTotal)
					} else {
						var total = parseInt($('#总数').find('span').html());
						total += parseInt(data);
						$('#总数').find('span').html(total)
					}
				}
			}
		});
		//宋诗文党群部承诺书

		$.ajax({
			url: 'http://moa.cispdr.com:8066/yh/a/formApi/getzrsSunById?userId='+uid,
			timeout: 3000,
			dataType: 'json',
			success: function(data) {
				var count = 0;
				$.each(data.body, function(key, value) {
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
			},
			error: function(e) {
				mui.toast(e.statusText)
			}
		
		});
	},500)
}

