// Pour l'instant, inclure les parties de cosplay 
// A voir ultérieurement si il leur faut leur propre model

const cosplanModel = require("../Models/cosplan.model")
const ObjectId = require("mongoose").Types.ObjectId
const fs = require("fs")
const {promisify} = require("util")
const {uploadErrors} = require("../utils/error.utils")
const pipeline = promisify(require("stream"))

module.exports.readCosplan = (res) => {
    cosplanModel.find((err,docs) => {
        if (!err) res.send(docs)
        else console.log("Erreur de réception" + err) 
    }).sort ({createdAt: -1}) 
}

module.exports.createCosplan = async (req, res) => {
    let fileName 

    if(req.file != null) {
        try {
            if (
                req.file.detectedMimeType != "image/jpg" &&
                req.file.detectedMimeType != "image/png" &&
                req.file.detectedMimeType != "image/jpeg" 
            )
            throw Error("Invalid file")

            if (req.file.size > 500000) throw Error ("Taille maximale dépassée")
        } catch (error) {
            const errors = uploadErrors(error)
            return res.status(201).json({errors})
        }
        fileName = req.body._id + Date.now() + ".jpg"

        await pipeline(
            req.file.stream,
            fs.createWriteStream(
                `${__dirname}/../client/public/uploads/cosplanImages/${fileName}`
            )
        )
    }

    const newCosplan = new cosplanModel({
        picture: req.file != null ? "./uploads/cosplanImages" + fileName :"",
        name: req.body.name,
        licence: req.body.typeArticle,
        requiredMaterials: req.body.requiredMaterials,
        budget: req.body.budget,
    })

    try {
        const cosplan = newCosplan.save()
        return res.Status(201).json(cosplan)
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports.updateCosplan = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("Id inconnue:" + req.params.id)

    const updatedRecord = {
        picture: req.body.picture,
        name: req.body.name,
        licence: req.body.licence,
        requiredMaterials: req.body.requiredMaterials,
        price: req.body.price,
    }

    cosplanModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatedRecord}, 
        {new: true},
        (err,docs) => {
            if (!err) res.send(docs)
            else console.log("erreur d'update :" + err) 
        }
    )
}

module.exports.deleteCosplan = (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("Id inconnue :" + req.params.id) 

    cosplanModel.findByIdAndDelete(req.params.id, (err,docs) => {
        if (!err)res.send(docs)
        else console.log("Erreur lors de la supression :" + err)
    })
}

module.exports.partsOfCosplan = (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("Id inconnue :" + req.params.id)

    try {
        return articleModel.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    parts: {
                        partsPicture: req.body.picture,
                        partsName: req.body.partsName,
                        material: req.body.material,
                        instruction: req.body.instruction,
                    },
                },
            },
            { new:true },
            (err,docs) => {
                if (!err) return res.send(docs)
                else return res.status(400).send(err)
            }
        )
    } catch (error) {
        return res.status(400).send(err)
    }
}

module.exports.editPartsOfCosplan = (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("Id inconnue :" + req.params.id)
    try {
        return cosplanModel.findById(req.params.id, (docs) => {
            const thePart = docs.part.find((part)=> 
            part._id.equals(req.body.partId)
            )
            if (!thePart) return res.status(404).send("partie introuvable")
            thePart.requiredMaterials = req.body.requiredMaterials
            thePart.instruction = req.body.instruction

            return docs.save((err) => {
                if (!err) return res.status(200).send(docs)
                return res.status(500).send(err)
            })
        })
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports.deletePartsOfCosplan = (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("Id inconnue :" + req.params.id)
    
    try {
        return cosplanModel.findByIdAndUpdate(
            req.params.id,
            {
                $pull: {
                    parts: {
                        _id: req.body.partId,
                    },
                },
            },
            {new:true},
            (err,docs)=> {
                if (!err) return res.send(docs)
                else return res.status(400).send(err)
            }
        )
    } catch (error) {
            res.status(400).send(err)
        }
}