const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

const SERVER_PORT = 8000;

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// проверяем авторизован ли пользователь
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(jsonServer.defaults());
server.use(router);

// Эндпоинт для логина
server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users } = db;

    const userFromDB = users.find(
        (user) => user.username === username && user.password === password,
    );

    if (userFromDB) {
        return res.json(userFromDB);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

server.listen(SERVER_PORT, () => {
    console.log(`server is running on port ${SERVER_PORT}`);
});
