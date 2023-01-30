import { db } from "../db.js";

export const getUsers = (_,res)=>{
        const q = "SELECT * FROM cadastro_cursos";

        db.query(q, (err, data)=> {
            if (err) return res.json(err);

            return res.status(200).json(data);
        });
};

export const addUser = (req, res) => {
    const q = 
    "INSERT INTO crud.cadastro_cursos(`nome`, `professor_resp`, `categoria`, `descricao`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.professor_resp,
        req.body.categoria,
        req.body.descricao,
    ];

    db.query(q, [values], (err) =>{
        if(err) return res.json(err);

        return res.status(200).json("Curso cadastrado com sucesso!");
    });
};

export const updateUser = (req, res) => {
    const q = 
    "UPDATE cadastro_cursos SET `nome` = ?, `professor_resp` = ?, `categoria` = ?, `descricao` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.professor_resp,
        req.body.categoria,
        req.body.descricao,
    ];

    db.query(q, [...values, req.params.id], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("Curso atualizado com sucesso!");
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM cadastro_cursos WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Curso deletado com sucesso!");
    });
}