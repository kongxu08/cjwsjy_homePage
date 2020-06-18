function cggl(userName){
	$.ajax({
		url: "http://moa.cispdr.com:8087/oa/api/Common/GetProcessingTasksNum/?Type=Goabroad&userName=" + userName,
		timeout: 3000,
		dataType: 'json',
		success: function(data) {
			var d = $.parseJSON( data );
			var v = 0;
			if(!isNaN(d.GoAbroadInfoOutsideStaffNew)){
				v=v+d.GoAbroadInfoOutsideStaffNew;
			}
			if(!isNaN(d.GoAbroadEmergency)){
				v=v+d.GoAbroadEmergency;
			}
			if(!isNaN(d.GoAbroadEmergencyAdjustment)){
				v=v+d.GoAbroadEmergencyAdjustment;
			}
			if(!isNaN(d.EpidemicPreventionSupplies)){
				v=v+d.EpidemicPreventionSupplies;
			}
			if(v > 0) {
				var _span = $("<span class='mui-badge2'>")
				_span.html(v)
				if(v.length == 3) {
					_span.css("margin-left", "-35px")
				}
				if(v.length == 4) {
					_span.css("margin-left", "-40px")
				}
				if($('#出国管理待办').find('span').length != 0) {
					var total = parseInt($('#出国管理待办').find('span').html());
					total += v;
					$('#出国管理待办').find('span').html(total)
				} else {
					$('#出国管理待办').append(_span)
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
		}
	});
}

function rlzy(userName,uid){
	$.ajax({
		url: "http://moa.cispdr.com:8087/oa/api/Common/GetProcessingTasksNum/?Type=Manpower&userName=" + userName,
		timeout: 3000,
		dataType: 'json',
		success: function(data) {
			var d = $.parseJSON( data );
			var v = 0;
			$.each(d, function(key, value) {
				v=v+value;
			})
			if(v > 0) {
				var _span = $("<span class='mui-badge2'>")
				_span.html(v)
				if(v.length == 3) {
					_span.css("margin-left", "-35px")
				}
				if(v.length == 4) {
					_span.css("margin-left", "-40px")
				}
				if($('#人力资源待办').find('span').length != 0) {
					var total = parseInt($('#人力资源待办').find('span').html());
					total += v;
					$('#人力资源待办').find('span').html(total)
				} else {
					$('#人力资源待办').append(_span)
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
		}
	});
	
/* 	$.ajax({
		type:"POST",
		async:false,
		dataType:'json',
		contentType : "application/json",
		data:JSON.stringify({uid:"600CDC1A-76AA-4165-A006-6904B7B7E74A"}),
		url: "http://moa.cispdr.com:8087/tp_info.html",
		success:function (data) {
			console.log(data)
		},error(x,t,e){
			console.log(t)
		}
	}); */
}