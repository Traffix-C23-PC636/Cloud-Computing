import {DataTypes} from 'sequelize'
import sequelize from '../config/database.js'
import ATCSModel from "./atcsModel.js";

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
        freezeTableName: true,
        tableName: 'kota',
        createdAt: true,
        updatedAt: false
    }
)

KotaModel.hasMany(ATCSModel, {foreignKey: 'kota_id', as: 'kota'});
ATCSModel.belongsTo(KotaModel, {foreignKey: 'kota_id', as: 'kota'});
export default KotaModel
