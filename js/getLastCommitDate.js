;jQuery(document).ready(function($) {
	var repo = $("#last-commit").data('repo');
	var repo = repo.split('/');

	$.ajax({
			url: 'https://api.github.com/repos/'+repo[0]+'/'+repo[1]+'/commits',
			dataType: 'jsonp',
			cache: true,
			error: function() {
				$('#last-commit').html('<span style=\"color:0xff0000\">Can\'t reach to github </span>' );																			 
			},        
			success: function(results) {
				$('#last-commit').html('<span> Last changed: '+new Date(results.data[0].commit.author.date).toLocaleString()+'</span>');					 
		}
	});
});
