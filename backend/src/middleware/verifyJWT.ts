
// Importación de módulos y dependencias
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

// Definición de la función middleware
// La función toma tres parámetros: req, res y next.
export const verifyJWT = (
    req: any,
    res: Response,
    next: NextFunction
) => {
    // Extracción del token del encabezado de autorización
    // El middleware primero intenta obtener el token JWT del encabezado de autorización de la solicitud.
    // Los encabezados de HTTP son sensibles a mayúsculas y minúsculas, por lo que se verifica tanto authorization como Authorization para obtener el token.
    const authHeader = req.headers.authorization || req.headers.Authorization;
    console.log("HEADER:", authHeader);

    // Verificación del formato del token:
    // El código verifica si el token comienza con la cadena "Bearer ". El formato correcto para un token JWT es "Bearer <token>", por lo que si no comienza con "Bearer ", esto podría indicar que el token no es válido.
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);

    // Si el token tiene el formato correcto, el código extrae el token real quitando la parte "Bearer " utilizando el método split.
    const token = authHeader.split(" ")[1];
    console.log("TOKEN: ", token);

    // Verificación del token utilizando jwt.verify:
    // Si el token es válido, se ejecuta la función de devolución de llamada proporcionada a jwt.verify.
    jwt.verify(
        token,
        "12345",
        (err: any, decoded: any) => {
            // Si hay algún error al verificar el token (por ejemplo, token inválido o expirado), se devuelve una respuesta de estado 403 con un mensaje de error.
            if (err) return res.status(403).json({
                message: err
            });
            // Si la verificación del token es exitosa, el código extrae la información del usuario (como el correo electrónico) desde el token decodificado y los almacena en el objeto req. Esto permite que otros middlewares o controladores accedan a esta información más adelante en el flujo de solicitud.
            req.email = decoded.UserInfo.email;
            
            // Si todo ha ido bien hasta este punto, se llama a la función next() para pasar el control al siguiente middleware o controlador en la cadena de manejo de solicitudes de Express.
            next();
        }
    )
}