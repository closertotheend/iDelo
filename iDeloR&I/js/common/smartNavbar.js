/**
 * 
 */

$(document).ready(function() {
	var role = getUrlVars()["role"];
	if (role === "undefined") {
		role = "user";
	}

	if (role === "admin") {
		$("#ajax-navbar").load("includes/common/navbar.html", function() {
			markNavbarMenuSection();
			appendRoleToLinks(role);
			$("li#user-complaints").hide();
			$("li#user-new-complaint").hide();
		});
	} else {
		$("#ajax-navbar").load("includes/common/navbar.html", function() {
			markNavbarMenuSection();
			appendRoleToLinks(role);
			$("li#citizen-registry").hide();
			$("li#all-complaints").hide();
		});
	}

});

function appendRoleToLinks(role) {
	$("a").each(function() {
		var _href = $(this).attr("href");
		$(this).attr("href", _href + '?role=' + role);
	});
}

function markNavbarMenuSection() {
	switch (getCurentFileName()) {
	case "index.html":
		$("li#home").addClass("active");
		break;
	case "newComplaint.html":
		$("li#user-new-complaint").addClass("active");
		break;
	case "allComplaints.html":
		$("li#all-complaints").addClass("active");
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
