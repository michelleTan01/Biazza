
let newPost = document.getElementById('newPost');
var newId = -1;
newPost.onclick = function(element) {
	newId ++;
	var CreateID = 'var noteId = ' + newId  + ';';
	chrome.tabs.executeScript(
		null,
		{code: CreateID},
		function(){
			chrome.tabs.executeScript(
				null,
				{file: 'addNote.js'}
			);
		}
	);
};