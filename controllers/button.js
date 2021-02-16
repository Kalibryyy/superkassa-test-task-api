const Button = require('../models/button');
const { errorHandler } = require('../utils/error-handler');

module.exports.getButton = (req, res) => {
  Button.findOne()
    .then((button) => {
      res.send({
        state: button.state,
      });
    })
    .catch((err) => errorHandler(res, err));
};

module.exports.switchOnBtn = (req, res) => {
  Button.findOneAndUpdate({
      state: false
    }, {
      state: true
    }, {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
    })
    .orFail(() => {
      const error404 = new Error('выключенная кнопка не найдена');
      error404.statusCode = 404;
      throw error404;
    })
    .then((button) => {
      res.send({
        state: Boolean(button.state)
      });
    })
    .catch((err) => errorHandler(res, err));
};

module.exports.switchOffBtn = (req, res) => {
  Button.findOneAndUpdate({
      state: true
    }, {
      state: false
    }, {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
    })
    .orFail(() => {
      const error404 = new Error('включенная кнопка не найдена');
      error404.statusCode = 404;
      throw error404;
    })
    .then((button) => {
      res.send({
        state: Boolean(button.state)
      });
    })
    .catch((err) => errorHandler(res, err));
};
