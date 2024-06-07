function postComment() {
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value;

  if (commentText.trim() === "") {
    alert("Please enter a comment");
    return;
  }

  const commentContainer = document.getElementById("comments-container");
  const newComment = document.createElement("div");
  newComment.className = "comment";
  newComment.textContent = commentText;

  commentContainer.appendChild(newComment);

  // Clear the input field after posting a comment
  commentInput.value = "";
}