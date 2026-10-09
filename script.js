document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".comment-form");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const nameInput = form.querySelector("input[name='name']");
      const commentInput = form.querySelector("textarea[name='comment']");
      const feedback = form.querySelector(".form-feedback");
      const projectId = form.dataset.projectId;
      const commentList = document.getElementById(`comments-${projectId}`);

      if (!nameInput.value.trim() || !commentInput.value.trim()) {
        feedback.textContent = "Please enter your name and a comment.";
        return;
      }

      const commentItem = document.createElement("div");
      commentItem.className = "comment-item";
      commentItem.innerHTML = `
        <strong>${escapeHtml(nameInput.value.trim())}</strong>
        <p>${escapeHtml(commentInput.value.trim())}</p>
      `;

      commentList.prepend(commentItem);
      feedback.textContent = "Comment posted.";
      form.reset();
    });
  });
});

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
