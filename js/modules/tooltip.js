export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
  function onMouseOver(event) {
    const tooltipCaixa = criarTooltipCaixa(this);
   
    onMouseMove.tooltipCaixa = tooltipCaixa;
    this.addEventListener('mousemove', onMouseMove)
    
    onMouseLeave.tooltipCaixa = tooltipCaixa;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
    
  }

  const onMouseLeave = {
    tooltipCaixa: '', 
    element: '',
    handleEvent(){
      this.tooltipCaixa.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave)
      this.element.removeEventListener('mouseleave', onMouseLeave)
    }
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipCaixa.style.top = event.pageY + 20 +'px';
      this.tooltipCaixa.style.left = event.pageX + 20 +'px';
    }
  }

  function criarTooltipCaixa(element) {
    const tooltipCaixa = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipCaixa.classList.add("tooltip");
    tooltipCaixa.innerText = text;
    document.body.appendChild(tooltipCaixa);
    console.log(tooltipCaixa);
    return tooltipCaixa;
  }
}
