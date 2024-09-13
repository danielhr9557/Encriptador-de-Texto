// Seleccionar el elemento
// const input = document.getElementById('inputText');

// Agregar un event listener para el evento de tecla presionada
// input.addEventListener('keydown', function(event) {
//   console.log('Tecla presionada:', event.key); 
// });

// input.addEventListener('keydown', function(event) {
//   console.log('Tecla presionada:', event.key); 
// });

const inputField = document.getElementById('inputText');
        let typingTimer;
        const doneTypingInterval = 500; // Tiempo en milisegundos (0.5 segundos)

        inputField.addEventListener('input', function() {
            // Limpiar el temporizador anterior para evitar activaciones prematuras
            clearTimeout(typingTimer);

            // Establecer un nuevo temporizador
            typingTimer = setTimeout(() => {
                // Obtener el texto del campo de entrada
                const inputText = document.getElementById('inputText').value;

                // Llamar a la función de validación del texto
                validateText(inputText);
            }, doneTypingInterval);
        });

        function processText(text) {
            if (isValidText(text)) {
                // Procesar texto
                const processedText = encryptText(text);

                // Mostrar resultado
                document.getElementById('outputText').textContent = processedText;
                document.getElementById('outputText').style.color = "black";

                // Limpiar mensaje de error
                document.getElementById('errorMessage').textContent = '';
            } else {
                document.getElementById('errorMessage').textContent = 'Por favor usa solo minúsculas y carácteres alfabéticos';
            }
        }

        function reverseText(text) {
            if (isValidText(text)) {
                const reversedText = decryptText(text);

                document.getElementById('outputText').textContent = reversedText;
                document.getElementById('outputText').style.color = "black";

                // Limpiar mensaje de error
                document.getElementById('errorMessage').textContent = '';
            } else {
                document.getElementById('errorMessage').textContent = 'Por favor usa solo minúsculas y carácteres alfabéticos';
            }
        }

        function isValidText(text) {
            // Verificar si el texto contiene solo caracteres alfabéticos en minúscula y espacios
            return /^[a-z\s]+$/.test(text);
        }

        function encryptText(text) {
            return text
                .replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
        }

        function decryptText(text) {
            return text
                .replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
        }

        function validateText(validationText) {
            const regex = /enter|imes|ai|ober|ufat/;
  
            if (regex.test(validationText)) {
                reverseText(validationText);  // Llama a reverseText si hay coincidencia
            } else {
                processText(validationText);  // Llama a processText si no hay coincidencia
            }
        }












// const inputField = document.getElementById('inputText');
// let typingTimer;

// inputField.addEventListener('input', function() {
//     // Clear previous timeout to avoid premature triggers
//     clearTimeout(typingTimer);
    



//     // Set a new timeout of 800 milliseconds (adjustable)
//     typingTimer = setTimeout(
  
//         // Perform action after typing pause
//         function processText() {
//           const inputText = document.getElementById('inputText').value;
        
//           if (isValidText(inputText)) {
//             // Procesar texto
//             const processedText = encryptText(inputText);
        
//             // Mostrar resultado
//             document.getElementById('outputText').textContent = processedText;
//             outputText.style.color = "black";
        
//             // limpiar mensaje de error
//             document.getElementById('errorMessage').textContent = '';
//           } else {
//           document.getElementById('errorMessage').textContent = 'Por favor usa solo minúsculas y carácteres alfabéticos';
//           }
        
//           function isValidText(text) {
//             // Verificar si el texto contiene solo caracteres alfabéticos en minúscula y espacios
//             return /^[a-z\s]+$/.test(text);
//           }
        
//           function encryptText(text) {
//             return text
//             .replace(/e/g, 'enter')
//             .replace(/i/g, 'imes')
//             .replace(/a/g, 'ai')
//             .replace(/o/g, 'ober')
//             .replace(/u/g, 'ufat');
//           }; 
//     },

//     // desencriptar

