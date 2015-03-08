function post(url, title){
	console.log('viewing post: ', url)

	$.get("/reddit-api/templates/postView.jade", function(template) {

		var html = jade.render(template, {url: url, title: title})
		   
		$("#details").html(html)

	})
}