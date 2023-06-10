import ATCSModel from '../models/atcsModel.js'
import KotaModel from "../models/kotaModel.js";

const ATCSController = {
    get: async (req, res) => {
        try {
            const atcs = await ATCSModel.findAll({
                include: {
                    model: KotaModel,
                    as: 'kota',
                    attributes: ['nama_kota', 'provinsi'],
                },
            });

            res.json({
                status: 200,
                atcs
            }).status(200)
        } catch (e) {
            res.json({
                status: 500,
                message: e.message
            }).status(500)
        }
    },
    post: async (req, res) => {
        const {nama_atcs, lat, long, kota_id, stream_url, is_monitoring} = req.body
        try {
            const atcs = await ATCSModel.create({
                nama_atcs, lat, long, kota_id, stream_url, is_monitoring
            })

            res.json({
                status: 201,
                data: atcs.dataValues
            }).status(201)
        } catch (e) {
            res.json({
                status: 500,
                message: e.message
            }).status(500)
        }
    },
    delete: async (req, res) => {
        const {id} = req.params
        try {
            await ATCSModel.destroy({
                where: {
                    id_atcs: id
                }
            })
            res.json({
                status: 200,
                message: 'Success'
            }).status(200)
        } catch (e) {
            res.json({
                status: 500,
                message: e.message
            }).status(500)
        }
    }
}

export default ATCSController
