import {DataTypes, Model} from 'sequelize'
import ATCSModel from './atcsModel.js'
import {connection} from '../config/database.js'

class StatistikModel extends Model {
}

StatistikModel.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        id_atcs: {
            type: DataTypes.STRING,
            references: {
                model: ATCSModel,
                key: 'id_atcs'
            }
        },
        timestamp: {
            type: DataTypes.STRING
        },
        car: {
            type: DataTypes.INTEGER
        },
        motorcycle: {
            type: DataTypes.INTEGER
        },
        bus: {
            type: DataTypes.INTEGER
        },
        truck: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE
        }
    },
    {
        connection,
        modelName: 'DataStatistik',
        tableName: 'data_statistik',
        timestamps: false
    }
)

export default StatistikModel
