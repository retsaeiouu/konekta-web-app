import jwt from 'jsonwebtoken';
import { TokenPayload } from '../models/JWT';

const secret = process.env.JWT_SECRET;
const expiry = 60 * 60 * 24; // 1 day

export const generateToken = async (payload: TokenPayload) => {
  if (!secret) throw new Error('Secret environment variable is not supplied.');
  return new Promise<string>((resolve, reject) => {
    jwt.sign(
      payload,
      secret!,
      { algorithm: 'HS512', expiresIn: expiry },
      (error, token) => {
        if (error) {
          reject(error);
        } else {
          resolve(token!);
        }
      }
    );
  });
};

export const decodeToken = async (token: string) => {
  if (!secret) throw new Error('Secret environment variable is not supplied.');
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret!, { algorithms: ['HS512'] }, (error, decoded) => {
      if (error) {
        reject(error);
      } else {
        resolve(decoded);
      }
    });
  });
};
