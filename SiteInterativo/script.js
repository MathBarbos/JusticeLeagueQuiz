let heroValidate = function() {
  let replys = document.querySelectorAll(".reply");
  let button = document.querySelector("button");
  let dialog = document.querySelector("dialog");
  let close = document.querySelector(".close");
  let result = document.querySelector(".finalResult");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let totally = 0
    for (let i = 0; i < replys.length; i++) {
      if (replys[i].checked) {
        totally += parseInt(replys[i].value);
      }

    }
    let modal = function(total) {
      dialog.showModal();
      if (total === 0) {
        result.innerHTML = "Infelizmente você não acertou nenhuma pergunta, mas tente novamente! A Liga da Justiça o aguarda."
      } else if (total < 3) {
        result.innerHTML = "Você acertou " + total + " de 5 perguntas, mas não foi dessa vez, tente novamente!"
      } else if (total < 5) {
        result.innerHTML = "Você acertou " + total + " perguntas, você está quase lá! Continue tentando!"
      } else {
        result.innerHTML = "Parabéns, você acertou " + total + " perguntas, você é um dos melhores assistentes da Liga da Justiça!!!"
      }
      close.onclick = function() {
        dialog.close();
      }
    }

    return modal(totally);
    form.submit();
  });
}

heroValidate();




