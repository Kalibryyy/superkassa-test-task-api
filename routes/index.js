const router = require('express').Router();
const {
  getButton, switchOnBtn, switchOffBtn, createButtonState,
  } = require('../controllers/button');

router.get('/', getButton);
router.post('/', createButtonState)
router.patch('/switch-on', switchOnBtn);
router.patch('/switch-off', switchOffBtn);

router.use('*', (req, res) => {
    res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

module.exports = router;
