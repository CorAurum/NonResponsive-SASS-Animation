function DoorSlide()  /*Esta funcion controla el movimiento y sonido de la puerta*/ 
      {       document.getElementById("Ldoor").classList.remove('LeftDoor');
              document.getElementById("Ldoor").classList.add('LeftDoorActive');
              document.getElementById("Rdoor").classList.remove('RightDoor');
              document.getElementById("Rdoor").classList.add('RightDoorActive');
              var audio2 = new Audio('../img/StoneDragging.mp3');  
              audio2.play();
      }
        function HideButton(){ /* Esta funcion esconde el boton cuando la puerta se abre */
          document.getElementById("Dbutton").classList.add('HideEye');
        }

        function TruthEye() { /* Esta funcion se encarga de remover las puertas para poder ver el interior y activar
         la animacion inicial del ojo */ 

            document.getElementById("Ldoor").classList.remove('LeftDoorActive');
            document.getElementById("Ldoor").classList.add('HideEye');
            document.getElementById("Rdoor").classList.remove('RightDoorActive');
            document.getElementById("Rdoor").classList.add('HideEye');
            document.getElementById("Truth").classList.remove('HideEye');
            document.getElementById("Truth").classList.add('TheTruthActive');
          }
          function TruthEyeLoop() {  /* esta funcion se encarga de usar otra animacion loopear el ojo en un constante movimiento  */
            document.getElementById("Truth").classList.remove('TheTruthActive');
            document.getElementById("Truth").classList.add('HideEye');
            document.getElementById("TruthLoop").classList.remove('HideEye');
            document.getElementById("TruthLoop").classList.add('TheTruthActive');
          }
