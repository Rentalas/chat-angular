import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat';



  constructor() {
    const wss = new WebSocket('ws://localhost:1234');
      console.log(wss)

// Соединение открыто
wss.addEventListener("open", function (event) {
  wss.send("Hello Server!");
});

// Наблюдает за сообщениями
wss.addEventListener("message", function (event) {
  console.log("Message from server ", event);
});


wss.addEventListener("close", function (event) {
  console.log("closed", event);
});
  }
}
