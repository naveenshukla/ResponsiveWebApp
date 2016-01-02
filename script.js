$(document).ready(function()
{
  $.getJSON('test.json', function(json) {
    var arrayLength = Object.keys(json.events.event).length;
    var notifLength = Object.keys(json.notifications.notification).length;
    var htmlData = "<table><tr><th>EVENTS</th></tr>";
    for(var i=0; i<arrayLength; i++){
    	htmlData  = htmlData + "<tr><td><p>Event Name</p><p>" + json.events.event[i].eventName + "</p></td><td><p>" +  json.events.event[i].Date + 
    	"</p><p>" + json.events.event[i].Time + "</p></td>" + "<td><a href='eventdetails.html'><button>View</button></a></td></tr>";
    }
    htmlData = htmlData + "</table>";
     $("div.events-one").html(htmlData);
     $("table").addClass("tableClass");
     $("th").addClass("thTd");
     $("th").addClass("headerText");
     $("td").addClass("thTd");
     $("button").addClass("btn btn-info viewButton");
     $("td>button").onclick
     $("tr>td:first-child>p:first-child").addClass("Bold");
     $("tr>td:first-child>p:nth-child(2)").addClass("Italics");
     var notifData = "<table><tr><th>NOTIFICATIONS</th></tr>";
     for(var i=0; i<notifLength; i++){
    	notifData  = notifData + "<tr><td><p>" + json.notifications.notification[i].notify + "</p><p>" 
    	+ json.notifications.notification[i].Overdue + "</p></td>"  + "<td><button>View</button></td></tr>";
    }
    notifData = notifData + "</table>";
    $("div.events-three").html(notifData);
    $("table").addClass("tableClass");
     $("th").addClass("thTd");
     $("th").addClass("headerText");
     $("td").addClass("thTd");
     $("button").addClass("btn btn-info viewButtonShorter");
     $("tr>td:first-child>p:first-child").addClass("Bold");
     $("tr>td:first-child>p:nth-child(2)").addClass("Italics");
	});
  	$('#calendar').datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    });
     $("#searchIcon").click(function() {
      var _this = $(this);
      var current = _this.attr("src");
      var swap = _this.attr("data-swap");     
     _this.attr('src', swap).attr("data-swap",current);
       $(".searchBox").toggle(10);  
	});  
     $.get("header.html", function(data){
    $('#grad').html(data);
	});
	$.get("sidebarnavigation.html",function(data){
		$('.sidebar-navigation').html(data);
	});
});