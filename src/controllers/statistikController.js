import Joi from "joi";
import StatistikModel from "../models/statistikModel.js";

const StatistikController = {
    post: async (req, res) => {
        const schema = Joi.object({
            id_atcs: Joi.string().required(),
            car: Joi.number().integer().required(),
            motorcycle: Joi.number().integer().required(),
            bus: Joi.number().integer().required(),
            truck: Joi.number().integer().required(),
            data_in: Joi.number().integer().required(),
            data_out: Joi.number().integer().required(),
        });
        const {error, value} = schema.validate(req.body);

        if (error) return res.status(400).json({error: error.details[0].message});

        try {
            const stats = await StatistikModel.create(value)

            res.json({
                status: 201,
                data: stats.dataValues
            }).status(201)
        } catch (e) {
            res.json({
                status: 500,
                message: e.message
            }).status(500)
        }
    },
    get: async (req, res) => {
        try {
            const statistik = await StatistikModel.findAll()
            res.json({
                status: 200,
                statistik
            }).status(200)
        } catch (e) {
            res.json({
                status: 500,
                message: e.message
            }).status(500)
        }
    },
}

export default StatistikController
