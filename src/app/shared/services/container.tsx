import { Container } from "inversify";

import { AuthService } from "./auth/auth.service";
import { MessagesService } from "./messages/messages.service";

// Services
export const container = new Container();
container
  .bind<MessagesService>(MessagesService)
  .toConstantValue(new MessagesService());

container.bind<AuthService>(AuthService).toConstantValue(new AuthService());
