const Tester = require('../../database/tester')
const { connectDB, disconnectDB } = require('../../database')

const createOne = async (req, res) => {
  let tester = await Tester.findOne({ email: req.body.email })
  if (tester)
    return res
      .status(401)
      .json('Thank you very much, we already have your email')
  let myTester = new Tester(req.body)
  await myTester.save()
  return res.redirect(301, '/')
}

const getAll = async (req, res) => {
  const testers = await Tester.find({})

  return res.json(testers)
}

const getOne = async (req, res) => {
  const tester = await Tester.find({ id: req.body.id })
  if (!tester) throw new AppError('We did not find the tester')
  return res.json(tester)
}

const EditOne = async (req, res) => {
  const tester = await Tester.findByIdAndUpdate(req.params.id, {
    ...req.body,
  })

  return res.json(tester)
}
export default async function handler(req, res) {
  try {
    await connectDB()
  } catch (e) {
    console.log(e)
  }

  switch (req.method) {
    case 'POST':
      await createOne(req, res)
      break
    case 'PATCH':
      await EditOne(req, res)
      break
    case 'GET':
      if (req.query.id === undefined) {
        await getAll(req, res)
      } else {
        await getOne(req, res)
      }
  }

  try {
    await disconnectDB()
  } catch (e) {
    console.log(e)
  }
}
