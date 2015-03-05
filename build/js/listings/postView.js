function post(full_name){
	console.log('viewing post: ', full_name)

	$.get("/reddit-api/templates/postView.jade", function(template) {

		var html = jade.render(template, {item: full_name})
		   
		$("#details").html(html)

	})
}