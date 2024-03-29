const cors = require('cors');

/**
 * CORS wrapper for ets micro services.
 * @param {*} options 
 * @returns 
 */
const etsCors = (options) => {
	return cors({
		credentials: true,
		optionsSuccessStatus: 200,
		origin: [
			'http://localhost:3001',
			'http://localhost:3000', 
			'http://localhost:9000',
			'http://52.34.154.149:7000',
			'http://34.221.142.208:7000',
			/\.etruckingsoft\.com$/,
			/\.taraiwa\.com$/,
			/\.awako\.ai$/,
			'http://3.108.9.245:9000'
		],
		...options,
	});
}

exports.etsCors = etsCors;
