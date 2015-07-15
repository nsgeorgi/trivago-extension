// omnibox
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
	suggest([
	  {content: "color-divs", description: "Make everything red"}
	]);
});
chrome.omnibox.onInputEntered.addListener(function(text) {
	if(text == "color-divs") colorDivs();
});


// listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(id, info, tab){


    if (tab.url.toLowerCase().indexOf("facebook.com") > -1){
        chrome.pageAction.show(tab.id);

        chrome.storage.sync.get("be_a_buzzkill", function(data){
            if (data["be_a_buzzkill"] && tab.url.toLowerCase().indexOf("facebook.com/buzzfeed") !== -1){
                chrome.tabs.update(tab.id, {url: "http://www.facebook.com/?no-buzzfeed-for-you!"});
            }
        });
    }

});



// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "color-divs":
            colorDivs();
        break;
    }
    return true;
});

// listening for an event / long-lived connections
// coming from devtools
chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
       	switch(port.name) {
			case "color-divs-port":
				colorDivs();
			break;
		}
    });
});

// send a message to the content script
var colorDivs = function() {
	chrome.tabs.getSelected(null, function(tab){
	    chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: "#F00"});
	    // setting a badge
		//chrome.browserAction.setBadgeText({text: "red!"});
	});
}