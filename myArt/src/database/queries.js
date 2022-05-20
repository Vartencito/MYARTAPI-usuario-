export const queries = {
    getUsuarios: "SELECT * FROM Usuario",
    createUsario: `INSERT INTO Usuario (username, password, works, followers, follows, premium, description)
    VALUES (@username, @password, @works, @followers, @follows, @premium, @description)`,
    getUsuarioById: "SELECT * FROM Usuario WHERE Id = @Id",
    borrarUsuario: "DELETE FROM Usuario WHERE Id = @Id",
    actulizarUsuario: `UPDATE Usuario SET username = @username, password = @password, works = @works, followers = @followers
    , follows = @follows, premium = @premium, description = @description WHERE Id = @Id`
}