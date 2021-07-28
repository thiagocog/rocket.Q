const Database = require('../db/config')

module.exports = {

  async create(req, res) {
    const { password } = req.body

    const db = await Database()

    // ----- creating room id
    let roomId
    for(let i = 0; i < 6; i++) {
      i === 0 ? roomId = Math.floor(Math.random() * 10).toString() :
      roomId += Math.floor(Math.random() * 10).toString()
    }
    roomId = parseInt(roomId)
    // -----

    await db.run(`INSERT INTO rooms (
      id,
      pass
    ) VALUES (
      ${roomId},
      ${password}
    )`)

    await db.close()

    res.redirect(`/room/${roomId}`)
  }

}

// P A 05 I