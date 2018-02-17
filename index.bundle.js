'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var postcss = _interopDefault(require('postcss'));

var focusVisibleSelectorRegExp = /:focus-visible([^\w-]|$)/gi;

var index = postcss.plugin('postcss-focus-visible', function (opts) {
	var replaceWith = String(Object(opts).replaceWith || '.focus-visible');

	return function (root) {
		root.walkRules(focusVisibleSelectorRegExp, function (rule) {
			rule.selector = rule.selector.replace(focusVisibleSelectorRegExp, function ($0, $1) {
				return `${replaceWith}${$1}`;
			});
		});
	};
});

module.exports = index;
