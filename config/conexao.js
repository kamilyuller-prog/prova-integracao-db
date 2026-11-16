import mysql from " mysql2/promisse ";

const conexao = mysql.createPool({ 
    host: process.env.db_host,
    port: Number(process.env.db_port),
    user: process.env.db_user,
    password: process.env.db_password,
    name: process.env.db_name,
    waitForConnections: true,
    connectionsLimit: 10
})
export default conexao;
