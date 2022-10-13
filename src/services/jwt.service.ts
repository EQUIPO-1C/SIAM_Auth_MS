import jwt from 'jsonwebtoken';
import JWTPayload from '../interfaces/jwt_payload.interface';
import { Response } from 'express';

function generateJWTToken(payload: JWTPayload) {
    return jwt.sign(payload, process.env.JWT_SECRET || 'JWTsecret', { expiresIn: '1h' });
}

/*
function generateRefreshToken(payload:JWTPayload) {
    return {
        token: jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET || 'refreshSecret', { expiresIn: '7d' }),
        expiresIn: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000))
    }
}*/

function verifyJWTToken(res: Response, token: string) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'JWTsecret') as JWTPayload; 
        res.status(200).json({
            message: "Token is valid",
            id: decoded.id,
            username: decoded.username
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Failed to authenticate token.' });
    }

}

export { generateJWTToken, /*generateRefreshToken*/ verifyJWTToken };