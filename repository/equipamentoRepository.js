import conexao from "./..config/conexao.js"

export async function criarEquipamento(equipamento) {
const sql = "INSERT INTO calibracao( nome, setor, status = (?,?,?) "
const [resultado] = await conexao.execute(sql,[
    calibracao.nome,
    calibracao.setor,
    calibracao.status,
]);
    return resultado.insertId; 
}

export async function listarEquipamentos() {
const sql = "SELECT * FROM equipamento ORDER BY id_calibracao"
const [linhas] = await conexao.execute(sql);
return linhas;

}

export async function buscarEquipamentoPorId(id) {
const sql = "DELETE FROM equipamento where id = ?"
const [resultado] = await conexao.execute(sql, [id])
return linhas [0];
}

export async function atualizarEquipamento(id, equipamento) {
        const sql = "UPDATE equipamento SET(nome, setor, status = (?,?,?)"
    const [resultado] = await conexao.execute(sql, [id
    
    calibracao.nome,
    calibracao.setor,
    calibracao.status,

])};
return resultado.affecrows;

export async function excluirEquipamento(id) {
        const sql = "DELETE FROM equipamento where id = ?"
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado.affectrows;
}
