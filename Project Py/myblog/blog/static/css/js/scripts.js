function validateForm() {
    // Basic form validation, you can enhance this as needed
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;

    if (!title || !description) {
        alert("Please fill in all fields");
        return false;
    }

    // Form submission logic (to be implemented based on your backend)
    alert("Blog post added successfully!");
    return true;
}

function deletePost(postId) {
    // Delete post logic (to be implemented based on your backend)
    alert("Blog post deleted successfully!");
    // Remove the post from the UI
    var postElement = document.querySelector(".admin-post");
    postElement.parentNode.removeChild(postElement);
}
