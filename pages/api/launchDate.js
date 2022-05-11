const DateLaunch = require('../../database/launchDate')
const { connectDB, disconnectDB } = require('../../database')

const getOne = async (req, res) => {
  const dateL = await DateLaunch.find().then((res) => {
    console.log(res)
  })
  if (!dateL) res.status(403).json('We did not find any date')
}

const EditOne = async (req, res) => {
  const dateL = await DateLaunch.findByIdAndUpdate(req.params.id, {
    ...req.body,
  })

  return res.json(dateL)
}

export default async function handler(req, res) {
  try {
    let db = await connectDB()
  } catch (e) {
    console.log(e)
  }

  switch (req.method) {
    case 'PATCH':
      await EditOne(req, res)
      break
    case 'GET':
      await getOne(req, res)
  }

  try {
    await disconnectDB()
  } catch (e) {
    console.log(e)
  }
}
