import HttpError from "http-errors";

const authUser = (req, res, next) => {

    const authorization = req.get('authorization');
    
    if (!authorization) {
        next(HttpError(401, { message: "No hay token" }));
    } else {
        const token = authorization.substring(7);

        // desencriptar el token para obtener el user
        // y comparar el usuario del token con el usuario de la bbdd

        token ? next() : next(HttpError(401, { message: "El token no es correcto." }));
    }
}

export default authUser;