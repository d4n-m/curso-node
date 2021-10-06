import HttpError from 'http-errors';
import usersModel from '../../models/usersModel.js';
import bcrypt from 'bcrypt';

const register = async (req, res, next) => {
    try {

        const body = req.body;

        if (!body.username || !body.password) {
            next(HttpError(400, { message: "Error en los parámetros de entrada." }));
        } else {
            const saltRounds = 10;
            const passwordHash = await bcrypt.hash(body.password, saltRounds);
            const passwordHash = await encrypt(body.password);
            console.log(passwordHash);
            const user = {
                username: body.username,
                password: passwordHash
            };

            const result = usersModel.createUser(user);

            if (result < 0) {
                next(HttpError(400, { message: "No se pudo registrar" }));
            } else {
                res.status(201).json(result);
            }
        }
    } catch (err) {
        next(err);
    }
}
export default {
    register
}