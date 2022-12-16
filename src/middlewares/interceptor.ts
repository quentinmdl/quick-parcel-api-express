
import { Request, Response, NextFunction} from 'express';

export const Interceptor = (req: Request, res: Response, next: NextFunction) => {
    let body = req.body;
    if(body) {
        if (body.number1 && body.number2) {
            if (typeof body.number1 != "number" || typeof body.number2 != "number") {
                res.status(400).json({ message: "Accept only number values" });
            }
        } else {
            res.status(400).json({ message: "Missing fields" });
        }
    } else {
        res.status(400).json({ message: "Body missing" });
    }   
    next()
}