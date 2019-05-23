goog.provide('quid2.ui.fatalError');
goog.require("goog.format.JsonPrettyPrinter");
goog.require('quid2');

quid2.ui.fatalError = function (err) {

	var q = quid2;

	function getHi() {
	  var hi = [
	   ["UY1v3WdztYA","Hou, Mamma Mia"]
	  ,["QLjgikTckM0","Alles Verloren"]
	  ,["1w7OgIMMRc4","Sweet Child O' Mine"]
	  ,["qWV2kM1laIc","Mala Vida"]
	  ,["Nm1g8FFRArc","Holy Rivers of Babylon"]
	  ,["BW3gKKiTvjs","Wuthering Heights"]
	  ,["ot3cVY1JESQ","Babooshka"]
	  ,["LTui67eaFDs","This World Is Crazy"]
	  ,["H2_o5O5TSGs","J'En Ai Marre"]
	  ,["CBEAaKcnNRg","Eet"]
	  ,["SdaYXIuEebs","Lascia Ch'Io Pianga"]
	  ];

	  var h = hi[Math.floor(Math.random()*hi.length)];
	  return "<p><a href= http://www.youtube.com/watch?v="+h[0]+">"+h[1]+" !</a></p>";
	};


	console.error(err);

	var prettyErr = err;
	try {prettyErr = new goog.format.JsonPrettyPrinter().format(err);} catch (err) {}

	var errorReport = "Quid2 error report.\nTime: " + new Date() + "\nMessage: " + prettyErr;
	//$('#displayArea').empty().addClass('error').append(
	$('body').empty().addClass('error').append(
	  getHi()
	    + "<p>There was a fatal error. The system seems to be down, you might need to come back later.</p>"
	    + "<p>Please <a href=\"mailto:tittoassini@gmail.com?subject=quid2-problem&body=" + encodeURIComponent(errorReport)
	    + "\">click here</a> to e-mail the following error report:<pre>" + errorReport + "</pre></p>");
};


