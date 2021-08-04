const Database = require('../db/config')

module.exports = {

  index(req, res, next) {
    const { roomId, questionId, action } = req.params
    const { password } = req.body

    console.log(`roomId = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`);
  },

  async create(req, res) {
    const { question } = req.body
    const { roomId } = req.params
    const db = await Database()

    await db.run(`INSERT INTO questions (
      title,
      room,
      read
    ) VALUES (
      "${question}",
      ${roomId},
      0
    )`)

    res.redirect(`/room/${roomId}`)
  }

}