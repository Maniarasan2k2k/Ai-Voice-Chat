import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("isAuth => Token:", token);

    if (!token) {
      return res.status(401).json({ message: "Token not found" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log("isAuth => Decoded:", verifyToken);

    if (!verifyToken.userId) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.error("isAuth error:", error.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default isAuth;
