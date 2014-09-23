var BASE_URL = "http://localhost:9090/";

onload = function() {
    	var url = document.URL;
		
};

function getUserByName()
{
//TODO getUserId function
	var userName =  document.getElementById("userName").value;
	try{
		var request = new XMLHttpRequest();
    		request.open("GET", BASE_URL + 'users/'+userName , false);
    		//alert(BASE_URL + 'users/'+userName);
    		request.onload = function() {
    		//alert(request.status);
        		if (request.status === 201) {
            			document.getElementById("userId").innerHTML = request.responseText;
        			} else {
            			document.getElementById("status").innerHTML = 'Error '+request.status;
        			}
    			};
				document.getElementById("status").innerHTML += "Status: " + request.status;
    		request.send();
    }catch(err){
    			alert(err);
            document.getElementById("status").innerHTML += "\nXMLHttprequest error: " + err.description;
    }
}
function login()
{
	var userName =  document.getElementById("login").value;
	try{
		var request = new XMLHttpRequest();
    		request.open("POST", BASE_URL + 'users/login/'+userName , false);
    		request.onload = function() {
    		alert(request.status);
        		if (request.status === 202) {
            			document.getElementById("status").innerHTML = request.status;
						//document.getElementById("status").innerHTML = request.status;
        			} else {
            				document.getElementById("status").innerHTML = 'Error '+request.status;
        			}
    			};
				document.getElementById("status").innerHTML += "Status: " + request.status;
    		//request.setRequestHeader("Content-Type", 'text/plain');
    		request.send(document.URL);
    }catch(err){
    			alert(err);
            document.getElementById("status").innerHTML += "\nXMLHttprequest error: " + err.description;
    }
}
function createUser()
{
	var userName =  document.getElementById("userName").value;
	try{
		var request = new XMLHttpRequest();
    		request.open("POST", BASE_URL + 'users/create/'+userName , false);
    		request.onload = function() {
        		if (request.status === 201) {
						document.getElementById("status").innerHTML = request.status;
            			document.getElementById("createdId").innerHTML ="New Id: "+ request.responseText;//Update result
        			} else {
            				document.getElementById("status").innerHTML = 'Error '+request.status;
        			}
    			};
				document.getElementById("status").innerHTML += "Status: " + request.status;
    		request.setRequestHeader("Content-Type", 'text/plain');
    		request.send(document.URL);
    }catch(err){
    			alert(err);
            document.getElementById("status").innerHTML += "\nXMLHttprequest error: " + err.description;
    }
}
function getPendingIncoming()
{
	//var userName =  document.getElementById("userName").value;
	try{
		var request = new XMLHttpRequest();
    		request.open("GET", BASE_URL + 'friendships/incoming' , false);
    		request.onload = function() {
        		if (request.status === 201) {
            			document.getElementById("status").innerHTML = request.status;
            			document.getElementById("pendingIncomingResults").innerHTML = "Pending Incoming: "+request.responseText;//Update result
        			} else {
            				document.getElementById("status").innerHTML = 'Error '+request.status;
        			}
    			};
				document.getElementById("status").innerHTML += "Status: " + request.status;
    		request.setRequestHeader("Content-Type", 'text/plain');
    		request.send(document.URL);
    }catch(err){
    			alert(err);
            document.getElementById("status").innerHTML += "\nXMLHttprequest error: " + err.description;
    }
}
function getPendingOutGoing()
{
	//var userName =  document.getElementById("userName").value;
	try{
		var request = new XMLHttpRequest();
    		request.open("GET", BASE_URL + 'friendships/incoming' , false);
    		request.onload = function() {
        		if (request.status === 201) {
            			document.getElementById("status").innerHTML = request.status;
            			document.getElementById("pendingOutgoingResults").innerHTML =  "Pending Outgoing: "+request.responseText;//Update result
        			} else {
            			document.getElementById("status").innerHTML = 'Error '+request.status;
        			}
    			};
				document.getElementById("status").innerHTML += "Status: " + request.status;
    		request.setRequestHeader("Content-Type", 'text/plain');
    		request.send(document.URL);
    }catch(err){
    			alert(err);
            document.getElementById("status").innerHTML += "\nXMLHttprequest error: " + err.description;
    }
}
function followUser()
{
	var userName =  document.getElementById("userToFollow").value;
	try{
		var request = new XMLHttpRequest();
    		request.open("POST", BASE_URL + 'friendships/create/'+userName , false);
    		request.onload = function() {
			alert(request.status);
        		if (request.status === 201) {
            			document.getElementById("status").innerHTML = request.status;
            			document.getElementById("followedUserID").innerHTML =  "Friends Id: "+request.responseText;//Update result
        			} else {
            			document.getElementById("status").innerHTML = 'Error '+request.status;
        			}
    			};
				document.getElementById("status").innerHTML += "Status: " + request.status;
    		request.setRequestHeader("Content-Type", 'text/plain');
    		request.send(document.URL);
    }catch(err){
    			alert(err);
            document.getElementById("status").innerHTML += "\nXMLHttprequest error: " + err.description;
    }
}
function unfollowUser()
{
	var userName =  document.getElementById("userToFollow").value;
	try{
		var request = new XMLHttpRequest();
    		request.open("GET", BASE_URL + 'friendships/destroy/'+userName , false);
    		request.onload = function() {
        		if (request.status === 201) {
            			document.getElementById("status").innerHTML = request.status;
            			document.getElementById("unfollowedUserID").innerHTML =  "Unfriended Id: "+request.responseText;//Update result
        			} else {
            			document.getElementById("status").innerHTML = 'Error '+request.status;
        			}
    			};
				document.getElementById("status").innerHTML += "Status: " + request.status;
    		request.setRequestHeader("Content-Type", 'text/plain');
    		request.send(document.URL);
    }catch(err){
    			alert(err);
            document.getElementById("status").innerHTML += "\nXMLHttprequest error: " + err.description;
    }
}
function listFollowers()
{
	//var userName =  document.getElementById("userToFollow").value;
	try{
		var request = new XMLHttpRequest();
    		request.open("GET", BASE_URL + 'friendships/followers/list' , false);
    		request.onload = function() {
        		if (request.status === 201) {
            			document.getElementById("status").innerHTML = request.status;
            			document.getElementById("followersList").innerHTML =  "Followers List: "+request.responseText;//Update result
        			} else {
            			document.getElementById("status").innerHTML = 'Error '+request.status;
        			}
    			};
				document.getElementById("status").innerHTML += "Status: " + request.status;
    		request.setRequestHeader("Content-Type", 'text/plain');
    		request.send(document.URL);
    }catch(err){
    			alert(err);
            document.getElementById("status").innerHTML += "\nXMLHttprequest error: " + err.description;
    }
}
function listFollowering()
{
	//var userName =  document.getElementById("userToFollow").value;
	try{
		var request = new XMLHttpRequest();
    		request.open("GET", BASE_URL + 'friendships/friends/list' , false);
    		request.onload = function() {
        		if (request.status === 201) {
            			document.getElementById("status").innerHTML = request.status;
            			document.getElementById("followingList").innerHTML =  "Following List: "+request.responseText;//Update result
        			} else {
            			document.getElementById("status").innerHTML = 'Error '+request.status;
        			}
    			};
				document.getElementById("status").innerHTML += "Status: " + request.status;
    		request.setRequestHeader("Content-Type", 'text/plain');
    		request.send(document.URL);
    }catch(err){
    			alert(err);
            document.getElementById("status").innerHTML += "\nXMLHttprequest error: " + err.description;
    }
}
function tweet()
{
	var userName =  document.getElementById("tweetMsg").value;
	try{
		var request = new XMLHttpRequest();
    		request.open("GET", BASE_URL + 'tweet/tweet/'+userName , false);
    		request.onload = function() {
        		if (request.status === 201) {
            			document.getElementById("status").innerHTML = request.status;
            			document.getElementById("tweetId").innerHTML =  "Tweet Id "+request.responseText;//Update result
        			} else {
            			document.getElementById("status").innerHTML = 'Error '+request.status;
        			}
    			};
				document.getElementById("status").innerHTML += "Status: " + request.status;
    		request.setRequestHeader("Content-Type", 'text/plain');
    		request.send(document.URL);
    }catch(err){
    			alert(err);
            document.getElementById("status").innerHTML += "\nXMLHttprequest error: " + err.description;
    }
}
function getTweetById()
{
	var userName =  document.getElementById("tweetById").value;
	try{
		var request = new XMLHttpRequest();
    		request.open("GET", BASE_URL + 'tweet/show/'+userName , false);
    		request.onload = function() {
        		if (request.status === 201) {
            			document.getElementById("status").innerHTML = request.status;
            			document.getElementById("tweetByIdResult").innerHTML =  "Tweet: "+request.responseText;//Update result
        			} else {
            			document.getElementById("status").innerHTML = 'Error '+request.status;
        			}
    			};
				document.getElementById("status").innerHTML += "Status: " + request.status;
    		request.setRequestHeader("Content-Type", 'text/plain');
    		request.send(document.URL);
    }catch(err){
    			alert(err);
            document.getElementById("status").innerHTML += "\nXMLHttprequest error: " + err.description;
    }
}
function removeTweet()
{
	var userName =  document.getElementById("tweetToRemove").value;
	try{
		var request = new XMLHttpRequest();
    		request.open("GET", BASE_URL + 'tweet/destroy/'+userName , false);
    		request.onload = function() {
        		if (request.status === 201) {
            			document.getElementById("status").innerHTML = request.status;
            			document.getElementById("removedTweetId").innerHTML =  "Deleted Tweet Id "+request.responseText;//Update result
        			} else {
            			document.getElementById("status").innerHTML = 'Error '+request.status;
        			}
    			};
				document.getElementById("status").innerHTML += "Status: " + request.status;
    		request.setRequestHeader("Content-Type", 'text/plain');
    		request.send(document.URL);
    }catch(err){
    			alert(err);
            document.getElementById("status").innerHTML += "\nXMLHttprequest error: " + err.description;
    }
}
function retweetTweet()
{
	var userName =  document.getElementById("reTweet").value;
	try{
		var request = new XMLHttpRequest();
    		request.open("GET", BASE_URL + 'tweet/retweet/'+userName , false);
    		request.onload = function() {
        		if (request.status === 201) {
            			document.getElementById("status").innerHTML = request.status;
            			document.getElementById("retweetResult").innerHTML =  "Retweet: "+request.responseText;//Update result
        			} else {
            			document.getElementById("status").innerHTML = 'Error '+request.status;
        			}
    			};
				document.getElementById("status").innerHTML += "Status: " + request.status;
    		request.setRequestHeader("Content-Type", 'text/plain');
    		request.send(document.URL);
    }catch(err){
    			alert(err);
            document.getElementById("status").innerHTML += "\nXMLHttprequest error: " + err.description;
    }
}