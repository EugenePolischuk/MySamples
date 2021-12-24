import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export class Api {
  static sendEmail = async (mail: string) => {
    const response = await axios({
      method: 'post',
      url: `${apiUrl}/auth/login`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        email: mail
      }
    });
    return response;
  };
}
