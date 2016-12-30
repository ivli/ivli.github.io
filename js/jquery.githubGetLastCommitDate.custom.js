;jQuery(document).ready(function($) {
	var repo = $("#last-commit").data('repo');
	var vendorName = repo.split('/')[0]; 
	var	repoName   = repo.split('/')[1];

	$.ajax({
			url: 'https://api.github.com/repos/'+vendorName+'/'+repoName+'/commits',
			dataType: 'jsonp',
			cache: true,
			error:  function() {
				alert( "shit happens" );
			},        
			success: function(results) {
				var date = new Date(results.data[0].commit.author.date);
				var last_commit = date.getFullYear() + ':' +  (date.getMonth() + 1) + ':' + date.getDate();

				$('#last-commit').html('<div class="last-commit">'
									   +'<p>'
									   + 'Last changed on: '
									   + last_commit + '</p>'
									   + '</div>');
		}
	});
});
