import { NextFunction, Request, Response} from 'express';
import jwt from "jsonwebtoken";
import { JWTSECRET} from './config';

export const userMiddleware = (req:Request, res:Response, next:NextFunction)=>
{
      const header = req.headers["authorization"];
      const decoded = jwt.verify(header as string, JWTSECRET)

      if(decoded){
        //@ts-ignore
    req.userId = decoded.id;
    next();
    }
    else
    {
         res.status(403).json({
            message:"You must have to login to continue!"
         });
    }
}
