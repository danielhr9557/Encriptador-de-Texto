// Encriptar

function processText() {
  const inputText = document.getElementById('inputText').value;

  if (isValidText(inputText)) {
    // Procesar texto
    const processedText = encryptText(inputText);

    // Mostrar resultado
    document.getElementById('outputText').textContent = processedText;

    // limpiar mensaje de error
    document.getElementById('errorMessage').textContent = '';
  } else {
  document.getElementById('errorMessage').textContent = 'Por favor usa solo minúsculas y carácteres alfabéticos';
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
}


// desencriptar

function reverseText() {
  const inputText = document.getElementById('inputText').value;

  if (isValidText(inputText)) {
    const reversedText = decryptText(inputText);

    document.getElementById('outputText').textContent = reversedText;

    // limpiar mensaje de error
    document.getElementById('errorMessage').textContent = '';
  } else {
    document.getElementById('errorMessage').textContent = 'Por favor usa solo minúsculas y carácteres alfabéticos';
  }
}

function isValidText(text) {
  // Verificar si el texto contiene solo caracteres alfabéticos en minúscula y espacios
  return /^[a-z\s]+$/.test(text);
}

function decryptText(text) {
  return text
  .replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u');
}


// Copiar
async function copyText() {
  const outputText = document.getElementById('outputText').textContent;

  try {
      // Usar la API del portapapeles para copiar el texto
      await navigator.clipboard.writeText(outputText);
      // Mostrar mensaje de confirmación
      alert('Texto copiado al portapapeles.');
  } catch (err) {
      // Mostrar mensaje de error en caso de fallo
      alert('Error al copiar el texto al portapapeles.');
  }
}
