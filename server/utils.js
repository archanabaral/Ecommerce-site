import jwt from "jsonwebtoken";
export const generateToken = (user) => {
  //sign method helps to generate token first parameter is object we are gona use to generate token second parameter is jsonwebtoken secret it is like a key to encrypt data and generate a token
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    // eslint-disable-next-line no-undef
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};
export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); //Bearer xxxxxxxxx
    //decrypt token

    // eslint-disable-next-line no-undef
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(400).send({ msg: "Invalid Token" });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ msg: "No Token" });
  }
};
