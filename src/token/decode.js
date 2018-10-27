import jwt from 'jsonwebtoken';

export default async function decode(token) {
  const decoded = await jwt.verify(token, process.env.SECRET);
  return decoded;
}
