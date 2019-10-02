class SessionController {
  store(req, res) {
    return res.json({ ok: true });
  }
}

module.exports = new SessionController();
