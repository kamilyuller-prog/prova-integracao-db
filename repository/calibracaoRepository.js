
import conexao from "/..config/conexao.js";
const sql = "INSERT INTO calibracao( equipamentoId, dataCalibracao, resultado, responsavel) = (?,?,?,?) "

export async function criarCalibracao(calibracao) {
const sql = "INSERT INTO calibracao( equipamentoId, dataCalibracao, resultado, responsavel) = (?,?,?,?) "
const [resultado] = await conexao.execute(sql,[
    calibracao.equipamentoId,
    calibracao.dataCalibracao,
    calibracao.resultado,
    calibracao.responsavel
]);
    return resultado.insertId; 

}

export async function listarCalibracoes() {
const sql = "SELECT * FROM calibracao ORDER BY id_calibracao"
const [linhas] = await conexao.execute(sql);
return linhas;
}

export async function listarCalibracoesDetalhadas() {
const sql = "SELECT * FROM calibracao WHERE id = ?"
const [linhas] = await conexao.execute(sql, [id])

return linhas [0];
}

export async function buscarCalibracaoPorId(id) {
const sql = "DELETE FROM calibracao where id = ?"
const [resultado] = await conexao.execute(sql, [id])
return linhas [0];

}

export async function atualizarCalibracao(id, calibracao) {
    const sql = "UPDATE calibracao SET(equipamentoId, dataCalibracao, resultado, responsavel = (?,?,?,?)"
    const [resultado] = await conexao.execute(sql, [id
    
    calibracao.equipamentoId,
    calibracao.dataCalibracao,
    calibracao.resultado,
    calibracao.responsavel

])};
return resultado.affecrows;
export async function excluirCalibracao(id) {
    const sql = "DELETE FROM calibracao where id = ?"
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado.affectrows;
}
