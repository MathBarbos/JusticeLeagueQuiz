let mouseMove = document.querySelectorAll(".mouseMove");
let enterQuiz = document.querySelectorAll(".enterQuiz");

for (let i = 0; i < mouseMove.length; i++) {
  mouseMove[i].addEventListener('mousemove', () => {
    mouseMove[i].style.opacity = 0.75;
    enterQuiz[i].style.opacity = 0.75;
  })
  mouseMove[i].addEventListener('mouseout', () => {
    mouseMove[i].style.opacity = 1;
    enterQuiz[i].style.opacity = 0;
  })
  enterQuiz[i].addEventListener('mousemove', () => {
    enterQuiz[i].style.opacity = 0.75;
    mouseMove[i].style.opacity = 0.75;
  })
  enterQuiz[i].addEventListener('mouseout', () => {
    enterQuiz[i].style.opacity = 0;
    mouseMove[i].style.opacity = 1;
  })

}
