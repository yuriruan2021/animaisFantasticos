export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");
  
  function animaNumeros() {
  numeros.forEach((numeros) => {
    const total = +numeros.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start = start + incremento;
      numeros.innerText = start;
      if (start > total) {
        numeros.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  });
}

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observador.disconnect();
      animaNumeros();
    }
  }
  const observadorTargget = document.querySelector(".numeros");
  const observador = new MutationObserver(handleMutation);
  observador.observe(observadorTargget, { attributes: true });
}
