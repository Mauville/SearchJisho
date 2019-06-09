chrome.contextMenus.create({
    id: "search-on-jisho",
    title: "Search Jisho for \"%s\"",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if(info.menuItemId == "search-on-jisho") {
        searchJisho(info.selectionText);
    }
});

function searchJisho(data) {
    browser.tabs.create({url:'http://jisho.org/search/'+data});
}
