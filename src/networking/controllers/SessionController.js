import axios from 'axios';
import { generateURL } from '../Routes';
import { saveSession } from 'helpers/session';

class SessionController {
  static async signIn(user) {
    const response = await axios.post(generateURL('/login'), user);
    const data = await response.data.data;
    saveSession(data);
    return data;
  }

  static async signUp(user) {
    const response = await axios.post(generateURL('/register'), user);
    const data = await response.data.data;
    saveSession(data);
    return data;
  }
}

export default SessionController;
