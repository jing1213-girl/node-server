const express = require('express');

const port = 3000;

// 创建一个express应用实例
const app = express();

// 启用express中间件
app.use(express.json());

let todoList = [
	{ id: 1, task: 'learn Nodejs', complated: false },
	{ id: 2, task: 'build an API', complated: false },
];

// 定义一个路由
// 请求todo列表 get
app.get('/todoList', (req, res) => {
	res.json(todoList);
});

// 获取单个todo
app.get('/todoList/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const newTodoList = todoList.find((item) => item.id == id);
	if (!newTodoList) {
		return res.status(404).json({ error: 'Todo not found' });
	}
	res.json(newTodoList);
});

// 新增一个todoList
app.post('/addTodoList', (req, res) => {
	const newTodo = {
		id: todoList.length + 1,
		task: req.body.task,
		complated: false,
	};

	todoList.push(newTodo);
	res.status(200).json({ message: 'success' });
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
