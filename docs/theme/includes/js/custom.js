var temp_pr_version = document.location.href.toString().split('/');
var new_url = document.location.href.toString().split(temp_pr_version[4]);
var pg_cur,pg_pp,pg_pn,pg_st,pg_en;

setTimeout(function(){
	document.getElementById("ept-prd-vr").value= parseInt(temp_pr_version[4].toString().replace('v',''))
},1000);

setTimeout(function(){
	$(document).ready(function() {
		// set class and add nav-expander class
		if($( window ).width() >= 1023 ){
			$(".site-nav").css("display","block");
		}
		$('.site-nav ul li ul').addClass('nav-list');
		$('.site-nav ul li ul li').addClass('nav-list-item');
		$('.site-nav ul li ul li a').addClass('nav-list-link');		

		$(".has_child").each(function() {
			$(this).find('a').first().before('<a href="#" class="nav-list-expander"><svg viewBox="0 0 24 24"><use xlink:href="#svg-arrow-right"></use></svg></a>');
		});
		$(".site-nav .nav-list-link").each(function(index) {
		    if( $(this).text().toString().length >= 3 )
		    {
		    	
		        if( $(this).prop("href").toString().split(temp_pr_version[4])[1] === new_url[1])
				{	
					$(this).parent('li').addClass('active');
					$(this).parents('li').addClass('active');
					$(this).addClass('active');
				}
		    }
		    else{
		        $(this).remove();
		    }
			
		});
		
		//set custom attribute for the pagination
		setTimeout(function(){
			$(".site-nav .nav-list-link").each(function(index) {
		    		$(this).attr("cur-pg",index);
			});
		},1500);

		//get Current,Previous and Next Page
		setTimeout(function(){
			$( ".nav-list-link" ).each(function(index) {
			    if($(this).hasClass('active')){
			        pg_cur = parseInt($(this).attr("cur-pg"));
			        pg_pp = pg_cur - 1;
			        pg_pn = pg_cur + 1;
			        pg_st = parseInt($("#site-nav ul li:first a").attr('cur-pg'));
			        pg_en = parseInt($("#site-nav ul li:last a").attr('cur-pg'));
			    }
			});
			
		},4000);
		$(".ept_pp").click(function(){
			if(pg_pp >= 0){
				$(".nav-list-link").each(function(index) {
					console.log($(this).val());
					if(parseInt($(this).attr('cur-pg')) === pg_pp ){

						$(this).click();
					}
				});	
			}
			//window.location = $("#site-nav ul li:first a").attr('href');	
		});
		$(".ept_pn").click(function(){
			console.log('in next call');
			//window.location = $("#site-nav ul li:first a").attr('href');
		});

		if(temp_pr_version[5] == '' || temp_pr_version[5] == undefined)
		{
			// Fire nav click event once body is ready
			window.location = $("#site-nav ul li:first a").attr('href');
		}
		//set link in Product Name
		var temp_pr_name_link = $(".ept_a_prd_logo").attr('href') + temp_pr_version[4];
		$(".ept_a_prd_logo").attr('href',temp_pr_name_link);
		
		//hide nav bar panel
		$('.ept_nav_arr_hide').click(function(){
			$('#site-nav').hide('slide', {direction: 'left'}, 1000);
		});
	});
},1000);

function changeProductVersion(data){
	
	var temp_url = "{{ site.url }}{{site.baseurl }}/";
	window.location = temp_url + 'v'+data.value;
}

