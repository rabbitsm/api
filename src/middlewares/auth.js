import decode from '../token/decode';

export default async function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    res.send('unauth');
  }
  const decoded = await decode(token.split(' ')[1].trim());
  req.auth = decoded;
  next();
}
