// Imports
import { Request, Response } from "express";
// import Model from '../../../models/Model';

class Controller {

    public static addition(req: Request, res: Response) {
        // Params
        let number1: number = req.body.number1;
        let number2: number = req.body.number2;        

        if (number1 && number2) {
            let result = number1 + number2;

            res.status(200).json({ data: result });
        }
    } 

    public static substraction(req: Request, res: Response) {
        // Params
        let number1: number = req.body.number1;
        let number2: number = req.body.number2;

        if (number1 && number2) {
            let result = number1 - number2;

            res.status(200).json({ data: result });
        }
    }

    public static multiplication(req: Request, res: Response) {
        // Params
        let number1: number = req.body.number1;
        let number2: number = req.body.number2;

        if (number1 && number2) {
            let result = number1 * number2;

            res.status(200).json({ data: result });
        }
    }
}


export default Controller;
