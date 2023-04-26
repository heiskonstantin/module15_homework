const echoUrl = "wss://echo.websocket.events";

const btnSend = document.querySelector(".btn-send");
const output = document.querySelector(".message-area");
const input = document.querySelector(".input");
const btnGeoLocation = document.querySelector(".btn-geolocation");

let websocket;

function writeToScreen(message) {
  let div = document.createElement("div");

  div.classList.add("div");
  div.innerHTML = `<p class="pre">${message}</p>`;

  output.appendChild(div);
}

function initWebSocket() {
  websocket = new WebSocket(echoUrl);

  websocket.onopen = () => {
    console.log("Соединение установлено");
  };

  websocket.onclose = () => {
    console.log("Обрыв соединения");

    initWebSocket();
  };

  websocket.onmessage = (event) => {
    if (event.data === "echo.websocket.events sponsored by Lob.com") {
    } else {
      writeToScreen(event.data);
    }
  };
}

initWebSocket();

btnSend.addEventListener("click", () => {
  const message = `${input.value.trim()}`;

  if (message === "") this.setAttribute("disabled");

  writeToScreen(message);
  websocket.send(message);
});

btnGeoLocation.addEventListener("click", () => {
  if (!navigator.geolocation) {
    alert("Geolocation не поддерживается вашим браузером");
  } else {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;

      let div = document.createElement("div");

      div.classList.add("div");
      div.innerHTML = `<a class="link" href="https://www.openstreetmap.org/export/embed.html?bbox=${coords.longitude}%2C${coords.latitude}&amp;layer=mapnik">Гео-локация</a>`;

      output.appendChild(div);
    });
  }
});
