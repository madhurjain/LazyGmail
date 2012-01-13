// Saves refreshTimeout to localStorage.
function saveOptions() {
	var refreshTimeout = document.getElementById("refreshTimeout").value;
	localStorage["refreshTimeout"] = refreshTimeout;
	
	// Update status to let user know that the options were saved.
	var status = document.getElementById("status");
	status.innerHTML = "Options Saved.";
	setTimeout(function() {
		status.innerHTML = "";
	}, 750);
}

// Restores refreshTimeout value from localStorage.
function restoreOptions() {
	var refreshTimeout = localStorage["refreshTimeout"];
	if (!refreshTimeout) {
		return;
	}
	document.getElementById("refreshTimeout").value = refreshTimeout;
}