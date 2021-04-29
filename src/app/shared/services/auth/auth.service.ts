import { injectable } from "inversify";
import axios from "axios";

const API_URL = "http://localhost:5000/auth";

@injectable()
export class AuthService {
  constructor() {}

  public async login(email: string, password: string) {
    return await axios
      .post(API_URL + "/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("token", response.data.access_token);
        }

        return response.data;
      });
  }

  public async register(email: string, password: string) {
    return await axios
      .post(API_URL + "/register", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.removeItem("token");
        return response.data;
      });
  }

  async logout() {
    localStorage.removeItem("token");
  }
}
