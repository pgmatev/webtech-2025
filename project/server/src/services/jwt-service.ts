const jwt = require("jsonwebtoken");

export class JwtService {
  static generateToken(username: string): string {
    const token = jwt.sign(
      { username: username },
      process.env.JWT_PRIVATE_KEY,
      {
        expiresIn: process.env.JWT_EXPIRY_TIME,
      }
    );

    return token;
  }

  static verifyToken(token: string) {
    const verifiedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

    if (!verifiedToken) {
      return null;
    }

    return verifiedToken;
  }
}
