function addComment() {
    let name = document.getElementById("comment-name").value.trim();
    let comment = document.getElementById("comment-text").value.trim();

    if (name === "" || comment === "") {
        alert("Nama dan komentar tidak boleh kosong!");
        return;
    }

    let commentList = document.getElementById("comment-list");

    let newComment = document.createElement("li");
    newComment.innerHTML = `<strong>${name}</strong>: ${comment}`;

    commentList.appendChild(newComment);

    // Kosongkan input setelah kirim
    document.getElementById("comment-name").value = "";
    document.getElementById("comment-text").value = "";
}
