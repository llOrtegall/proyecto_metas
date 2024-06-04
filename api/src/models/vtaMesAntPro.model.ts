import { MetasConn } from '../connections/metasConn'
import { Model, DataTypes } from 'sequelize'

class vtaMesAntCump extends Model { }

vtaMesAntCump.init(
  {
    MES: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    SUCURSAL: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ZONA: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    CCOSTO: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    CHANCE: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    PAGAMAS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    PAGATODO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    GANE5: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    PAGATODO_JAMUNDI: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    CHOLADITO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    PATA_MILLONARIA: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    DOBLECHANCE: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    CHANCE_MILLONARIO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    ASTRO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    LOTERIA_FISICA: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    LOTERIA_VIRTUAL: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    BETPLAY: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    GIROS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    SOAT: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    RECAUDOS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    RECARGAS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    RASPE: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_CHANCE: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_PAGAMAS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_PAGATODO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_GANE5: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_PAGATODO_JAMUNDI: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_CHOLADITO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_PATA_MILLONARIA: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_DOBLECHANCE: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_CHANCE_MILLONARIO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_ASTRO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_LOTERIA_FISICA: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_LOTERIA_VIRTUAL: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_BETPLAY: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_GIROS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_SOAT: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_RECAUDOS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_RECARGAS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VTM_RASPE: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_CHANCE: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_PAGAMAS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_PAGATODO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_GANE5: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_PAGATODO_JAMUNDI: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_CHOLADITO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_PATA_MILLONARIA: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_DOBLECHANCE: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_CHANCE_MILLONARIO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_ASTRO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_LOTERIA_FISICA: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_LOTERIA_VIRTUAL: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_BETPLAY: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_GIROS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_SOAT: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_RECAUDOS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_RECARGAS: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    EJE_RASPE: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    QTY_COLOCADORES: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    PROMO1: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    META_PROMO1: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    PROMO2: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    META_PROMO2: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    VERSION: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
  sequelize: MetasConn,
  modelName: 'vtaMesAntCump',
  tableName: 'HIST_META_ACUMULADO',
  timestamps: false
})

export { vtaMesAntCump }