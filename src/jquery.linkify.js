/*
 * Linkify jQuery Plugin v1.0.0
 *
 * Copyright (c) 2011 Dobot (http://dobot.github.com/)
 * Licensed under the MIT license.
 *
 */

(function($){
	$.extend({
		linkify: function(str, options) {
			var defaults = {
				link: {
					regex: /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
					template: "<a href=\"$1\">$1</a>"
				},
				user: {
					regex: /((?:^|[^a-zA-Z0-9_!#$%&*@＠]|RT:?))([@＠])([a-zA-Z0-9_]{1,20})(\/[a-zA-Z][a-zA-Z0-9_-]{0,24})?/g,
					template: '$1<a href="http://twitter.com/#!/$3$4">@$3$4</a>'
				},
				hash: {
					regex: /(^|\s)#(\w+)/g,
					template: '$1<a href="http://twitter.com/#!/search?q=%23$2">#$2</a>'
				},
				email: {
					regex: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,
					template: '<a href=\"mailto:$1\">$1</a>'
				}
			};

			var types = $.extend(defaults, options);

			$.each(types, function(name, type) {
				str = str.replace(type.regex, type.template);
			});

			return str;
		}
	});
})(jQuery);
