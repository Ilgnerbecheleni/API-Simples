' use strict';

const express = require('express');
const router = express.Router()
const controller = require('../src/Controllers/User-controller');


router.get ('/',controller.get);
router.get ('/activate/:active',controller.getByActivate);
router.get ('/nome/:nome',controller.getByName);
router.get ('/cracha/:cracha',controller.getByCracha);
router.post('/',controller.post);
router.put('/',controller.put);
router.delete('/',controller.delete);

module.exports = router ;