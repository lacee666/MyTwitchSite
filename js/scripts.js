function reloadChat(chatFrame, channelName){
	if(document.getElementById(channelName).value == ""){
		alert("Channel name is empty.");
	} else{
		document.getElementById(chatFrame).src = "http://twitch.tv/" + document.getElementById(channelName).value + "/chat";
	}	
}
