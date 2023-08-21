const fs = require('fs');
const fetch = require('node-fetch');

// API
const apiUrl = 'http://localhost:3000/users';

// Pegando todos os gets
async function recuperandoDados() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao recuperar dados:', error);
    throw error;
  }
}

// Salvando arquivos em TXT
function salvandoArquivos(data) {
  const textData = JSON.stringify(data, null, 2);
  fs.writeFileSync('users.txt', textData);
  console.log('Dados salvos em "users.txt"');
}

// Recuperando os dados
async function coletandoDados() {
  try {
    const dados = await recuperandoDados();
    salvandoArquivos(dados);
  } catch (error) {
    console.error('Erro no processo principal:', error);
  }
}
coletandoDados()