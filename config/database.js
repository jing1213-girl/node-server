import { MongoClient, ObjectId } from 'mongodb';
import config from './config.js';

const uri = config.mongoose.url;
const client = new MongoClient(uri);
const dbName = 'cluster0';

class Database {
	// 连接数据库
	static async connect() {
		await client.connect();
		return client.db(dbName);
	}

	// 关闭连接
	static async close() {
		await client.close();
	}

	// 用户操作
	static async createUsers(userData) {
		const db = await this.connect();

		return await db.collection('users').insertOne({
			...userData,
			createDate: new Date(),
			updateDate: new Date(),
		});
	}

	static async findUsers(query = {}) {
		const db = await this.connect();
		return await db.collection('users').find(query).toArray();
	}

	static async updateUsers(userId, updateData) {
		const db = await this.connect();
		return await db
			.collection('users')
			.updateOne(
				{ _id: new ObjectId(userId) },
				{ $set: { ...updateData, updateDate: new Date() } }
			);
	}

	static async deleteUsers(userId) {
		const db = await this.connect();
		return await db.collection('users').deleteOne({ _id: new ObjectId(userId) });
	}
}

export default Database;
