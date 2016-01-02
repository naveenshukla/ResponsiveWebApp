$(document).ready(function(){
	$.getJSON('notification.json', function(data) {
		alert("notification.json");
    var arrayLength = Object.keys(data.notifications.notification).length;
    var htmlData = "<table><tr><th>NOTIFICATION</th></tr>"
    for(var i=0; i<arrayLength; i++){
    	htmlData  = htmlData + "<tr><td><p>" + data.notifications.notification[i].notify + "</p><p>" + 
    	data.notifications.notification[i].Overdue + "</p></td>" + "<td><button>View</button></td></tr>";
    }
    htmlData = htmlData + "</table>";
    console.log(htmlData);
     $("div.events-three").html(htmlData);
     $("table").addClass("tableClass");
     $("th").addClass("thTd");
     $("th").addClass("headerText");
     $("td").addClass("thTd");
     $("button").addClass("btn btn-info");
     $("tr>td:first-child>p:first-child").addClass("Bold");
     $("tr>td:first-child>p:nth-child(2)").addClass("Italics");
	});
});