import jwt from 'jsonwebtoken';

export default async function encode(data) {
  const token = await jwt.sign(data, process.env.SECRET);
  return token;
}
