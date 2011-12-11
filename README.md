#Linkify jQuery Plugin v1.0.0
Copyright (c) 2011 Dobot. Licensed under the MIT license.

##Overview
A jQuery plugin that parses plain text and attempts to match recognised patterns and interpolate them into templates.

Current recognised patterns include:

- links e.g. http://dobot.github.com/
- emails e.g. paul.dixon@mintbridge.co.uk
- twitter usernames e.g. @dobot
- twitter hashtags e.g. #dobotisawesome


Patterns can easily be added, modified and disabled.

##Usage
```javascript
var text = "I'm using using @dobot to do #awesome things for me, check him out at https://dobot.github.com/";
var linkified = $.linkify(text);
```
will give you:

I'm using using <a href="http://twitter.com/#!/dobot">@dobot</a> to do <a href="http://twitter.com/#!/search?q=%23awesome">#awesome</a> things for me, check him out at <a href="https://dobot.github.com/">https://dobot.github.com/</a>

##Options
You can pass a hash of options as the second parameter to disable, change and add new types to the default ones:

###Disabling types
To disable types, simply pass the name of the type set to false:

```javascript
var text = "I'm using using @dobot to do #awesome things for me, check him out at http://dobot.github.com/";
var options = {
	user: false
}
var linkified = $.linkify(text, options);
```
which will turn off the twitter user type and give you:

I'm using using @dobot to do <a href="http://twitter.com/#!/search?q=%23awesome">#awesome</a> things for me, check him out at <a href="http://dobot.github.com/">http://dobot.github.com/</a>

###Adding types
You can new types to linkify by passing a regex to match and a template to return, for example you could add a simple
 date type

```javascript
var text = "My name is dobot and i was born on 2011/09/26";
var options = {
	dates: {
		regex: /(^|\s)(\d{4})([- /.])(\d{2})([- /.])(\d{2})/i,
		template: '$1<span class="date">$6-$4-$2</span>'
	}
}
var linkified = $.linkify(text, options);
```
which will re format the date and wrap it in a <span> element to give you:

My name is dobot and i was born on <span class="date">26-09-2011</span>