webpackJsonp([57,210],{

/***/ 1802:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "Lookup Patterns"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "example of Certain Category",
	    "description": "The keyword of the user query is only displayed in three categories, Topics, Questions and Articles.",
	    "src": "https://os.alipayobjects.com/rmsportal/fgQfkNakHrUiAun.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "example of Uncertain Category",
	    "description": "The number of categories the keyword of the user query belongs to is uncetain.",
	    "src": "https://os.alipayobjects.com/rmsportal/hUfCsXwnOsVlskl.png"
	  }]], ["p", "Auto Complete: As the user types input into a field, a drop-down menu of matching values is displayed.\nDepending on the categories of search results, it can be divided into two types, Certain Category and Uncertain Category."], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "example of Live Search",
	    "description": "When the user type a search value, the system instantly displays the search results.",
	    "src": "https://os.alipayobjects.com/rmsportal/OyJCVmOigyXKWCf.png"
	  }]], ["p", "Live Suggest: Live Suggest provides real-time search term suggestions for creating a search."], ["p", ["br"]], ["p", "Refining Search: Refining Search provides a set of live filters that allow the search results to be tuned in real time. Learn more on ", ["a", {
	    "title": null,
	    "href": "/docs/pattern/advanced-search"
	  }, "Pattern/Advanced Search"], "."], ["p", ["br"]], ["hr"], ["h2", "Live Suggest"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "example of Live Preview",
	    "description": "Depending on the type of the input from the user, the system provides instant feedback on password strength and validation.",
	    "src": "https://os.alipayobjects.com/rmsportal/jecYhRgfbHleGDJ.png"
	  }]], ["p", "Live Preview: A Live Preview gives the users a glimpse beforehand of how the application will interpret their input once submitted."], ["blockquote", ["p", "Note: An ounce of prevention is worth a pound of cure. Use Live Previews to prevent errors."]], ["p", ["br"]], ["p", "Progressive Disclosure: When users are faced with a series of steps, it is often best to provide hints only when they are needed, instead of cluttering the interface by displaying all the hints at once. Learn more cases on ", ["a", {
	    "title": null,
	    "href": "/docs/spec/stay#Process-Flows"
	  }, "Stay on the Page/Progressive Disclosure"], "。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "example of Loading Button",
	    "src": "https://os.alipayobjects.com/rmsportal/FBAZGqfeUnDlUtw.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "example of Loading Table",
	    "src": "https://os.alipayobjects.com/rmsportal/FPXsINbTgsuSStI.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "example of Loading List",
	    "src": "https://os.alipayobjects.com/rmsportal/WJqeUHzthTXaHnW.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "example of Loading Page",
	    "src": "https://os.alipayobjects.com/rmsportal/qPWjexSmFfCiLVJ.png"
	  }]], ["p", "Progress Indicator: Progress Indicators keep a conversation going with the user when the rest of the interface is currently unavailable. Common Progress Indicators, such as Loading Button, Loading Table, Loading List and Loading Page, can be displayed respectively according to the frequency and importance of operation."], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "example of Click Refresh",
	    "src": "https://os.alipayobjects.com/rmsportal/DdmWqoqIFSCSAvq.png"
	  }]], ["p", "Click Refresh: Click Refresh notifies the user of fresh content and provides button or tool to refresh."], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "example of Periodic Refresh",
	    "description": "The added list item turns to be highlighted and get back to normal in a few seconds.",
	    "src": "https://os.alipayobjects.com/rmsportal/guiuShsfpJzxZQx.png"
	  }]], ["p", "Periodic Refresh: Periodic Refresh brings in fresh content on a periodic basis without direct user interaction."]],
	  "meta": {
	    "category": "Principles",
	    "order": 10,
	    "title": "React Immediately",
	    "filename": "docs/spec/reaction.en-US.md"
	  },
	  "description": ["section", ["p", "Invitations are powerful because they directly address discoverability and provide feedback before an interaction happens. Transitions are useful because they provide visual feedback during an interaction. But another class of feedback exists. It is the feedback that happens immediately after each interaction with the system, an immediate reaction paired with the user’s action."], ["p", "While we can’t literally extend Newton’s law to the world of user interfaces, we certainly can apply this principle to the way we should interact with users. When users click on a button, they expect the button to depress. When they type in a field, they expect to see characters show up in the text box. When they make a mistake, they want the application to tell them where they goofed."], ["p", "While there is a possibility of too much feedback (or, more accurately, too much of the wrong feedback—a concept we will discuss in the upcoming chapters), a system with little or no feedback feels sluggish and thickheaded."], ["blockquote", ["p", ["strong", " Newton’s Third Law of Motion "], ": For every action, there is an equal and opposite reaction, from Wikipedia."]]],
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Lookup-Patterns"
	  }, "Lookup Patterns"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Live-Suggest"
	  }, "Live Suggest"]]]
	};

/***/ }

});