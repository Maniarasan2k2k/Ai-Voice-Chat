import jwt from "jsonwebtoken"

const genToken = (userId) => {
  try {
      return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "10d" });
    // console.log(out);
} catch (error) {
    console.log(error.message);
  }
};


export default genToken