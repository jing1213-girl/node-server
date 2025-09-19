// // test-connection.js
// import { MongoClient } from 'mongodb';

// import 'dotenv/config';

// async function testConnection() {
// 	const uri = process.env.MONGODB_URI;
// 	console.log('连接字符串:', uri.replace(/:[^:]*@/, ':****@')); // 隐藏密码

// 	const client = new MongoClient(uri, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		serverSelectionTimeoutMS: 50000, // 5秒超时
// 	});

// 	try {
// 		await client.connect();
// 		console.log('✅ 连接成功!');

// 		// // 数据库连接
// 		// const db = client.db();
// 		// const collection = db.collection('users'); //创建一个users集合

// 		// // 插入数据
// 		// const insertResult = await collection.insertOne({
// 		// 	name: 'zhangsan',
// 		// 	age: 18,
// 		// 	hobby: 'sleep',
// 		// 	insertDate: new Date(),
// 		// });

// 		// console.log('插入一条数据', insertResult.insertedId);

// 		// // 查询数据
// 		// const searchResult = await collection.find({}).toArray();
// 		// console.log('所有用户的数据', searchResult);

// 		// // 更新数据
// 		// const updateResult = await collection.updateOne(
// 		// 	{ name: 'zhangsan' },
// 		// 	{ $set: { age: 19, hobby: 'eat', insertDate: new Date() } }
// 		// );

// 		// console.log('更新张三的数据', updateResult);

// 		// // 删除数据
// 		// const deleteResult = await collection.deleteOne({ age: 19 });
// 		// console.log('删除的数据', deleteResult);

// 		// 删除所有数据
// 		// const deleteResult = await collection.deleteMany({});
// 		// console.log('删除的数据', deleteResult.deletedCount);
// 	} catch (error) {
// 		console.error('❌ 连接错误:');
// 		console.error('错误信息:', error.message);
// 		console.error('错误代码:', error.code);
// 		console.error('错误名称:', error.name);
// 	} finally {
// 		await client.close();
// 		process.exit();
// 	}
// }

// testConnection();

import './server.js';
