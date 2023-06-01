import {DataTypes, Model} from 'sequelize'
import {connection} from "../config/database.js";
import kotaModel from "./kotaModel.js";
import KotaModel from "./kotaModel.js";

class ATCSModel extends Model {
}

ATCSModel.init({
  id_atcs: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
    type: DataTypes.STRING,
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
  },
}, {
  connection,
  tableName: 'atcs'
})

ATCSModel.belongsTo(KotaModel, {foreignKey: 'id_kota'});


export default ATCSModel
