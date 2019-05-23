goog.provide('quid2.TxtStore');
goog.require('quid2');
goog.require('quid2.Sha256');

quid2.TxtStore = (function() {
	var q = quid2;

	var store = q.c("Org.Quid2.Service.Store.Quid2Store");

	/** Maps unique identifiers (sha256 codes) to content::String * */
	var sha2str = {};

	// TO DO: generate automatically
	function txtCont(txt, txtF, utfF) {
		return q.match(txt, [ q.app(q.c("Txt.Txt"), q.v("s")), function(m) {
			return txtF(m.s);
		} ], [ q.app(q.c("Txt.UTF8Txt"), q.app(q.c("Hash.SHA256"), q.v("id"))), function(m) {
			return utfF(m.id);
		} ]);
	};

	function isStr(txt) {
		return txtCont(txt, q.cnst(true), q.cnst(false));
	};

	function toSha(txt) {
		return txtCont(txt, q.error("toSha: " + txt), q.id);
	};

	/***************************************************************************
	 * @param env ::
	 *            environment to use to retrieve text.
	 * @param txt ::
	 *            Txt
	 * 
	 * @return Deferred String
	 **************************************************************************/
	var get = function(env, txt) {
		q.assertDefined(env);
		q.assertDefined(txt);

		return $.when(txtCont(txt, function(txt) { return txt.v;} , function(id) { return sha2str[id] ? sha2str[id] : q.deferMap(env.evalExpr(q.appN(q.v("Txt.getStr"), [store, txt ])),
				function(str) {
					sha2str[id] = str;
					return str;
				});}));

	};

	/***************************************************************************
	 * Get the persistent unique identifier of a document
	 * 
	 * @param env ::
	 *            environment to use to retrieve text.
	 * @param txt ::
	 *            Txt
	 * 
	 * @return unique :: Deferred Txt
	 **************************************************************************/
	var getCompactTxt = function(env, txt) {
		q.assertDefined(env);
		q.assertDefined(txt);

		return $.when(!isStr(txt) || (isStr(txt) && txt.v.length <= 128) ? txt : q.deferMap(env.eval(q.appN(q.v("Txt.putString"), [ store,
				txt.v ])), function(txt2) {
			if (!isStr(txt)) sha2str[toSha(txt2)] = txt.v;
		}));
	};

	/*
	 * TxtStore.uniqueId = function(doc) {return q.Sha256.digest(doc);}
	 * 
	 * TxtStore.toUnique = function(id) { return
	 * q.app(q.app(q.c("Repository.Unique"), q.c("Repository.UTF8")),
	 * q.app(q.c("Repository.SHA256"), id)); };
	 */

	return {
		get : get,
		getCompactTxt : getCompactTxt
	};
})();
