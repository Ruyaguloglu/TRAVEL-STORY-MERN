
// JWT (JSON Web Token) tabanlı kimlik doğrulama
//middleware (ara katman) fonksiyonudur. Web uygulamanda kullanıcıların kimliğini doğrulamak için bu mekanizmayı kullanıyoruz.
const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
   const authHeader = req.headers["authorization"];
   const token = authHeader && authHeader.split(" ")[1];

//authHeader değişkenine req.headers["authorization"] atanıyor. Eğer başlık yoksa undefined olur.
//Token, Bearer <TOKEN> formatında geldiği için, split(" ")[1] ile sadece token kısmı alınır.


   //No token, 401 unauthorized : kullanıcının giriş yapmadığı veya yetkili olmadığı 
   if (!token) return res.sendStatus(401);

   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    // Token invalid, forbidden
    if (err) return res.sendStatus(401);
    req.user = user;
    next();
    });
}

module.exports = {
  authenticateToken,
};










