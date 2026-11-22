function login(req) { const code = req.body.code; return eval(code); }
module.exports = { login };
