function setBadge(userName,uid) {
	var market = 'http://moa.cispdr.com:8087/dsp.gw/badge/db_count?type=market&userName='+userName;
	var strategy = 'http://moa.cispdr.com:8087/dsp.gw/badge/db_count?type=strategy&userName='+userName;
	var design = 'http://moa.cispdr.com:8087/dsp.gw/badge/db_count?type=design&userName='+userName;
	$.ajax({
		url: market,
		timeout: 3000,
		dataType: 'json',
		success: function(data) {
			var count = 0;
			$.each(data, function(key, value) {
				count += value;
			});
			if (count > 0) {
				var _span = $("<span class='mui-badge2'>")
				_span.html(count)
				if (count.length == 3) {
					_span.css("margin-left", "-35px")
				}
				if (count.length == 4) {
					_span.css("margin-left", "-40px")
				}
				if ($('#market').find('span').length != 0) {
					var total = parseInt($('#market').find('span').html());
					total += parseInt(count);
					$('#market').find('span').html(total)
				} else {
					$('#market').append(_span)
				}
				if ($('#总数').find('span').length == 0) {
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
	$.ajax({
		url: strategy,
		timeout: 3000,
		dataType: 'json',
		success: function(data) {
			var count = 0;
			$.each(data, function(key, value) {
				count += value;
			});
			if (count > 0) {
				var _span = $("<span class='mui-badge2'>")
				_span.html(count)
				if (count.length == 3) {
					_span.css("margin-left", "-35px")
				}
				if (count.length == 4) {
					_span.css("margin-left", "-40px")
				}
				if ($('#strategy').find('span').length != 0) {
					var total = parseInt($('#strategy').find('span').html());
					total += parseInt(count);
					$('#strategy').find('span').html(total)
				} else {
					$('#strategy').append(_span)
				}
				if ($('#总数').find('span').length == 0) {
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
	$.ajax({
		url: design,
		timeout: 3000,
		dataType: 'json',
		success: function(data) {
			var count = 0;
			$.each(data, function(key, value) {
				count += value;
			});
			if (count > 0) {
				var _span = $("<span class='mui-badge2'>")
				_span.html(count)
				if (count.length == 3) {
					_span.css("margin-left", "-35px")
				}
				if (count.length == 4) {
					_span.css("margin-left", "-40px")
				}
				if ($('#design').find('span').length != 0) {
					var total = parseInt($('#design').find('span').html());
					total += parseInt(count);
					$('#design').find('span').html(total)
				} else {
					$('#design').append(_span)
				}
				if ($('#总数').find('span').length == 0) {
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
	var form_data={};
	form_data.uid=uid;
	$.ajax({
		url: "http://moa.cispdr.com:8087/tp_info.html",
		type:"post",
		data:form_data,
		timeout: 3000,
		dataType:"json",
		success: function(d) {
			console.log(d)
			var v = d.data.tp_no;
			if(v > 0) {
				var _span = $("<span class='mui-badge2'>")
				_span.html(v)
				if(v.length == 3) {
					_span.css("margin-left", "-35px")
				}
				if(v.length == 4) {
					_span.css("margin-left", "-40px")
				}
				if($('#wdtp').find('span').length != 0) {
					var total = parseInt($('#wdtp').find('span').html());
					total += v;
					$('#wdtp').find('span').html(total)
				} else {
					$('#wdtp').append(_span)
				}
				if($('#总数').find('span').length == 0) {
					var _spanTotal = _span.clone()
					$('#总数').append(_spanTotal)
				} else {
					var total = parseInt($('#总数').find('span').html());
					total += parseInt(v);
					$('#总数').find('span').html(total)
				}
			}
		},
		error:function(xhr, textStatus, e){
			mui.toast("投票数字角标获取失败")
		}
	});
	
		$.ajax({
		url: "http://moa.cispdr.com:8088/CEGWAPServer/leave/db_count?userName="+userName,
		type:"post",
		timeout: 3000,
		dataType:"json",
		success: function(d) {
			var v = d.data.leave;
			if(v > 0) {
				var _span = $("<span class='mui-badge2'>")
				_span.html(v)
				if(v.length == 3) {
					_span.css("margin-left", "-35px")
				}
				if(v.length == 4) {
					_span.css("margin-left", "-40px")
				}
				if($('#请假审批').find('span').length != 0) {
					var total = parseInt($('#wdtp').find('span').html());
					total += v;
					$('#请假审批').find('span').html(total)
				} else {
					$('#请假审批').append(_span)
				}
				if($('#总数').find('span').length == 0) {
					var _spanTotal = _span.clone()
					$('#总数').append(_spanTotal)
				} else {
					var total = parseInt($('#总数').find('span').html());
					total += parseInt(v);
					$('#总数').find('span').html(total)
				}
			}
		},
		error:function(xhr, textStatus, e){
			mui.toast("请假审批数字角标获取失败")
		}
	});
}
