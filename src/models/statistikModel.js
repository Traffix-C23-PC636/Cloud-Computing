import {DataTypes} from 'sequelize'
import ATCSModel from './atcsModel.js'
import {v4 as uuidv4} from "uuid";
import sequelize from "../config/database.js";

const StatistikModel = sequelize.define('DataStatistik', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => uuidv4()
    },
    id_atcs: {
        type: DataTypes.STRING,
        foreignKey: true
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
    data_in: {
        type: DataTypes.INTEGER
    },
    data_out: {
        type: DataTypes.INTEGER
    }
}, {
    modelName: 'DataStatistik',
    tableName: 'data_statistik',
    timestamps: false,
    createdAt: 'createdAt'
});

ATCSModel.hasMany(StatistikModel, {foreignKey: 'id_atcs', as: 'atcs'});
StatistikModel.belongsTo(ATCSModel, {foreignKey: 'id_atcs', as: 'atcs'});

export default StatistikModel
