import { Container } from "inversify";

import { MessagesService } from "./messages/messages.service";

// Services
export const container = new Container();
container
  .bind<MessagesService>(MessagesService)
  .toConstantValue(new MessagesService());
