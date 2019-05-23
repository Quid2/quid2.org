// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Factory class to create a simple autocomplete that will match
 *               from an array of data.
 * 
 * 
 * @see ../../demos/autocomplete-basic.html
 */

goog.provide('quid2.ui.AutoComplete');
goog.provide('quid2.ui.AutoComplete.EventType');

goog.require('goog.ui.AutoComplete');
goog.require('goog.ui.AutoComplete.ArrayMatcher');
goog.require('goog.ui.AutoComplete.InputHandler');
goog.require('goog.ui.AutoComplete.Renderer');

/**
 * Factory class for building a basic autocomplete widget that autocompletes an
 * inputbox or text area from a data array.
 * 
 * @param {Array}
 *            data Data array.
 * @param {Element}
 *            input Input element or text area.
 * @param {boolean=}
 *            opt_multi Whether to allow multiple entries separated with
 *            semi-colons or commas.
 * @param {boolean=}
 *            opt_useSimilar use similar matches. e.g. "gost" => "ghost".
 * @constructor
 * @extends {goog.ui.AutoComplete}
 */
quid2.ui.AutoComplete = function(data, input, opt_multi, opt_useSimilar) {
	var me = this;
	
	var matcher = new goog.ui.AutoComplete.ArrayMatcher(data, !opt_useSimilar);
	var renderer = new goog.ui.AutoComplete.Renderer();
	var inputhandler = new goog.ui.AutoComplete.InputHandler(" ", "\"", !!opt_multi);
	inputhandler.setSeparatorCompletes(false);
	inputhandler.setWhitespaceWrapEntries(false);

	goog.ui.AutoComplete.call(this, matcher, renderer, inputhandler);
	inputhandler.attachAutoComplete(this);
	inputhandler.attachInputs(input);
	
	
	function done () {
		var inp = $.trim($(input).val());
		console.log("DONE",inp);
		if (inp.length > 0) me.dispatchEvent({
			type : quid2.ui.AutoComplete.EventType.DONE,
			input : inp
		});
	}

	$(input).bind("keydown",function(e) {
		console.log("KEY:",e);
		if (e.which==13 || e.which==27) {
			done();
		}
	});	
	
	/*
	goog.events.listen(this, goog.ui.AutoComplete.EventType.UPDATE, function(ev) {
		console.log("EVENT",ev);
		if (!ev.row && inp.length > 0) done();
	});*/
};

quid2.ui.AutoComplete.EventType = {
	/** The user has completed input, the entered text is in the 'input' property */
	DONE : 'done'
}

goog.inherits(quid2.ui.AutoComplete, goog.ui.AutoComplete);
