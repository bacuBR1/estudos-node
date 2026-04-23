const db = require("./db");

const Bolsistas = db.sequelize.define("bolsistas", {
  nome: {
    type: db.Sequelize.DataTypes.STRING(100),
    allowNull: false,
  },
  matricula: {
    type: db.Sequelize.DataTypes.INTEGER,
    primaryKey: true,   
    allowNull: false,
  },
  email: {
    type: db.Sequelize.DataTypes.STRING(200),
    allowNull: false,
    unique: true,       
  },
  senha: {
    type: db.Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "bolsistas", 
  timestamps: false,      
});

module.exports = Bolsistas;