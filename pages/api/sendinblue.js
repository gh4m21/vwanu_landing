const SibApiV3Sdk = require('sib-api-v3-sdk')
const defaultClient = SibApiV3Sdk.ApiClient.instance

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key']
apiKey.apiKey =
  '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'

const sendinblue = (sendSmtpEmail) => {
  const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi()

  console.log(tranEmailApi)

  const sender = { email: 'vwanu@vwanu.com' }
  tranEmailApi.sendTransacEmail({ sender, sendSmtpEmail }).then(
    function (data) {
      return true
    },
    function (error) {
      console.error(error)
      return false
    }
  )
}

module.exports = sendinblue
