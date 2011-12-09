/*
 * Linkify jQuery Plugin v1.0.0
 *
 * Copyright (c) 2011 Dobot (http://dobot.github.com/)
 * Licensed under the MIT license.
 *
 */

(function($){
	$.extend({
		linkify: function(str) {
			var types = {
				link: {
					regex: /[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g,
					prefix: '',
					filter: function(text) { return text; }
				},
				user: {
					regex: /[@]+[A-Za-z0-9-_]+/g,
					prefix: 'http://twitter.com/#!/',
					filter: function(text) { return text.replace("@",""); }
				},
				hash: {
					regex: /[#]+[A-Za-z0-9-_]+/g,
					prefix: 'http://twitter.com/#!/search?q=',
					filter: function(text) { return text.replace("#","%23"); }
				}
			}
			$.each(types, function(name, type) {
				str = str.replace(type.regex, function(match) {
					return match.link(type.prefix + type.filter(match));
				});
			})
			return str;
		}
	});
})(jQuery);
