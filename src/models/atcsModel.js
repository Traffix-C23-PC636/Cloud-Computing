import {DataTypes} from 'sequelize'
import {v4 as uuidv4} from 'uuid'
import sequelize from '../config/database.js'

const ATCSModel = sequelize.define('Atcs', {
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
  kota_id: {
    type: DataTypes.INTEGER,
    foreignKey: true
  },
  stream_url: {
    type: DataTypes.STRING
  },
  is_monitoring: {
    type: DataTypes.STRING
  },
}, {
  freezeTableName: true,
  tableName: 'atcs'
})




export default ATCSModel
