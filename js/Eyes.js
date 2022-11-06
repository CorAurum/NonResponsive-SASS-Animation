function EyeAppear() { /* esta funcion se encarga hacer aparecer los ojos  */
        
    document.getElementById("Con").classList.add('Opacity1row');
    document.getElementById("Con2").classList.add('Opacity1row');
    document.getElementById("Con3").classList.add('Opacity2row');
    document.getElementById("Con4").classList.add('Opacity2row');
    document.getElementById("Con5").classList.add('Opacity3row');
    document.getElementById("Con6").classList.add('Opacity3row');
  
    /* Esta funcion se encarga de controlar el movimiento de los ojos siguiendo el cursor */

    const eye = document.querySelector('.iris');
            window.addEventListener('mousemove', (event) => {
            const x = -(window.innerWidth / 2 - event.pageX) / 30;
            const y = -(window.innerHeight / 2 - event.pageY) / 30;
            eye.style.transform = `rotate(-134deg) translateY(${y}px)  translateX(${x}px)`;         
                    }); 
                    
                    const eye2 = document.querySelector('.iris2');
            window.addEventListener('mousemove', (event) => {
            const x = -(window.innerWidth / 2 - event.pageX) / 35;
            const y = -(window.innerHeight / 2 - event.pageY) / 35;
            eye2.style.transform = `rotate(-134deg) translateY(${y}px)  translateX(${x}px)`;         
                    });

            const eye3 = document.querySelector('.iris3');
            window.addEventListener('mousemove', (event) => {
            const x = -(window.innerWidth / 2 - event.pageX) / 35;
            const y = -(window.innerHeight / 2 - event.pageY) / 35;
            eye3.style.transform = `rotate(-134deg) translateY(${y}px)  translateX(${x}px)`;         
                    });
                    
                    const eye4 = document.querySelector('.iris4');
            window.addEventListener('mousemove', (event) => {
            const x = -(window.innerWidth / 2 - event.pageX) / 35;
            const y = -(window.innerHeight / 2 - event.pageY) / 35;
            eye4.style.transform = `rotate(-134deg) translateY(${y}px)  translateX(${x}px)`;         
                    });
                    
                    const eye5 = document.querySelector('.iris5');
            window.addEventListener('mousemove', (event) => {
            const x = -(window.innerWidth / 2 - event.pageX) / 35;
            const y = -(window.innerHeight / 2 - event.pageY) / 35;
            eye5.style.transform = `rotate(-134deg) translateY(${y}px)  translateX(${x}px)`;         
                    });
          
                    const eye6 = document.querySelector('.iris6');
            window.addEventListener('mousemove', (event) => {
            const x = -(window.innerWidth / 2 - event.pageX) / 35;
            const y = -(window.innerHeight / 2 - event.pageY) / 35;
            eye6.style.transform = `rotate(-134deg) translateY(${y}px)  translateX(${x}px)`;         
                    });         
    
  
  } /* Esta funcion se encarga de cambiar el fondo */
  function BlackBackground() {
    document.getElementById("BodyCon").classList.add('BB');
    var audio3 = new Audio('../img/MonsterBreath.mp3');  
        audio3.play();
  }
  function Message(){ /* Esta funcion revela el mensaje y enlace para volver al porfolio */
    document.getElementById("Message").classList.remove('HideEye');
    document.getElementById("Message").classList.add('Message');
  }
  