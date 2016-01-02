$(document).ready(function()
{
  $.getJSON('test.json', function(json) {
	});
       
     $.get("header.html", function(data){
    $('#grad').html(data);
	});
	$.get("sidebarnavigation.html",function(data){
		$('.sidebar-navigation').html(data);
	});
});