const profile = document.querySelector(".card-profile");
const shareBtn = document.querySelector(".share-btn");
const socials = document.querySelector(".card-socials");
const card = document.querySelector(".card");

// Animation Entrance
setTimeout(() => {
  card.classList.add("appear");
}, 700);

// Click state
shareBtn.addEventListener("click", () => {
  profile.classList.toggle("remove");
  socials.classList.toggle("active");
  shareBtn.classList.toggle("click");
});
