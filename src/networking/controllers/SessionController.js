import axios from 'axios';
import { generateURL } from '../Routes';
import { saveSession } from 'helpers/session';

class SessionController {
  static async signIn(user) {
    const response = await axios.post(generateURL('/login'), user);
    return saveSession(await response.data);
  }

  static async signUp(user) {
    const response = await axios.post(generateURL('/register'), user);
    return saveSession(await response.data);
  }
}

export default SessionController;
