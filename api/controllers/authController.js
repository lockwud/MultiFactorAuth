const speakeasy = require('speakeasy');

const getSecret = (req,res,next)=>{
    
    const secret = speakeasy.generateSecret({length: 25});
    res.status(200).send({
      "secret": secret.base32
    })
};

const getToken = (req,res,next)=>{
  res.send({
        
    "token": speakeasy.totp({
      secret: req.body.secret,
     encoding: "base32"
    }),
    "Time to Expire": (50 - Math.floor((new Date().getTime()/1000.0 % 50)))
    
})};

const verifyToken = (req,res,next)=> {
  

    const secret = req.body.secret
    const token = req.body.token

   const valid = speakeasy.totp.verify({
    secret,
    encoding: "base32",    
    token,
    window: 0
   });
   if (valid) {
    res.status(200).json({ message: 'Verified' });
  } else {
    res.status(401).json({ message: 'Code is invalid' });
  }
}

  
    


 

  






module.exports = {
  getSecret,
  getToken,
  verifyToken
}