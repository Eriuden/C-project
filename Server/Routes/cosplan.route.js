const router = require("express").Router()
const cosplanController = require("../Controllers/cosplan.controller")
const uploadController = require("../Controllers/upload.controller")
const multer = require("multer")
const upload = multer()

router.get("/", cosplanController.readCosplan)
router.put("/:id", cosplanController.updateCosplan)
router.delete("/:id", cosplanController.deleteCosplan)
router.post("/", upload.single("file", cosplanController.createCosplan))
router.post("/upload-cosplanPic", upload.single("file"), uploadController.uploadCosplanPic)
router.post("/upload-partPic", upload.single("file"), uploadController.uploadPartPic)


router.patch("/create-part/:id", cosplanController.partsOfCosplan)
router.patch("/edit-part/:id", cosplanController.editPartsOfCosplan)
router.patch("/delete-part/:id", cosplanController.deletePartsOfCosplan)

module.exports = router