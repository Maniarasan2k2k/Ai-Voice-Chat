import jwt from "jsonwebtoken"

const gentoken = (userId) => {
  try {
    const out =jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "10d" });
    return out
    // console.log(out);
} catch (error) {
    console.log(error.message);
  }
};


export default gentoken