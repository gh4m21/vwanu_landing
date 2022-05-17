import axios from 'axios'

export const sendMail = async (data) => {
  try {
    let request = await axios
      .post('/api/email', {
        name: data.firstName + ' ' + data.lastName,
        email: data.email,
        subject: 'Thank you for applying to be a Beta Tester.',
        msg: 'Test',
      })
      .then((res) => {
        return res
      })
    return request.status === 200 ? true : false
  } catch (err) {
    console.error(err)
  }
}
