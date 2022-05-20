import { getConnection, sql, queries } from '../database';

//Traer todos los usuarios

export const getUsuarios = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getUsuarios);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.msg('Error en el servidor'));
    }
};

//Crear un usuario
export const crearUsuario = async(req, res) => {
    const {
        username,
        password,
        works,
        followers,
        follows,
        premium,
    } = req.body

    let { description } = req.body;

    if (description == null) {
        description = " ";
    } else if (username == null || password == null || works == null ||
        followers == null || follows == null || premium == null) {
        return res.status(400).json({ msg: 'faltan datos' });
    }

    console.log(
        username,
        password,
        works,
        followers,
        follows,
        premium,
        description
    );
    try {
        const pool = await getConnection();
        await pool.request()
            .input("username", sql.VarChar(50), username)
            .input("password", sql.VarChar(50), password)
            .input("works", sql.Int, works)
            .input("followers", sql.Int, followers)
            .input("follows", sql.Int, follows)
            .input("premium", sql.Bit, premium)
            .input("description", sql.Text, description)
            .query(queries.createUsario);
        res.json({ username, password, works, followers, follows, premium, description });
    } catch (error) {
        res.status(500);
        res.send(error.msg('Error en el servidor'));
    }
}

//Obtener un usuario

export const getUsuarioById = async(req, res) => {

    const { Id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Id", Id)
            .query(queries.getUsuarioById);

        res.send(result.recordset[0]);

    } catch (error) {
        res.status(500);
        res.send(error.msg('Eror en el servidor'));
    }

}

//Borrar un usuario

export const borrarUsuario = async(req, res) => {

    const { Id } = req.params;

    try {

        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Id", Id)
            .query(queries.borrarUsuario);

        res.send('Usuario eliminado correctamente');

    } catch (error) {
        res.status(500);
        res.send(error.msg('Error en el servidor'));
    }

}

// Actualizar un Usuario

export const actualizarUsuario = async(req, res) => {

    const {
        username,
        password,
        works,
        followers,
        follows,
        premium,
        description
    } = req.body

    const { Id } = req.params;

    if (username == null || password == null || works == null ||
        followers == null || follows == null || premium == null || description == null) {
        return res.status(400).json({ msg: 'faltan datos' });
    }

    try {
        const pool = await getConnection();
        await pool.request()
            .input("Id", Id)
            .input("username", sql.VarChar(50), username)
            .input("password", sql.VarChar(50), password)
            .input("works", sql.Int, works)
            .input("followers", sql.Int, followers)
            .input("follows", sql.Int, follows)
            .input("premium", sql.Bit, premium)
            .input("description", sql.Text, description)
            .query(queries.actulizarUsuario);
        res.json({ username, password, works, followers, follows, premium, description });
    } catch (error) {
        res.status(500);
        res.send(error.msg('Error en el servidor'));
    }

}