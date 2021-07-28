

module.exports = {

  index(req, res, next) {
    const { roomId, questionId, action } = req.params
    const { password } = req.body

    console.log(`roomId = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`);
  }

}