import Joi from 'joi';

const envVarsSchema = Joi.object({
	NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
	PORT: Joi.number().default(3000),
	MONGODB_URI: Joi.string().required().description('Mongodb connection string'),
	// JWT_SECRET: Joi.string().required().description('JWT secret key'),
}).unknown(); //允许其他未定义的环境变量存在即不验证它们

const { value: envVars, error } = envVarsSchema.validate(process.env);
if (error) throw new Error(`Config validation error: ${error.message}`);

// 导出配置对象
export default {
	port: envVars.PORT,
	env: envVars.NODE_ENV,
	mongoose: {
		url: process.env.MONGODB_URI + (envVars.NODE_ENV == 'test' ? '-test' : ''),

		options: {
			useNewUrlParser: true, // 使用新的URL解析器
			useUnifiedTopology: true, // 使用新的拓扑引擎
		},
	},
};
