import { MetasConn } from '../connections/metasConn'
import { Model, DataTypes } from 'sequelize'

class SugModel extends Model {}

SugModel.init({
  FECHA: { type: DataTypes.DATE, allowNull: false, primaryKey: true },
  ZONA: { type: DataTypes.NUMBER, allowNull: false },
  CCOSTO: { type: DataTypes.NUMBER, allowNull: false },
  SUCURSAL: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true },
  VTA_CHANCE: { type: DataTypes.NUMBER, allowNull: false },
  VTA_PAGAMAS: { type: DataTypes.NUMBER, allowNull: false },
  VTA_PAGATODO: { type: DataTypes.NUMBER, allowNull: false },
  VTA_GANE5: { type: DataTypes.NUMBER, allowNull: false },
  VTA_PATA_MILLONARIA: { type: DataTypes.NUMBER, allowNull: false },
  VTA_DOBLECHANCE: { type: DataTypes.NUMBER, allowNull: false },
  VTA_CHANCE_MILLONARIO: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG1: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG2: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG3: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG4: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG5: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG6: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG7: { type: DataTypes.NUMBER, allowNull: false },
  META_SUG8: { type: DataTypes.NUMBER, allowNull: false },
  USUARIO: { type: DataTypes.STRING, allowNull: true },
  SUGERIDO1: { type: DataTypes.STRING, allowNull: true },
  SUGERIDO2: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO3: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO4: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO5: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO6: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO7: { type: DataTypes.STRING, allowNull: false },
  SUGERIDO8: { type: DataTypes.STRING, allowNull: false },
  VERSION1: { type: DataTypes.STRING, allowNull: false },
  VERSION2: { type: DataTypes.STRING, allowNull: false },
  NOMBRES: { type: DataTypes.STRING, allowNull: true }
},{
  sequelize: MetasConn,
  modelName: 'sug_vend',
  tableName: 'SUGERIDOS_VENDEDOR',
  timestamps: false
})

