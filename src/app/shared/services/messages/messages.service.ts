import io from "socket.io-client";
import { fromEvent, Observable } from "rxjs";
import { injectable } from "inversify";

@injectable()
export class MessagesService {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  constructor() {
    this.socket = io("localhost:5000"); //TODO: Use config
  }

  public init(): MessagesService {
    this.socket = io("localhost:50000");
    return this;
  }

  public sendMessage(message: any): void {
    this.socket.emit("clientMessage", message);
  }

  public onMessage(): Observable<any> {
    return fromEvent(this.socket, "serverMessage");
  }

  public disconnect(): void {
    this.socket.disconnect();
  }
}
