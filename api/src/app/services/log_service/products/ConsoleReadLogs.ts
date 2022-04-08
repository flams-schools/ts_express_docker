import {LogFacoryInterface} from "@app/services/log_service/interface/LogFacoryInterface";
import { format, createLogger, transports, Logger } from 'winston';
const { colorize, timestamp, combine, printf } = format



export class ConsoleReadLogs implements LogFacoryInterface
{
  public static winston: Logger;
  
  
  public call_log (): Logger {
    return this.detail_log();
  }
  
  protected detail_log (): Logger
  {
    this.compile_log();
    return ConsoleReadLogs.winston;
  }
  
  protected compile_log ()
  {
    ConsoleReadLogs.winston = createLogger({
      level: 'debug',
      format: combine(
        colorize(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), 
        printf(({ level , message , timestamp}) => {
          return `${timestamp} ${level}: ${message}`;
        })
      ),
      transports: [
        new transports.File({filename: 'src/storage/logs/combined.log'}),
      ],
    })
  }
}
