import {DataTypes} from 'sequelize'
import sequelize from '../config/database.js'

const KotaModel = sequelize.define(
    'Kota',
    {
        id_kota: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nama_kota: {
            type: DataTypes.STRING
        },
        provinsi: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'kota',
        createdAt: true,
        updatedAt: false
    }
)

export default KotaModel
