import {DataTypes, Model} from 'sequelize'
import {connection} from "../config/database.js";

class KotaModel extends Model {
}

KotaModel.init({
  id_kota: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  nama_kota: {
    type: DataTypes.STRING
  },
  provinsi: {
    type: DataTypes.STRING
  }
}, {
  connection,
  tableName: 'kota',
  createdAt: true,
  updatedAt: false
})

export default KotaModel
