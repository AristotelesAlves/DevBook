const { ipcRenderer } = require('electron');

export async function consultarDados() {
    try {
        const sql = "SELECT * FROM tabela WHERE condição = ?";
        const params = ['valorCondicao'];
        const dados = await ipcRenderer.invoke('realizar-consulta', sql, params);
        console.log(dados);
    } catch (error) {
        console.error('Erro ao realizar consulta:', error);
    }
}
