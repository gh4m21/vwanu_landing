
const environments = {}
environments.production = {
  NAME: 'Production',
  PORT: 3000,
  DB_URI: 'mongodb://127.0.0.1:27017/Kayimit',
}
environments.development = {
  NAME: 'Development',
  PORT: 4000,
  DB_URI:
    'mongodb+srv://wadson:Mesaffaires08@testers.h47az.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  JWT_SECRET: 'jwtSecret',
}

const DESIRED_ENVIRONMENT =
  typeof process.env.NODE_ENVIRONMENT === 'string'
    ? process.env.NODE_ENVIRONMENT
    : false

const ENVIRONMENT_TO_RETURN =
  typeof environments[DESIRED_ENVIRONMENT] === 'object'
    ? environments[DESIRED_ENVIRONMENT]
    : environments.development

module.exports = ENVIRONMENT_TO_RETURN
