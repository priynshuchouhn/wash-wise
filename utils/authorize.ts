import * as jwt from 'jsonwebtoken';

export default function Authorize(token: any){
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as any;
    if(decodedToken.role == 'Admin') {
        return true;
    }
    return false
}