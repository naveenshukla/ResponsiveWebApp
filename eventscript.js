$(document).ready(function()
{
	$.get("header.html", function(data){
	var newhtml = '<a href="index.html"><img src="navigatebefore.svg"  id="navigateBefore"><p id="navigateText">Back</p></a>';
	data = newhtml + data;
	console.log(data);
    $('#grad').html(data);
	});
	$.get("sidebarnavigation.html",function(data){
		$('.sidebar-navigation').html(data);
	});
	$.getJSON('test.json',function(data){
			var htmlData = "<table><tr><th>EVENTS</th></tr>";
			htmlData = htmlData + "<tr><td><p>Event Name</p></td>" + "<td><p>" + data.eventDetails.eventName + "</p></td></tr>" + 
			"<tr><td><p>Event Type</p></td>" + "<td><p>" + data.eventDetails.eventType + "</p></td></tr>" + 
			"<tr><td><p>Event/Intake Date</p></td>" + "<td><p>" + data.eventDetails.eventIntakeDate +  "</p></td></tr>" + 
			"<tr><td><p>Event Date</p></td>" + "<td><p>" + data.eventDetails.eventDate + "</p></td></tr>" +
			"<tr><td><p>Event Owner</p></td>" + "<td><p>" + data.eventDetails.eventOwner + "</p></td></tr>" +
			"<tr><td><p>Translation Required</p></td>" + "<td><p>" + data.eventDetails.translationRequired +  "</p></td></tr>" +
			"<tr><td><p>Trip Details Required</p></td>" + "<td><p>" + data.eventDetails.tripDetails +  "</p></td></tr>" +
			"<tr><td><p>Trip Location</p></td>" + "<td><p>" + data.eventDetails.tripLocation +  "</p></td></tr>" +
			"<tr><td><p>Trip Date</p></td>" + "<td><p>" + data.eventDetails.tripDate + "</p></td></tr>" +
			"<tr><td><p>Approval Date</p></td>" + "<td><p>" + data.eventDetails.approvalDate + "</p></td></tr>"+
			"<tr><td><p>Review Date</p></td>" + "<td><p>" + data.eventDetails.reviewDate +  "</p></td></tr>";
			htmlData = htmlData + "</table>";
			$(".eventDetails").html(htmlData);
			 $("table").addClass("tableClass");
     		$("th").addClass("thTd");
     		$("th").addClass("headerText");
     		$("td").addClass("thTd");
     		$("button").addClass("btn btn-info viewButton");
     		var taskData = "<table><tr><th>EVENT TASKS</th></tr>";
     		taskData = taskData + "<tr><th>TASK TYPE</th><th>TASK OWNER</th><th>TASK DUE DATE</th></tr>";
     		var arrayLength = Object.keys(data.eventTasks.eventTask).length;
     		for(var i=0; i<arrayLength; i++){
     			taskData = taskData + "<tr><td><p>" + data.eventTasks.eventTask[i].taskType + "</p></td><td><p>" + data.eventTasks.eventTask[i].taskOwner + 
     			"</p></td><td><p>" + data.eventTasks.eventTask[i].taskDueDate + "</p></td><td><button>" + "View" + "</button></td></tr>";
     		}
     		taskData = taskData + "</table>";
     		$(".eventTasks").html(taskData);
    		$("table").addClass("tableClass");
     		$("th").addClass("thTd");
     		$("th").addClass("headerText");
     		$("td").addClass("thTd");
     		$("button").addClass("btn btn-info viewButtonShorter");
     		$("tr>td:first-child>p:first-child").addClass("Bold");

     		var documentData = "<table><tr><th>DOCUMENTS</th></tr><tr><td><b>DOCUMENT NAME</b></td><td><b>PUBLISH DATE</b></td></tr><tr><td><b>"
     		+ data.documents.documentname[0].title + "</b></td></tr>";
     		var docLength = Object.keys(data.documentsDetails.documentsDetail).length;
     		for(var i=0; i<docLength; i++){
     			documentData = documentData + "<tr><td><b>" + data.documentsDetails.documentsDetail[i].documentName + 
     			"</b></td><td><p>" + data.documentsDetails.documentsDetail[i].publishDate + "</p></td><td><button>DOWNLOAD</button></td><td><button>VIEW</button></td></tr>";
     		} 
     		documentData = documentData + "</table>";
     		$(".documents").html(documentData);
    		$("table").addClass("tableClass");
     		$("th").addClass("thTd");
     		$("th").addClass("headerText");
     		$("td").addClass("thTd");
     		$("td:nth-child(4)>button").addClass("btn btn-info viewButtonShorter");
     		$("td:nth-child(3)>button").addClass("greenButton");
	});
});