;jQuery(document).ready(function($) {
	var repo = $("#last-commit").data('repo');
	var repo = repo.split('/');

	$.ajax({
			url: 'https://api.github.com/repos/'+repo[0]+'/'+repo[1]+'/commits',
			dataType: 'jsonp',
			cache: true,
			error: function() {
				$('#last-commit').html('<div class="last-commit">'+
										'<p><span style=\"color:0xff0000\">Can\'t reach to github </span></p></div>'
									  );
			},        
			success: function(results) {
				$('#last-commit').html('<div class="last-commit">'+
										'<p> Last changed: '+new Date(results.data[0].commit.author.date).toLocaleString()+'</p>'+
										'</div>'
									  );
		}
	});
});
