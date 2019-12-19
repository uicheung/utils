// 执行loadscript.js

var loadscript = {
	$$: function(id) {
		return document.getElementById(id);
	},
	tag: function(element) {
		return document.getElementsByTagName(element);
	},
	ce: function(element) {
		return document.createElement(element);
	},
	js: function(url, callback) {
		var s = loadscript.ce('script');
		s.type = "text/javascript";
		s.src = url;
		if (document.documentMode == 10 || document.documentMode == 9) {
			s.onerror = s.onload = loaded;
		} else {
			s.onreadystatechange = ready;
			s.onerror = s.onload = loaded;
		}
		loadscript.tag('head')[0].appendChild(s);

		function ready() { /*IE7.0/IE10.0*/
			if (s.readyState == 'loaded' || s.readyState == 'complete') {
				callback();
			}
		}

		function loaded() { /*chrome/IE10.0*/
			callback();
		}
	}
};

