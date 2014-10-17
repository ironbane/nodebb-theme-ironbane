(function(module) {
	"use strict";

	var async = require('async'),
		fs = require('fs'),
		path = require('path'),
		templates = module.parent.require('../public/src/templates');

	var Theme = {
		templates: {}
	};

	Theme.defineWidgetAreas = function(areas, callback) {
		areas = areas.concat([
			{
				'name': 'Homepage Sidebar',
				'template': 'home.tpl',
				'location': 'sidebar'
			},
			{
				'name': 'Category Sidebar',
				'template': 'category.tpl',
				'location': 'sidebar'
			}
		]);

		callback(null, areas);
	};


	Theme.defineWidgets = function(widgets, callback) {
		widgets = widgets.concat([
			{
				widget: "news",
				name: "Ironbane News Topics",
				description: "The ironbane news topics.",
				content: 'Blabla'
			}
		]);

		callback(null, widgets);
	};

	Theme.renderNews = function(widget, callback) {
		var html = Theme.templates['news.tpl'];

		html = templates.parse(html, false);

		callback(null, html);
	};

	Theme.init = function(express, middleware, controllers, callback) {
		var templatesToLoad = [
			"news.tpl"
		];

		function loadTemplate(template, next) {
			fs.readFile(path.resolve(__dirname, '../templates/' + template), function (err, data) {
				if (err) {
					console.log(err.message);
					return next(err);
				}
				Theme.templates[template] = data.toString();
				next(null);
			});
		}

		async.each(templatesToLoad, loadTemplate);

		callback();
	};

	module.exports = Theme;

}(module));