
var temp_pr_version = document.location.href.toString().split('/');
var new_url = document.location.href.toString().split(temp_pr_version[4])

setTimeout(function(){
	document.getElementById("ept-prd-vr").value= parseInt(temp_pr_version[4].toString().replace('v',''))
},1000);

setTimeout(function(){
	$(document).ready(function() {
		$(".site-nav").css("display","block");
		$('.site-nav ul li ul').addClass('nav-list');
		$('.site-nav ul li ul li').addClass('nav-list-item');
		$('.site-nav ul li ul li a').addClass('nav-list-link');		

		$(".has_child").each(function() {
			$(this).find('a').first().before('<a href="#" class="nav-list-expander"><svg viewBox="0 0 24 24"><use xlink:href="#svg-arrow-right"></use></svg></a>');
		});
		if(temp_pr_version[5] == '' || temp_pr_version[5] == undefined)
		{
// 			window.location = $("#site-nav ul li:first a").attr('href');
		}
		$(".site-nav .nav-list-link").each(function() {
			console.log($(this).prop("href"));
			console.log(new_url[1]);
			if( $(this).prop("href").toString().split(temp_pr_version[4])[1] === new_url[1])
			{
				$(this).parent('li').addClass('active');
				$(this).parents('li').addClass('active');
				$(this).addClass('active');
			}
		});
		
		
	});
},1000);

function changeProductVersion(data){
	
	var temp_url = "{{ site.url }}{{site.baseurl }}/";
	window.location = temp_url + 'v'+data.value;
}

