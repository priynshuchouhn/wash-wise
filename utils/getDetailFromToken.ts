import * as jwt from 'jsonwebtoken';
export default function getDetailsFromToken(token:any){
    const decodedCode = jwt.verify(token, process.env.JWT_SECRET!)
    return decodedCode;
}