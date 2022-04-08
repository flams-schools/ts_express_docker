// import { format, createLogger, transports } from 'winston';
// import { LoggerConstant } from './constants/LoggerConstant';

// const { combine, timestamp, label, printf, colorize } = format;
//
// const myFormat = printf(({ level, message, timestamp }) => {
//   return `${timestamp} ${level}: ${message}`;
// });
//
// export const logger = createLogger({
//     format: combine(
//       colorize(), timestamp({ format: 'Y:m:d H:m:s'}), myFormat
//     ),
//     transports: [
//       new transports.Console()
//     ]
// });