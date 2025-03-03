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


router.patch("/comment-article/:id", cosplanController.createPart)
router.patch("/edit-part/:id", cosplanController.editPart)
router.patch("/delete-part/:id", cosplanController.deletePart)

module.exports = router