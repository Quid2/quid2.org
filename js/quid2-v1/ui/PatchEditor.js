goog.provide('quid2.ui.PatchEditor');
//goog.require('quid2.UniqueCache');
goog.require('quid2');

quid2.ui.PatchEditor = function(hub, area, model) {
	this.hub = hub;
	this.area = area;
	this.versionsArea = $("<div/>").addClass("versions");
	this.diffArea = $("<div/>");
	area.append(this.versionsArea).append(this.diffArea);
	this.model = model;
};

quid2.ui.PatchEditor.prototype.edit = function(file) {
	var q = quid2;
	var me = this;

	function patch2html(doc, patches) {
		var txt = doc;
		var html = $("<pre/>");

		var diff = [];

		$.each(patches.vs, function(i, patch) {
			q.match(patch, [ q.app(q.c("Env.Keep"), q.v("n")), function(m) {
				var t = txt.slice(0, m.n);
				var elem = $("<span/>").text(t);
				html.append(elem);
				txt = txt.slice(m.n);
				diff.push([ DIFF_EQUAL, t ]);
			} ], [ q.app(q.c("Env.Drop"), q.v("n")), function(m) {
				var t = txt.slice(0, m.n);
				var elem = $("<del/>").text(t);
				elem.click(function(e) {
					elem.toggleClass("selected");
					if (elem.hasClass("selected")) diff[i] = [DIFF_DELETE, t];
					else diff[i] = [ DIFF_EQUAL, t ];
					me.model.saveModuleDiff(file.name, diff);
					e.stopPropagation();
				});
				html.append(elem);
				txt = txt.slice(m.n);
				diff.push([ DIFF_EQUAL, t ]);
			} ], [ q.app(q.c("Env.Ins"), q.v("s")), function(m) {
				var t = m.s;
				var elem = $("<ins/>").text(t);
				elem.click(function(e) {
					elem.toggleClass("selected");
					if (elem.hasClass("selected")) diff[i] = [ DIFF_INSERT, t ];
					else diff[i] = [ DIFF_EQUAL, t ];
					me.model.saveModuleDiff(file.name, diff);
					e.stopPropagation();
				});
				html.append(elem);
				diff.push([ DIFF_EQUAL, t ]);
			} ]);
		});

		if (txt.length > 0) throw "Incorrect diff data:" + txt + " " + html;

		console.log("DIFF", diff);
		return html;
	};

	switch (file.type) {

	case "SourceCode":
		me.diffArea.hide();
		me.versionsArea.empty();
		me.model.getVersions(file.name).done(
				function(versions) {
					console.log("versions:", versions);

					var fileId = me.model.getLocalUnique(file.name);

					var total = versions.vs.length;
					var newer = 0;
					var published = false;
					for ( var i = 0; i < versions.vs.length; i++) {
					  var ver = q.match(versions.vs[i],[ q.appN(q.c("Repo.Version"),[q.v("domain"),q.v("time"),q.v("unique")]),q.id]);
					  console.log(ver);
					  var vid = q.UniqueCache.fromUnique(ver.unique);
						if (vid == fileId) {
							published = true;
							total--;
							break;
						} else newer++;
					};
					if (!published) newer=0;

				  var pubVer = $("<span>" + (total == 0 ? "no" : total) + (published ? " other" : "") + " public versions</span>").attr("title","Click to see other versions.");
					if (total > 0) pubVer.addClass("op").click(function() {
						var o = $.extend({}, file);
						o.type = "Patch";
						o.versions = versions;
						o.unique = fileId;
						// o.otherVersion = v;
						me.hub.publish("edit", o);
					});

					me.versionsArea.html("<span>"+(published ? "Public" : "Private") + " version, </span>").append(pubVer)
							.append($("<span>" + (newer > 0 ? " (" + newer + " are newer)" : "") + ".</span>"));

				});
		me.versionsArea.show();
		break;

	case "Patch":
		me.diffArea.empty();
		me.versionsArea.empty();
		var justFound = false;
		$.each(file.versions.vs, function(i, v) {
			 var ver = q.match(v,[ q.appN(q.c("Repo.Version"),[q.v("domain"),q.appN(q.c("Data.Time.Calendar.Time"),[q.appN(q.c("Data.Time.Calendar.Date"),[q.v("year"),q.v("month"),q.v("day")]),q.v("secs")]),q.v("unique")]),q.id]);

			if (q.UniqueCache.fromUnique(ver.unique) == file.unique) {
				justFound = true;
				return;
			};
			//console.log("VER CMP",file.unique," <> ",me.model.fromUnique(ver.unique));

			if (i == 0) me.versionsArea.append("Newer: ");

			if (justFound) {
				me.versionsArea.append(" Older: ");
				justFound = false;
			}
			var name = file.name;
			var hours = Math.floor(ver.secs/3600);
			var mins  = Math.floor((ver.secs-hours*3600)/60);
			var secs  = ver.secs-hours*3600-mins*60;
			var mine = me.model.isMe(ver.domain);
			var author =  mine ? "me" : q.show(ver.domain);
			var shortAuthor =  me.model.isMe(ver.domain) ? " by me" : "";
			var date = new Date(ver.year,ver.month-1,ver.day,hours,mins,secs);
			var now = new Date();
			var shortDate = ver.year+"-"+q.pad(ver.month,2)+"-"+q.pad(ver.day,2) + " " + q.pad(hours,2) + ":" + q.pad(mins,2);// + ":" + q.pad(secs,2);
			function drop(s,cond,n) {return cond ? s.slice(n) : s;}
			//+ " " + shorterDate + "  " + date.toUTCString() + " " + date.toLocaleTimeString()
			//var conds []
			 var shorterDate = drop(shortDate,ver.year == now.getFullYear() && ver.month==now.getMonth()+1 && ver.day == now.getDate(),11);
			 var shortText = shorterDate;
			 var longText = "Click to merge the current version of " + name + " with the version published on " + date + " by " + author;
			 me.versionsArea.append("&nbsp;").append($("<a/>").text(shortText).attr("title",longText).addClass("version"+(mine?"-mine":"")).click(function() {
				me.model.getDiff(file.name, ver.unique).done(function(diff) {
					me.model.get(file.name).done(function(doc) {
						console.log("diff", q.show(diff));
						me.diffArea.empty().append(patch2html(doc.content, diff)).show();
					});

				});

			}));
		});

		me.area.show();
		break;

	default:
		me.area.hide().empty();
	};

};
