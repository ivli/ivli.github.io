;jQuery(document).ready(function($) {
	var ins = ['c','o','m', 'i','g','o','r','l','i','k','h','a','c','h','e','v','g','m','a','i','l'];
	var ndx = [ 21, 22, 23, 0,  1,  2,  3,  5,  6,  7,  8,  9, 10, 11, 12, 13, 15, 16, 17, 18, 19];
	var outs = new Array();
	outs[14] = '@';
	outs[20] = outs[4] = '.';
	for(var i=0; i<ndx.length; ++i) 
		outs[ndx[i]] = ins[i]; 

	$('#email-me').html('<a href=\"mailto:' 
		+ outs.join('')
		+ '"\"\\> Email Me </a>'
	);
});