// function reverseText() {
//   const inputText = document.getElementById('inputText').value;

//   if (isValidText(inputText)) {
//     const reversedText = decryptText(inputText);

//     document.getElementById('outputText').textContent = reversedText;
//     outputText.style.color = "black";

//     // limpiar mensaje de error
//     document.getElementById('errorMessage').textContent = '';
//   } else {
//     document.getElementById('errorMessage').textContent = 'Por favor usa solo minúsculas y carácteres alfabéticos';
//   }
// },

// function isValidText(text) {
//   // Verificar si el texto contiene solo caracteres alfabéticos en minúscula y espacios
//   return /^[a-z\s]+$/.test(text);
// },

// function decryptText(text) {
//   return text
//   .replace(/enter/g, 'e')
//   .replace(/imes/g, 'i')
//   .replace(/ai/g, 'a')
//   .replace(/ober/g, 'o')
//   .replace(/ufat/g, 'u');
// },
    
    

// function validateText(validationText) {
//   const regex = /enter|imes|ai|ober|ufat/;
  
//   if (regex.test(validationText)) {
//     reverseText();  // Llama a functionTwo si hay coincidencia
//   } else {
//     processText();  // Llama a functionOne si no hay coincidencia
//   }
// }


    
    
//   ,  500); // Adjust time duration as needed
// });












// Encriptar

// function processText() {
//   const inputText = document.getElementById('inputText').value;

//   if (isValidText(inputText)) {
//     // Procesar texto
//     const processedText = encryptText(inputText);

//     // Mostrar resultado
//     document.getElementById('outputText').textContent = processedText;
//     outputText.style.color = "black";

//     // limpiar mensaje de error
//     document.getElementById('errorMessage').textContent = '';
//   } else {
//   document.getElementById('errorMessage').textContent = 'Por favor usa solo minúsculas y carácteres alfabéticos';
//   }

//   function isValidText(text) {
//     // Verificar si el texto contiene solo caracteres alfabéticos en minúscula y espacios
//     return /^[a-z\s]+$/.test(text);
//   }

//   function encryptText(text) {
//     return text
//     .replace(/e/g, 'enter')
//     .replace(/i/g, 'imes')
//     .replace(/a/g, 'ai')
//     .replace(/o/g, 'ober')
//     .replace(/u/g, 'ufat');
//   } 
// }



// desencriptar

// function reverseText() {
//   const inputText = document.getElementById('inputText').value;

//   if (isValidText(inputText)) {
//     const reversedText = decryptText(inputText);

//     document.getElementById('outputText').textContent = reversedText;
//     outputText.style.color = "black";

//     // limpiar mensaje de error
//     document.getElementById('errorMessage').textContent = '';
//   } else {
//     document.getElementById('errorMessage').textContent = 'Por favor usa solo minúsculas y carácteres alfabéticos';
//   }
// }

// function isValidText(text) {
//   // Verificar si el texto contiene solo caracteres alfabéticos en minúscula y espacios
//   return /^[a-z\s]+$/.test(text);
// }

// function decryptText(text) {
//   return text
//   .replace(/enter/g, 'e')
//   .replace(/imes/g, 'i')
//   .replace(/ai/g, 'a')
//   .replace(/ober/g, 'o')
//   .replace(/ufat/g, 'u');
// };


// Copiar
async function copyText() {
  const outputText = document.getElementById('outputText').textContent;

  try {
      // Usar la API del portapapeles para copiar el texto
      await navigator.clipboard.writeText(outputText);
      // Mostrar mensaje de confirmación
      // alert('Texto copiado al portapapeles.');
  } catch (err) {
      // Mostrar mensaje de error en caso de fallo
      alert('Error al copiar el texto al portapapeles.');
  }
}

// borrar textAreas
function deleteText() {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').innerText = 'El texto se mostrará aquí...';
  document.getElementById('outputText').style.color = 'rgb(144, 144, 144)';

}


