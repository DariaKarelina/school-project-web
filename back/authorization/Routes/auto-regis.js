const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();


router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' });
    }

    
    const isValidPassword = await user.validPassword(password);
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Неверный пароль' });
    }

    //JWT токен
    const token = jwt.sign({ id: user.id, username: user.username }, 'secret_key', { expiresIn: '1h' });

    res.status(200).json({ message: 'Авторизация успешна', token });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при авторизации', error: error.message });
  }
});

module.exports = router;