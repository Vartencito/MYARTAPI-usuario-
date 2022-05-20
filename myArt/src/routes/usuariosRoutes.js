import { Router } from "express";
import { crearUsuario, getUsuarioById, getUsuarios, borrarUsuario, actualizarUsuario } from "../controllers/usuariosController";

const router = Router();

router.get('/usuarios', getUsuarios);

router.get('/usuarios/:Id', getUsuarioById);

router.post('/usuarios', crearUsuario);

router.delete('/usuarios/:Id', borrarUsuario);

router.put('/usuarios/:Id', actualizarUsuario);

export default router;