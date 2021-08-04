const Database = require('../db/config')

module.exports = {

  async index(req, res, next) {
    const { roomId, questionId, action } = req.params
    const { password } = req.body
    const db = await Database()
    // console.log(`roomId = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`)

    const room = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)

    // Delete or update questions
    if (room.pass === password) {
      if (action === 'delete' ) {
        await db.run(`DELETE FROM questions WHERE id = ${questionId}`)
      } else if (action === 'check') {
        await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)
      }
    }



    res.redirect(`/room/${roomId}`)
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
      '${question}',
      ${roomId},
      0
    )`)

    res.redirect(`/room/${roomId}`)
  }

}