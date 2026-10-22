const Limpeza = require('../models/Limpeza');
 const { Op } = require('sequelize'); 

async function cadastrar(req, res) {
  try {
    const { titulo, autor, quantidade_estoque } = req.body;
 
    const limpeza = await Limpeza.create({
      titulo,
      autor,
      quantidade_estoque,
    });
 
    res.status(201).json(limpeza);
  } catch (erro) {
    res.status(400).json({
      mensagem: 'Erro ao cadastrar produtos de limpeza',
      erro: erro.message,
    });
  }
}
 
async function listar(req, res) {
  try {
    const produtos = await Limpeza.findAll();
    res.json(produtos);
  } catch (erro) {
    res.status(400).json({
      mensagem: 'Erro ao listar produtos de limpeza',
      erro: erro.message,
    });
  }
}

async function deletar(req, res) { 
  try { 
    const { id } = req.params; 
  
    const produto = await Limpeza.findByPk(id); 
    if (!livro) { 
      return res.status(404).json({ 
        mensagem: 'Produto não encontrado', 
      }); 
    } 
  
    await produto.destroy(); 
  
    res.status(200).json({ 
      mensagem: 'Produto removido com sucesso', 
    }); 
  } catch (erro) { 
    res.status(400).json({ 
      mensagem: 'Erro ao remover produto', 
      erro: erro.message, 
    }); 
  } 
} 
  
module.exports = { cadastrar, listar, deletar }; 
 
