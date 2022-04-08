import { Log as Logs } from '@utility/logger/concrete/Log';
import { format, createLogger, transports, Logger } from 'winston';
const { colorize, timestamp, combine, printf } = format


export class Log
{
  private constructor () {}

  /**
   * Logger is winston automatically
   * @param message 
   * @param type 
   * @returns 
   */
  public static log (message: string, type: string): void
  {
    new Logs().log(message, type);
  }
  
}
