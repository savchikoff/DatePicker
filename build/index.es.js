import e from 'react';
import n from 'styled-components';
function t(e, n) {
	return (
		Object.defineProperty
			? Object.defineProperty(e, 'raw', { value: n })
			: (e.raw = n),
		e
	);
}
'function' == typeof SuppressedError && SuppressedError;
var r,
	o,
	c,
	a = n.div(
		r ||
			(r = t(
				[
					'\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n  background-color: black;\n  color: white; ',
				],
				[
					'\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n  background-color: black;\n  color: white; ',
				]
			))
	),
	i = n.h1(
		o || (o = t(['\nfont - size: 32px;\n'], ['\nfont - size: 32px;\n']))
	),
	d = n.h2(c || (c = t([''], ['']))),
	l = function (n) {
		return (
			n.theme,
			e.createElement(
				a,
				{ 'data-testid': 'test-component' },
				e.createElement(i, { className: 'heading' }, "I'm the test component"),
				e.createElement(d, null, 'Made with love by Harvey')
			)
		);
	};
export { l as TestComponent };
//# sourceMappingURL=index.es.js.map
