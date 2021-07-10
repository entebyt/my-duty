import axios from 'axios'

export const signUserIn = async (username, password) => {
    const data = {
      username: username,
      password: password,
    }
    try {
      console.log('data === ', data);
      console.log(`${base}/login`)
      const response = await axios.post('https://localhost:3000/api/v1/rest/user/', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        },
      })

        console.log('login user ===> ', response)
        return response
         }
    catch (error) {
      return error
    }
  }