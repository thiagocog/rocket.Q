const Database = require('../db/config')

module.exports = {

  async create(req, res) {
    const { password } = req.body

    const db = await Database()

    let roomIdAlreadyExists = true
    let roomId
    
    
    while (roomIdAlreadyExists) {
      
      // Creating room id
      for(let i = 0; i < 6; i++) {
        i === 0 ? roomId = Math.floor(Math.random() * 10).toString() :
        roomId += Math.floor(Math.random() * 10).toString()
      }
      roomId = parseInt(roomId)
  
      // Verify if room id already exists
      const roomsIdsDB = await db.all(`SELECT id FROM rooms`)
      roomIdAlreadyExists = roomsIdsDB.some(idsDB => idsDB === roomId)

      // Insert room on database
      if (!roomIdAlreadyExists) {
        await db.run(`INSERT INTO rooms (
          id,
          pass
        ) VALUES (
          ${roomId},
          ${password}
        )`)
      }
    }

    await db.close()

    res.redirect(`/room/${roomId}`)
  },

  open(req, res) {
    const roomId = req.params
    console.log(roomId);
    res.render('room', roomId)
  }

}
