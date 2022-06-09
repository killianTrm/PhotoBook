import {User} from './redux/slices/authentication.slice';
import {sleep} from './utils';

export interface LoginForm {
  // #region Properties (2)

  login: string;
  password: string;

  // #endregion Properties (2)
}

class Api {
  // #region Public Methods (2)

  public async connect(loginForm: LoginForm): Promise<User> {
    const response = await fetch('http://localhost:3000/api/connect', {
      method: 'POST',
      body: JSON.stringify(loginForm),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const status = response.status;
    console.log('status: ', status);
    if (status !== 200) {
      throw new Error('oups...');
    }
    const user: User = await response.json();
    return user;
  }

  async disconnect() {
    fetch('http//localhost:3000/api/disconnect', {
      method: 'POST',
    });
  }

  async isConnected(): Promise<User | undefined> {
    const response = await fetch('http://localhost:3000/api/is-connected');
    const status = response.status;
    console.log('status: ', status);
    if(status !== 200) {
      return;
    }
    const user = await response.json();
    return user;
  }

  // #endregion Public Methods (2)
}

const api = new Api();

export default api;
