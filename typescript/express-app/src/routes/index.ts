import { Router, Request, Response} from "express";

enum ResponseType {
    OK = 'OK',
    Error = 'ERROR'
}
interface ApiResponse {
    type: ResponseType,
    data?: any
}

const router = Router();

router.get('', async (req: Request, res: Response<ApiResponse>) => {
    
    if (false) {
        return res.send({type: ResponseType.Error})
    }
    return res.send({type: ResponseType.OK, data: { message: 'hi' }})
})

export default router