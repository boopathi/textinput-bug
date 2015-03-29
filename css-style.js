var css = require('css-layout');

var textinputstyle = function(x) {
	return {
		height: 20,
		top: x * 50
	};
};

var styles = {
	container: {
		flex: 1,
		top: 50,
	},
	subc: {},
	textinput1: textinputstyle(1),
	textinput2: textinputstyle(2)
};

// object model
var om = {
	style: styles.container,
	children: [
		{
			style: styles.subc,
			children: [
				{
					style: styles.textinput1
				}
			]
		},
		{
			style: styles.textinput2
		}
	]
};

console.log(JSON.stringify(css(om), null, 2));
