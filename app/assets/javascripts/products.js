

$(document).on('ready page:load', function() {
	$('#search-form').submit(function(event){
		event.preventDefult();
		var serachValue = $('#search').val();

		$.get('/products?search=' + searchValue)
			.done(function(data){
				console.log(data);
			$('#products').html(data);
		});
	});
});