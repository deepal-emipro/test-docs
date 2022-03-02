
var temp_pr_version = document.location.href.toString().split('/');
setTimeout(function(){
	document.getElementById("ept-prd-vr").value= parseInt(temp_pr_version[4].toString().replace('v',''))
},1000);

setTimeout(function(){
	$(document).ready(function() {
		$(document).on('click','.has_child :: before',function(){
			$(this).find('ul').toggle(
			  function() {
			  	console.log('In If');
			    $(this).css({"visibility":"hidden","display":"none"});
			  }, function() {
			  	console.log('In else');
			    $(this).css({"visibility":"visible","display":"block"});
			  }
			);
		});
		if(temp_pr_version[5] == '' || temp_pr_version[5] == undefined)
		{
// 			window.location = $("#site-nav ul li:first a").attr('href');
		}
	});
},1000);

function changeProductVersion(data){
	
	var temp_url = "{{ site.url }}{{site.baseurl }}/";
	window.location = temp_url + 'v'+data.value;
}
	
