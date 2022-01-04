import axios from 'axios';
import { generateURL } from '../Routes';
import { saveSession, clearSession } from 'helpers/session';

class SessionController {
  static async signIn(user) {
    const response = await axios.post(generateURL('/sing-in'), user);
    const data = await response.data.data;
    saveSession(data);
    return data;
  }

  static async signUp(user) {
    const response = await axios.post(generateURL('/sing-up'), user);
    const data = await response.data.data;
    saveSession(data);
    return data;
  }

  static async singOut(token) {
    await axios.post(generateURL('/sing-out'), {}, {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    clearSession();
  }
}

export default SessionController;
