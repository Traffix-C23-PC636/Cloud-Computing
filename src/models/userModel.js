import {DataTypes, Model} from 'sequelize'
import {connection} from "../config/database.js";

class UserModel extends Model {
}

UserModel.init({
    uid: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING
    },
    nama: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user'
    },
}, {
    connection,
    tableName: 'users',
    createdAt: true,
    updatedAt: true
})

export default UserModel
