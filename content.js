console.log('Removing notification area');
$("a[title='Notifications'], span.gbsup").remove();

// Some additional code to show that we have a separate window object for the content script and origin site
console.log($)

// Some additional code to show that we're not subject to the same-origin policy
$.get('http://notconf.com/', function(data) {
	console.log('woo fetched from a non origin site!')
})
