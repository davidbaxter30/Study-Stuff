'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

	constructor: function () {
		generators.Base.apply(this, arguments); 
	}, 

	initializing: function () {
	},

	prompting: function () {
	},

	configuring: function () {
	},

	writing: {
		gulpfile: function() {
		},

		packageJSON: function() {
		},

		git: function() {
		},

		bower: function() {
			var bowerJson = {
				name: 'my-app', 
				license: 'MIT', 
				dependencies: {}				
			}
			bowerJson.dependencies['angular'] = '~1.4.6';
			bowerJson.dependencies['angular-bootstrap'] = '~0.13.4';
			bowerJson.dependencies['angular-ui-router'] = '~0.2.15';
			bowerJson.dependencies['bootstrap-css-only'] = '~3.3.5';
			bowerJson.dependencies['lodash'] = '~3.10.1';
			bowerJson.dependencies['moment'] = '~2.10.6';
			bowerJson.dependencies['angular-ui-utils'] = '~3.0.0';
			this.fs.writeJSON('bower.json', bowerJson);
		},

		appStaticFiles: function() {
			this.copy('_favicon.ico', 'src/favicon.ico');
			this.directory('styles', 'src/styles');
		}, 

		scripts: function() {
			this.fs.copyTpl(
				this.templatePath('src/app/_noterious.js'),
				this.destinationPath('src/app/noterious.js')
			);
			this.fs.copyTpl(
				this.templatePath('src/app/boards/_boards-controller.js'),
				this.destinationPath('src/app/boards/noterious.js')
			);
			this.fs.copyTpl(
				this.templatePath('src/app/common/_common.js'),
				this.destinationPath('src/app/common/common.js')
			);
			this.fs.copyTpl(
				this.templatePath('src/app/login/_login-controller.js'),
				this.destinationPath('src/app/login/login-controller.js')
			);
			this.fs.copyTpl(
				this.templatePath('src/app/main/_main-controller.js'),
				this.destinationPath('src/app/main/main-controller.js')
			);
		},

		html: function() {
			this.fs.copyTpl(
				this.templatePath('_index.html'),
				this.destinationPath('src/index.html'),
				{
					appname: 'My cool app', 
					ngapp: 'myapp'
				}
			);
			this.fs.copy(
				this.templatePath('src/app/boards/_boards-mdv.tmpl.html'),
				this.destinationPath('src/app/boards/boards-mvd.tmpl.html')
			);
			this.fs.copy(
				this.templatePath('src/app/login/_login.tmpl.html'),
				this.destinationPath('src/app/login/login.tmpl.html')
			);
			this.fs.copy(
				this.templatePath('src/app/main/_main.html'),
				this.destinationPath('src/app/main/main.html')
			);
		},

	}, 

	conflicts: function() {

	},

	install: function() {

	},

	end: function() {

	}
})