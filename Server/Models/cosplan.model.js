/*
Nécessite la photo,
le nom, 
la licence (l'univers), 
les parties du cosplay, 
le budget
les matériaux requis
*/

const mongoose = require("mongoose")

const cosplanSchema = new mongoose.Schema(
    {
        picture: {
            type: String,
        },

        name: {
            type: String,
            trim: true,
            maxlength: 1000,
        },

        licence: {
            type: String,
            trim: true,
            maxlength: 1000,
        },

        budget: {
            type: String,
            trim: true,
            max: 10,
        },

        requiredMaterials: {
            type: [
                {
                    materialName: String,
                    trim: true,
                    max: 1000,
                }
            ],
            required: true,
        },

        parts: {
            type: [
                {
                    partsPicture: String,
                    partsName: String,
                    materials: String,
                    Instruction: String,
                }
            ],
            required: true,
        },
    },
    {timestamps : true}
)

const cosplanModel = mongoose.model("cosplan", cosplanSchema)
module.exports = cosplanModel