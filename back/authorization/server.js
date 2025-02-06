const app = require('./app');
const sequelize = require('./DataBase/database');

const PORT = 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
  });
});