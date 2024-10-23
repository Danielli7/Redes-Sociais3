const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"
async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasNoMundo = (dados.total_pessoas_mundo) / 1e9
    const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9
    const horas = parseInt(dados.tempo_medio)