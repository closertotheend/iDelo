/**
 * 
 */

$(document).ready(function() {
	var role = getUrlVars()["role"];
	if (role === "admin") {
		$("#ajax-navbar").load("includes/common/navbar.html", function() {
			markNavbarMenuSection();
			$("li#user-complaints").hide();
		});
	} else {
		$("#ajax-navbar").load("includes/common/navbar.html", function() {
			markNavbarMenuSection();
			$("li#citizen-registry").hide();
		});
	}

});

function markNavbarMenuSection() {
	switch (getCurentFileName()) {
	case "index.html":
		$("li#home").addClass("active");
		break;
	default:
		break;
	}
}

function getUrlVars() {
	var vars = [], hash;
	var hashes = window.location.href.slice(
			window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}

function getCurentFileName() {
	var pagePathName = window.location.pathname;
	return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
}
