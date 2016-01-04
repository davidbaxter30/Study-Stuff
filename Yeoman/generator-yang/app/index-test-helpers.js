'use strict';

var generators = require('yeoman-generator');

var MyBase = generators.Base.extend({

	anotherHelper: function() {
		console.log('inside another helper'); 
	}

})
module.exports = MyBase.extend({

	constructor: function () {
		generators.Base.apply(this, arguments); 

		// this.argument('name', { type: String, require: true });
		// this.log('name:', this.name); 
	}, 

	init: function () {
		this.log('inside init');

		this.baz = function() {
			this.log('inside baz')
		}
	},

	_foo: function () {
		this.log('inside foo');
	},

	bar: function () {
		this.log('inside bar');
		this._foo(); 
		this.baz(); 
	},

	footwo: function () {
		this.argument('name', { type: String, require: true });
		this.log('name:', this.name); 
	}
})