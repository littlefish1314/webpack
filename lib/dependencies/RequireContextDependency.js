/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";
const ContextDependency = require("./ContextDependency");
const ModuleDependencyTemplateAsRequireId = require("./ModuleDependencyTemplateAsRequireId");

class RequireContextDependency extends ContextDependency {
	constructor(request, recursive, regExp, range) {
		super(request, recursive, regExp);
		this.range = range;
	}

	get type() {
		return "require.context";
	}
}

RequireContextDependency.Template = ModuleDependencyTemplateAsRequireId;

module.exports = RequireContextDependency;
