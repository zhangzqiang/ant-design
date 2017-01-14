webpackJsonp([160,210],{

/***/ 1531:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "提及组件。"], ["h2", "何时使用"], ["p", "用于在输入中提及某人或某事，常用于发布、聊天或评论功能。"]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "提及",
	    "type": "Data Entry",
	    "title": "Mention",
	    "filename": "components/mention/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Mention</span>\n  <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n  <span class=\"token attr-name\">suggestions</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'jljsj33'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'dqaria'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n<span class=\"token punctuation\">/></span></span>"
	  }, ["code", "<Mention\n  onChange={onChange}\n  suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}\n/>"]], ["h3", "Mention API"], ["table", ["thead", ["tr", ["th", "API"], ["th", "说明"], ["th", "类型"]]], ["tbody", ["tr", ["td", "toString"], ["td", "把 EditorState 转成字符串"], ["td", "Function(editorState: EditorState): String"]], ["tr", ["td", "toEditorState"], ["td", "把字符串转成 EditorState"], ["td", "Function(string: String): EditorState"]], ["tr", ["td", "getMentions"], ["td", "获取当前 editorState 中提到的人的列表"], ["td", "Function(editorState: EditorState): Array", ["string"]]]]], ["h3", "Mention props"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "suggestions"], ["td", "建议内容"], ["td", "Array", ["string"], " or Array<Mention.Nav>"], ["td", "[]"]], ["tr", ["td", "suggestionStyle"], ["td", "弹出下拉框样式"], ["td", "Object"], ["td", "{}"]], ["tr", ["td", "onSearchChange"], ["td", "输入框中 @ 变化时回调"], ["td", "function(value:String)"], ["td", "[]"]], ["tr", ["td", "onChange"], ["td", "输入框内容变化时回调"], ["td", "function(editorState: EditorState)"], ["td", "null"]], ["tr", ["td", "onSelect"], ["td", "下拉框选择建议时回调"], ["td", "function(suggestion: String, data?: any)"], ["td", "null"]], ["tr", ["td", "notFoundContent"], ["td", "未找到时的内容"], ["td", "string"], ["td", "'无匹配结果，轻敲空格完成输入'"]], ["tr", ["td", "loading"], ["td", "加载中"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "multiLines"], ["td", "多行模式"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "prefix"], ["td", "触发弹出下拉框的字符"], ["td", "string"], ["td", "'@'"]], ["tr", ["td", "placeHolder"], ["td", "输入框默认文字"], ["td", "string"], ["td", "null"]], ["tr", ["td", "defaultValue"], ["td", "默认值"], ["td", "EditorState, 可以用 Mention.toEditorState(text) 把文字转换成 EditorState"], ["td", "null"]], ["tr", ["td", "value"], ["td", "值"], ["td", "EditorState"], ["td", "null"]], ["tr", ["td", "getSuggestionContainer"], ["td", "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位"], ["td", "Function()"], ["td", "() => document.body"]], ["tr", ["td", "onFocus"], ["td", "获得焦点时回调"], ["td", "function()"], ["td", "null"]], ["tr", ["td", "onBlur"], ["td", "失去焦点时回调"], ["td", "function()"], ["td", "nul"]]]], ["h3", "Nav props"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "value"], ["td", "建议值，选择建议时，用此值插入到输入框中"], ["td", "string"], ["td", "\"\""]], ["tr", ["td", "children"], ["td", "建议内容"], ["td", "Object"], ["td", "{}"]]]]]
	};

/***/ }

});