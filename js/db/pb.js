function xmgl(userId) {
	var market = 'http://moa.cispdr.com:8066/mobile/ui/count/GetFlowCount.ashx?&Classify=jygl&action=getcount&userId='+userId;;
	var design = 'http://moa.cispdr.com:8066/mobile/ui/count/GetFlowCount.ashx?&Classify=kcsj&action=getcount&userId='+userId;
	var epc = 'http://moa.cispdr.com:8066/mobile/ui/count/GetFlowCount.ashx?&Classify=zcb&action=getcount&userId='+userId;
	var supervisor = 'http://moa.cispdr.com:8066/mobile/ui/count/GetFlowCount.ashx?&Classify=jl&action=getcount&userId='+userId;
	var tender = 'http://moa.cispdr.com:8066/mobile/ui/count/GetFlowCount.ashx?&Classify=tender&action=getcount&userId='+userId;

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
	$.ajax({
		url: epc,
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
				if ($('#epc').find('span').length != 0) {
					var total = parseInt($('#epc').find('span').html());
					total += parseInt(count);
					$('#epc').find('span').html(total)
				} else {
					$('#epc').append(_span)
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
		url: supervisor,
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
				if ($('#supervisor').find('span').length != 0) {
					var total = parseInt($('#supervisor').find('span').html());
					total += parseInt(count);
					$('#supervisor').find('span').html(total)
				} else {
					$('#supervisor').append(_span)
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
		url: tender,
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
				if ($('#tender').find('span').length != 0) {
					var total = parseInt($('#tender').find('span').html());
					total += parseInt(count);
					$('#tender').find('span').html(total)
				} else {
					$('#tender').append(_span)
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
}
