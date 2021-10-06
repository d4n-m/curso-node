import HttpError from 'http-errors';
import usersModel from '../../models/usersModel.js';

const login = (req, res, next) => {
    const body = req.body;
    let token = "1234";

    if (!body.username || !body.password) {
        next(HttpError(400, { message: "Username or password incorrect." }));
    } else {
        const user = {
            username: body.username,
            password: body.password
        };

        if (usersModel.isRegistered(user)) {
            res.status(201).json({ token: token });
        } else {
            next(HttpError(401, { message: "Usuario no existe." }));
        }
    }
}

export default {
    login
}