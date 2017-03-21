

function todoList() {

	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value
	var date = new Date()
	var dateText = document.createTextNode("date: " + date)
	var userNameText = document.createTextNode("Username: " + username)
	var commentText = document.createTextNode("Comment: " + comment)
	
	var newListItem = document.createElement("LI")
	newListItem.className = "list-group-item"
	var newUserName = document.createElement("H3")
	newUserName.appendChild(userNameText)
	var newDate = document.createElement("H4")
	newDate.appendChild(dateText)
	var newComment = document.createElement("P")
	newComment.appendChild(commentText)

	newListItem.appendChild(newDate)
	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	document.getElementById("commentList").appendChild(newListItem).n
	// document.getElementById("commentList").
}
//function that erases the comments

function removeLi() {

	var item = document.getElementById("commentList").style.visibility="hidden"
   
}

function toggleLi () {
	var show = document.getElementById("commentList").style.visibility="initial"
}
