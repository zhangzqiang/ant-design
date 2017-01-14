webpackJsonp([175,210],{

/***/ 1478:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc."], ["h2", "Form"], ["p", "You can align the controls of a ", ["code", "form"], " using one of the following attributes："], ["ul", ["li", ["p", ["code", "horizontal"], "：to horizontally align the ", ["code", "label"], "s and controls of the fields. (Default)"]], ["li", ["p", ["code", "vertical"], "：to vertically align the ", ["code", "label"], "s and controls of the fields."]], ["li", ["p", ["code", "inline"], "：to render form fields in one line."]]], ["h2", "Form fields"], ["p", "A form consists of one or more form fields whose type includes input, textarea, checkbox, radio, select, tag, and more.\nA form field is defined using ", ["code", "<Form.Item />"], "."], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token operator\">&lt;</span>Form<span class=\"token punctuation\">.</span>Item <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n  <span class=\"token punctuation\">{</span>children<span class=\"token punctuation\">}</span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form.Item</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<Form.Item {...props}>\n  {children}\n</Form.Item>"]], ["blockquote", ["p", "PS：By default, large size controls are used within a form."]]],
	  "meta": {
	    "category": "Components",
	    "type": "Data Entry",
	    "cols": 1,
	    "title": "Form",
	    "filename": "components/form/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Form"
	  }, "Form"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Form-fields"
	  }, "Form fields"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["h3", "Form"], ["p", ["strong", "more example ", ["a", {
	    "title": null,
	    "href": "http://react-component.github.io/form/"
	  }, "rc-form"]], "。"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default Value"]]], ["tbody", ["tr", ["td", "form"], ["td", "Decorated by ", ["code", "Form.create()"], " will be automatically set ", ["code", "this.props.form"], " property, so just pass to form, you don't need to set it by yourself after 1.7.0."], ["td", "object"], ["td", "n/a"]], ["tr", ["td", "vertical"], ["td", "Use vertical layout."], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "inline"], ["td", "Use inline alignment."], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "onSubmit"], ["td", "Defines a function will be called if form data validation is successful."], ["td", "Function(e:Event)"], ["td"]]]], ["h3", "Form.create(options)"], ["p", "How to use："], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">class</span> <span class=\"token class-name\">CustomizedForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span>\n\nCustomizedForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>CustomizedForm<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "class CustomizedForm extends React.Component {}\n\nCustomizedForm = Form.create({})(CustomizedForm);"]], ["p", "The following ", ["code", "options"], " are available:"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"]]], ["tbody", ["tr", ["td", "onFieldsChange"], ["td", "Specify a function that will be called when the value a ", ["code", "Form.Item"], " gets changed. Usage example: saving the field's value to Redux store."], ["td", "Function(props, fields)"]], ["tr", ["td", "mapPropsToFields"], ["td", "Convert props to corresponding field value. Usage example: reading the values from Redux store."], ["td", "Function(props): Object{ fieldName: Object{ value } }"]]]], ["p", "If the form has been decorated by ", ["code", "Form.create"], " then it has ", ["code", "this.props.form"], " property. ", ["code", "this.props.form"], " provides some APIs as follows:"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"]]], ["tbody", ["tr", ["td", "getFieldsValue"], ["td", "Get the specified fields' values. If you don't specify a parameter, you will get all fields' values."], ["td", "Function([fieldNames: string[]])"]], ["tr", ["td", "getFieldValue"], ["td", "Get the value of a field."], ["td", "Function(fieldName: string)"]], ["tr", ["td", "setFieldsValue"], ["td", "Set the value of a field.(Note: please don't use it in ", ["code", "componentWillReceiveProps"], ", otherwise, it will cause an endless loop, ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2985"
	  }, "more"], ")"], ["td", "Function({ ", "[fieldname]", ": value }"]], ["tr", ["td", "setFields"], ["td"], ["td", "Function(obj: object)"]], ["tr", ["td", "setFields"], ["td", "Set the value and error of a field. ", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/form/blob/3b9959b57ab30b41d8890ff30c79a7e7c383cad3/examples/server-validate.js#L74-L79"
	  }, "Code Sample"]], ["td", "Function({ ", "[fieldname]", ": { value: any, errors: ", "[error]", " } })"]], ["tr", ["td", "validateFields"], ["td", "Validate the specified fields and get theirs values and errors."], ["td", "Function([fieldNames: string[]], ", "[options: object]", ", callback: Function(errors, values))"]], ["tr", ["td", "validateFieldsAndScroll"], ["td", "This function is similar to ", ["code", "validateFields"], ", but after validation, if the target field is not in visible area of form, form will be automatically scrolled to the target field area."], ["td", "same as ", ["code", "validateFields"]]], ["tr", ["td", "getFieldError"], ["td", "Get the error of a field."], ["td", "Function(name)"]], ["tr", ["td", "isFieldValidating"], ["td", "Check if the specified field is being validated."], ["td", "Function(name)"]], ["tr", ["td", "resetFields"], ["td", "Reset the specified fields' value(to ", ["code", "initialValue"], ") and status. If you don't specify a parameter, all the fields will be reset."], ["td", "Function([names: string[]])"]], ["tr", ["td", "getFieldDecorator"], ["td", "Two-way binding for form, please read below for details."], ["td"]]]], ["h3", "this.props.form.getFieldDecorator(id, options)"], ["p", "After wrapped by ", ["code", "getFieldDecorator"], ", ", ["code", "value"], "(or other property defined by ", ["code", "valuePropName"], ") ", ["code", "onChange"], "(or other property defined by ", ["code", "trigger"], ") props will be added to form controls，the flow of form data will be handled by Form which will cause:"], ["ol", ["li", ["p", "You don't need to use ", ["code", "onChange"], " to collect data, but you still can listen to ", ["code", "onChange"], "(and so on) events."]], ["li", ["p", "You can not set value of form control via ", ["code", "value"], " ", ["code", "defaultValue"], " prop, and you should set default value with ", ["code", "initialValue"], " in ", ["code", "getFieldDecorator"], " instead."]], ["li", ["p", "You don't need to call ", ["code", "setState"], " manually, please use ", ["code", "this.props.form.setFieldsValue"], " to change value programmatically."]]], ["h4", "Special attention"], ["p", "If you use ", ["code", "react@<15.3.0"], ", then, you can't use ", ["code", "getFieldDecorator"], " in stateless component: ", ["a", {
	    "title": null,
	    "href": "https://github.com/facebook/react/pull/6534"
	  }, "https://github.com/facebook/react/pull/6534"]], ["h4", "getFieldDecorator(id, options) parameters"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default Value"]]], ["tbody", ["tr", ["td", "id"], ["td", "The unique identifier is required. support ", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/form/pull/48"
	  }, "nested fields format"], "."], ["td", "string"], ["td"]], ["tr", ["td", "options.valuePropName"], ["td", "Props of children node, for example, the prop of Switch is 'checked'."], ["td", "string"], ["td", "'value'"]], ["tr", ["td", "options.initialValue"], ["td", "You can specify initial value, type, optional value of children node."], ["td"], ["td", "n/a"]], ["tr", ["td", "options.trigger"], ["td", "When to collect the value of children node"], ["td", "string"], ["td", "'onChange'"]], ["tr", ["td", "options.getValueFromEvent"], ["td", "To convert parameters of onChange to the value of control"], ["td", "function(..args)"], ["td", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/form#optiongetvaluefromevent"
	  }, "reference"]]], ["tr", ["td", "options.validateTrigger"], ["td", "When to validate the value of children node."], ["td", "string ", "|", " string[]"], ["td", "'onChange'"]], ["tr", ["td", "options.rules"], ["td", "Includes validation rules. Please refer to ", ["a", {
	    "title": null,
	    "href": "https://github.com/yiminghe/async-validator#rules"
	  }, "async-validator"], " for details."], ["td", "array"], ["td", "n/a"]], ["tr", ["td", "options.exclusive"], ["td", "Whether it is exclusive with other controls, particularly for Radio."], ["td", "boolean"], ["td", "false"]]]], ["h3", "Form.Item"], ["p", "Note:"], ["ul", ["li", ["p", "If Form.Item has multiple children that had been decorated by ", ["code", "getFieldDecorator"], ", ", ["code", "help"], " and ", ["code", "required"], " and ", ["code", "validateStatus"], " can't be generated automatically."]], ["li", ["p", "Before ", ["code", "2.2.0"], ", form controls must be child of Form.Item, otherwise, you need to set ", ["code", "help"], ", ", ["code", "required"], " and ", ["code", "validateStatus"], " by yourself."]]], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default Value"]]], ["tbody", ["tr", ["td", "label"], ["td", "Label text"], ["td", "React.Node"], ["td"]], ["tr", ["td", "labelCol"], ["td", "The layout of label. You can set ", ["code", "span"], " ", ["code", "offset"], " to something like ", ["code", "{span: 3, offset: 12}"], " same as with ", ["code", "<Col>"]], ["td", "object"], ["td"]], ["tr", ["td", "wrapperCol"], ["td", "The layout for input controls. Same as ", ["code", "labelCol"]], ["td", "object"], ["td"]], ["tr", ["td", "help"], ["td", "The prompt message. If not provided, the prompt message will be generated by the validation rule."], ["td", "React.Node"], ["td"]], ["tr", ["td", "extra"], ["td", "The extra prompt message. It is similar to help. Usage example: to display error message and prompt message at the same time."], ["td", "React.Node"], ["td"]], ["tr", ["td", "required"], ["td", "Whether provided or not, it will be generated by the validation rule."], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "validateStatus"], ["td", "The validation status. If not provided, it will be generated by validation rule. options: 'success' 'warning' 'error' 'validating'"], ["td", "string"], ["td"]], ["tr", ["td", "hasFeedback"], ["td", "Used with ", ["code", "validateStatus"], ", this option specifies the validation status icon. Recommended to be used only with ", ["code", "Input"], "."], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "colon"], ["td", "Used with ", ["code", "label"], ", whether to display ", ["code", ":"], " after label text."], ["td", "boolean"], ["td", "true"]]]], ["style", "\n.code-box-demo .ant-form:not(.ant-form-inline):not(.ant-form-vertical) {\n  max-width: 540px;\n}\n"]]
	};

/***/ }

});