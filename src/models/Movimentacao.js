const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Limpeza = require('./Limpeza');
const Limpeza = require('./Limpeza');
const Usuario = require('./Usuario'); 

const Movimentacao = sequelize.define('Movimentacao', {
  tipo: {
    type: DataTypes.ENUM('entrada', 'saida'),
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});
 
Limpeza.hasMany(Movimentacao, { foreignKey: 'limpeza_id' });
Movimentacao.belongsTo(Limpeza, { foreignKey: 'limpeza_id' });
Usuario.hasMany(Movimentacao, { foreignKey: 'usuario_id' }); 
Movimentacao.belongsTo(Usuario, { foreignKey: 'usuario_id' }); 
 
module.exports = Movimentacao;
