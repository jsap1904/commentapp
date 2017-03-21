

function todoList() {

	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value
	var date = new Date()
	
	var dateText = document.createTextNode("date: " + date)
	var userNameText = document.createTextNode("Username: " + username)
	var commentText = document.createTextNode("Comment: " + comment)
	var getPic = document.createTextNode("img/add.png")
	var newListItem = document.createElement("LI")
	newListItem.className = "list-group-item"

	$(".button").ready(function(){
   		$(".list-group-item:odd").css("background-color", "lightgray");
	});

	var newUserName = document.createElement("H3")
	newUserName.appendChild(userNameText)
	var newDate = document.createElement("H6")
	newDate.appendChild(dateText)
	var newComment = document.createElement("P")
	newComment.appendChild(commentText)
	var pic = document.createElement("IMG")
	pic.setAttribute("src", "img/add.png");
	pic.setAttribute("width", "60");
    pic.setAttribute("height", "40");
	pic.appendChild(getPic)

	newListItem.appendChild(newDate)
	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	newListItem.appendChild(pic)
	document.getElementById("commentList").appendChild(newListItem).n

}
//function that erases the comments

function removeLi() {

	var item = document.getElementById("commentList").style.visibility="hidden"
   
}

function toggleLi () {
	var show = document.getElementById("commentList").style.visibility="initial"
}

