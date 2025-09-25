import 'dotenv/config';
import express from 'express';
import Database from './config/database.js';
import config from './config/config.js';

const app = new express();

app.use(express.json());

// 获取所有用户
app.get('/usersList', async (req, res) => {
	try {
		const usersList = await Database.findUsers();
		res.status(200).json(usersList);
	} catch (error) {
		req.status(500).json({ error: error.message });
	}
});

// 新增一条数据
app.post('/addUser', async (req, res) => {
	try {
		await Database.createUsers(req.body);
		res.status(200).json({ message: 'success' });
	} catch (error) {
		req.status(500).json({ error: error.message });
	}
});

// 更新数据
app.post('/updateUserData', async (req, res) => {
	try {
		const updateData = {
			name: req.body.name,
			age: req.body.age,
			hobby: req.body.hobby,
		};
		await Database.updateUsers(req.body.id, updateData);
		res.status(200).json({ message: 'success' });
	} catch (error) {
		req.status(500).json({ error: error.message });
	}
});

// 删除数据
app.post('/delUser', async (req, res) => {
	try {
		await Database.deleteUsers(req.body.id);
		res.status(200).json({ message: 'success' });
	} catch (error) {
		req.status(500).json({ error: error.message });
	}
});

app.listen(config.port, () => {
	console.log(`server is running at http://localhost:${config.port}`);
});
