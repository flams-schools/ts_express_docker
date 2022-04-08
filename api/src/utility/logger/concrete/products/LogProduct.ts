import { LoggerInterface } from "@utility/logger/interfaces/LoggerInterface";
import { format, createLogger, transports, Logger } from 'winston';
import { LogTypes } from '@config/Types';

const { colorize, timestamp, combine, printf } = format



export class LogProduct implements LoggerInterface
{
  public log (message: string, type: string): void
  {
    this.logger(message, type) ;
  }

  protected logger (message: string, type: string): void
  {
    const log = this.configure(type);
    switch (type) {
      case LogTypes.debug:
        log.debug(message);
        break;
      case LogTypes.error:
        log.error(message);
        break;
      case LogTypes.http:
        log.http(message);
        break;
      case LogTypes.info:
        log.info(message);
        break;
      case LogTypes.silly:
        log.silly(message);
        break;
      case LogTypes.verbose:
        log.verbose(message);
        break;
      case LogTypes.warn:
        log.warn(message);
        break;
      default:
        throw new Error("Type log not correct")
    }
  }

  private configure (type: string)
  {
    return createLogger({
      level: 'debug',
      format: combine(
        colorize(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        printf(({ level , message , timestamp}) => {
          return `${timestamp} ${level}: ${message}`;
        })
      ),
      transports: [
        new transports.File({filename: 'src/storage/logs/access.log'}),
        new transports.Console(),
      ],
    })
  }
}
