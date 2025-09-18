const parentCards = document.getElementsByClassName("parent_card");

Array.from(parentCards).forEach(card => {
  const content = card.querySelector(".parent_content");

  card.addEventListener("mouseenter", () => {
    card.style.height = "200px";  
    content.style.display = "block";
  });

  card.addEventListener("mouseleave", () => {
    card.style.height = "60px";
    content.style.display = "none";
  });
});