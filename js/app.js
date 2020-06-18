//获取地址栏参数，name:参数名称
var appUrl = "http://moa.cispdr.com:8088"
//var appUrl = "http://10.6.180.131:8080"

//科研项目管理
var appKYUrl = "http://moa.cispdr.com:8087/KYManageAppWeb"
//薪资查询
var xzcxUrl = "http://moa.cispdr.com:8087/WageSearchDsp"
//年终大会url
var nzMeetingUrl = "http://moa.cispdr.com:8087/HYServer"

//网上报销
var appWSBXUrl = "http://moa.cispdr.com:8028/webApprove"

//餐饮服务
var cyfwUrl = "http://moa2.cispdr.com:8085"

//知识管理平台url
var appZSGLUrl = "http://cjkms.cjwsjy.com.cn"

//重点项目跟踪url
var zdxmgzUrl = "http://moa.cispdr.com:8066/zdxmgz/"
//重点项目跟踪待办路径
var zdxmgzDBUrl = "http://moa.cispdr.com:8066/cjwsjy-gl/a/formApi/getMytaskCount?userid="
//名片管理url
var businessCardUrl = "http://moa.cispdr.com:8066/bcard/"
//项目管理url--刘广文
var xmglUrl = "http://moa.cispdr.com:8066/mobile";
//人力部-人才检索
var rcjsUrl = "http://moa.cispdr.com:8066/talent/";
//人力部-绩效跟踪
var jxgzUrl = "http://moa.cispdr.com:8066/weeklyindex";
//人力部-年度述职
var ndszUrl = "http://moa.cispdr.com:8066/annualindex";

function getUrlParms(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null)
		return unescape(r[2]);
	return null;
}
//打开网页
var openWebViewFunction;
//打开网页DWebView
var openDWebViewFunction;
//打开餐饮服务
var callCYFWFunction;
//规程规范
var callGCGFFunction;
//资产扫码
var callZCSMFunction;
//知识管理
var callZSGLFunction;
//车辆管理
var callCLGLFunction;
//档案管理-离线阅览
var callLXYLFunction;
//设置桌面角标
var setBadgeNumFunction;
//注销
var logOutFunction;
//视频
var callQYSDKFunction;
//版本更新
var callCheckVersionFunction;
//分享
var callShareFunction;
//保存通讯录到本地
var callInsertContactFunction;
//记录打开新闻中心和联系人详情日志
var saveLogFunction;
//请假申请
var callQJSQfunction;

$(function() {
	var browser = {
		versions: function() {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return { //移动终端浏览器版本信息
				trident: u.indexOf('Trident') > -1, //IE内核
				presto: u.indexOf('Presto') > -1, //opera内核
				webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
				gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
				mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
				iPad: u.indexOf('iPad') > -1, //是否iPad
				webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
				weixin: u.match(/micromessenger/i)
			};
		}(),
		language: (navigator.browserLanguage || navigator.language).toLowerCase()
	}
	var browserMsg;
	if(browser.versions.mobile && browser.versions.ios) {
		openWebViewFunction=function(openUrl,title,closeUrl){
			var json = {}
				json.openUrl = openUrl
			if(title!=undefined){
				json.title = title
			}
			if(closeUrl!=undefined){
				json.closeUrl = closeUrl
			}
			window.webkit.messageHandlers.OpenWebView.postMessage(json)
		}
		openDWebViewFunction=function(openUrl,title,closeUrl){
			var json = {}
				json.openUrl = openUrl
			if(title!=undefined){
				json.title = title
			}
			if(closeUrl!=undefined){
				json.closeUrl = closeUrl
			}
			window.webkit.messageHandlers.OpenDWebView.postMessage(json)
		}
		callCYFWFunction=function(){
			window.webkit.messageHandlers.callCYFW.postMessage(null)
		}
		setBadgeNumFunction=function(num){
			window.webkit.messageHandlers.setBadge.postMessage(num)
		}
		logOutFunction=function(loginName){
			window.webkit.messageHandlers.logOut.postMessage(loginName)
		}
		callQYSDKFunction=function(id){
			window.webkit.messageHandlers.callQYSDK.postMessage(id)
		}
		callGCGFFunction=function(){
			window.webkit.messageHandlers.callGCGF.postMessage(null)
		}
		callZCSMFunction=function(){
			window.webkit.messageHandlers.callZCSM.postMessage(null)
		}
		callLXYLFunction=function(){
			window.webkit.messageHandlers.callLXYL.postMessage(null)
		}
		callCLGLFunction=function(){
			window.webkit.messageHandlers.callCLGL.postMessage(null)
		}
		callCheckVersionFunction=function(){
			window.webkit.messageHandlers.callCheckVersion.postMessage(null)
		}
		callShareFunction=function(url){
			window.webkit.messageHandlers.callShare.postMessage(url)
		}
		callInsertContactFunction=function(url){
			window.webkit.messageHandlers.callInserContact.postMessage(url)
		}
		saveLogFunction=function(param){
			window.webkit.messageHandlers.saveLog.postMessage(param)
		}
		callZSGLFunction=function(openUrl,title,closeUrl){
			var json = {}
				json.openUrl = openUrl
			if(title!=undefined){
				json.title = title
			}
			if(closeUrl!=undefined){
				json.closeUrl = closeUrl
			}
			window.webkit.messageHandlers.callZSGL.postMessage(json)
		}
		callQJSQfunction=function(){
			window.webkit.messageHandlers.callQJSQ.postMessage(null)
		}
		browserMsg = 'Safari';
	} else if(browser.versions.mobile && browser.versions.android) {
		openWebViewFunction=function(openUrl,title,closeUrl){
			if(title==undefined){
				android.openWebView(openUrl)
			}else if(closeUrl==undefined){
				android.openWebView(openUrl,title)
			}else{
				android.openWebView(openUrl,title,closeUrl)
			}
		}
		openDWebViewFunction=function(openUrl,title,closeUrl){
			var json = {}
				json.openUrl = openUrl
			if(title!=undefined){
				json.title = title
			}
			if(closeUrl!=undefined){
				json.closeUrl = closeUrl
			}
			android.openDWebView(JSON.stringify(json))
		}
		setBadgeNumFunction=function(num){
			android.setBadge(num)
		}
		logOutFunction=function(loginName){
			android.logOut(loginName)
		}
		callCYFWFunction=function(){
			android.callCYFW()
		}
		callQYSDKFunction=function(id){
			android.callQYSDK(id)
		}
		callGCGFFunction=function(){
			android.callGCGF()
		}
		callZCSMFunction=function(){
			android.callZCSM()
		}
		callLXYLFunction=function(){
			android.callLXYL()
		}
		callCLGLFunction=function(){
			android.callCLGL()
		}
		callCheckVersionFunction=function(){
			android.callCheckVersion()
		}
		callShareFunction=function(param){
			android.callShare(param)
		}
		callInsertContactFunction=function(userName){
			android.callInserContact(userName)
		}
		saveLogFunction=function(param){
			android.saveLog(param)
		}
		callZSGLFunction=function(openUrl,title,closeUrl){
			var json = {}
				json.openUrl = openUrl
			if(title!=undefined){
				json.title = title
			}
			if(closeUrl!=undefined){
				json.closeUrl = closeUrl
			}
			android.callZSGL(JSON.stringify(json))
		}
		callQJSQfunction=function(){
			android.callQJSQ()
		}
		browserMsg = '默认';
	}
})