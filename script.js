function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    // Obtener el mensaje del usuario y limpiar el campo de entrada
    const messageText = input.value.trim();
    if (messageText === "") return;

    addMessage(messageText, "user");
    input.value = ""; // Limpiar el campo de entrada

    // Generar una respuesta del bot
    setTimeout(() => {
        const botResponse = getBotResponse(messageText);
        addMessage(botResponse, "bot");
    }, 1000);
}

// Función para agregar un mensaje al chatbox
function addMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender);
    messageElement.textContent = text;

    // Agregar el mensaje al chat box
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Función para generar la respuesta del bot según el mensaje del usuario
function getBotResponse(message) {
    // Convertir el mensaje a minúsculas para facilitar la comparación
    message = message.toLowerCase();

    // Respuestas según palabras clave
    if (message.includes("hola")) {
        return "¡Hola! ¿En qué puedo ayudarte?";
    } else if (message.includes("ayuda")) {
        return "Claro, ¿qué necesitas?";
    } else if (message.includes("precio")) {
        return "Nuestros precios varían dependiendo del servicio. ¿Te interesa algo en específico?";
    } else if (message.includes("gracias")) {
        return "¡De nada! Siempre estoy aquí para ayudarte.";
    } else {
        // Respuesta predeterminada si no encuentra coincidencias
        return "Lo siento, no entendí eso. ¿Puedes intentarlo de otra manera?";
    }
}
