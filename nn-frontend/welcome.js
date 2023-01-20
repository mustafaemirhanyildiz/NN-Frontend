barba.Pjax.start();

const buttons=document.querySelectorAll('.ripple')

buttons.forEach(button=>{
    button.addEventListener('click',function(e){
        const x=e.clientX
        const y=e.clientY
        const buttonTop=e.target.offsetTop
        const buttonLeft=e.target.offsetLeft

        const xInside=x-buttonLeft
        const yInside=y-buttonTop

        const circle=document.createElement('span')
        circle.classList.add('circle')
        circle.style.top=yInside+'px'
        circle.style.left=xInside+'px'

        this.appendChild(circle)

        setTimeout(()=>circle.remove(),500)


    })
})


window.onload = () => {
    const anchors = document.querySelectorAll('a');
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 500);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;
  
        console.log(transition_el);
  
        transition_el.classList.add('is-active');
  
        console.log(transition_el);
  
        setInterval(() => {
          window.location.href = target;
        }, 500);
      })
    }
  }