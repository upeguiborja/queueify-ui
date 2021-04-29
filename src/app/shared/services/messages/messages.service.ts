import io from "socket.io-client";
import { fromEvent, Observable } from "rxjs";
import { injectable } from "inversify";

@injectable()
export class MessagesService {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  constructor() {
    this.socket = io("localhost:5000"); //TODO: Use config
  }

  public test(): void {
    console.log("Injected");
  }

  public sendMessage(message: any): void {
    console.info("Sending Message");
    this.socket.emit("msgToServer", { message: message });
  }

  public onMessage(): Observable<any> {
    return fromEvent(this.socket, "serverMessage");
  }

  public disconnect(): void {
    this.socket.disconnect();
  }
}
