Package.describe({
	summary: "Semantic UI Beta",
	version: "1.0.14",
	name: "lumatijev:semantic-ui-beta",
	git: "https://github.com/lumatijev/meteor-semantic-ui-beta.git"
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@1.0');
	api.use(['jquery'], 'client');

	var path = Npm.require('path');
	var assetPath = path.join('lib/semantic-ui-beta/dist/');
	var assetFiles = [
		assetPath + 'semantic.min.css',
		assetPath + 'semantic.min.js',
		assetPath + 'fonts/icons.eot',
		assetPath + 'fonts/icons.otf',
		assetPath + 'fonts/icons.svg',
		assetPath + 'fonts/icons.ttf',
		assetPath + 'fonts/icons.woff',
		assetPath + 'images/flags.png',
		assetPath + 'images/loader-large.gif',
		assetPath + 'images/loader-large-inverted.gif',
		assetPath + 'images/loader-medium.gif',
		assetPath + 'images/loader-medium-inverted.gif',
		assetPath + 'images/loader-mini.gif',
		assetPath + 'images/loader-mini-inverted.gif',
		assetPath + 'images/loader-small.gif',
		assetPath + 'images/loader-small-inverted.gif'
	];

	api.addFiles(assetFiles, 'client');
});
