const button = document.querySelector("#btn");
const buttonRu = document.querySelector("#btnRu");
button.addEventListener("click", function () {
  const aboutMe = document.querySelector(".about-me");
  const aboutMeEn = document.querySelector(".about-me-en");
  aboutMeEn.style.display = "none";
  aboutMe.style.display = "block";
  console.log(aboutMe);
  console.log("click");

  button.style.display = "none";
  buttonRu.style.display = "block";
});

buttonRu.addEventListener("click", function () {
  const aboutMe = document.querySelector(".about-me");
  const aboutMeEn = document.querySelector(".about-me-en");
  aboutMeEn.style.display = "block";
  aboutMe.style.display = "none";

  buttonRu.style.display = "none";
  button.style.display = "block";
});
