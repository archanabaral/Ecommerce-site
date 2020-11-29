import  jwt  from "jsonwebtoken";
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
      expiresIn: "10m",
    }
  );
};
