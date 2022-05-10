var mongoose = require('mongoose')
const Tester = mongoose.model('tester')
const { connectDB, disconnectDB } = require('../../database')
const createOne = () => {
  module.exports.createOne = catchAsync(async (req, res) => {
    let tester = await Tester.findOne({ username: req.body.email })
    if (tester)
      throw new AppError('Thank you very much we already have your email', 401)

    tester = new Tester(req.body)
    await tester.save()
    return res.json(tester)
  })
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
  await connectDB()
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

  await disconnectDB()
}
