import {DataTypes} from 'sequelize'
import kotaModel from './kotaModel.js'
import {v4 as uuidv4} from 'uuid'
import sequelize from '../config/database.js'

const ATCSModel = sequelize.define('atcs', {
  id_atcs: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: () => uuidv4()
  },
  nama_atcs: {
    type: DataTypes.STRING
  },
  lat: {
    type: DataTypes.STRING
  },
  long: {
    type: DataTypes.STRING
  },
  id_kota: {
    type: DataTypes.INTEGER,
    references: {
      model: kotaModel,
      key: 'id_kota'
    }
  },
  stream_url: {
    type: DataTypes.STRING
  },
  is_monitoring: {
    type: DataTypes.STRING
  }
})

ATCSModel.belongsTo(kotaModel, {foreignKey: 'id_kota'})

export default ATCSModel
