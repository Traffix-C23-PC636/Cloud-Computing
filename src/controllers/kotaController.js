import KotaModel from '../models/kotaModel.js'

const KotaController = {
  post: async (req, res) => {
    const {nama_kota, provinsi, id_kota} = req.body
    try {
      const kota = await KotaModel.create({
        id_kota, nama_kota, provinsi
      })

      res.json({
        status: 201,
        data: kota.dataValues
      }).status(201)
    } catch (e) {
      res.json({
        status: 500,
        message: e.message
      }).status(500)
    }
  }
}

export default KotaController
