import { LoggerInterface } from "@utility/logger/interfaces/LoggerInterface";

export abstract class Logger  
{

  /**
   * using the factory method we can implement other logger package
   * returns LoggerInterface
   */
  public abstract logger (): LoggerInterface;

  /**
   * 
   * @param message 
   * @param type 
   * @returns void | string
   */
  public log (message: string, type: string): void 
  {
    const logger = this.logger();
    logger.log(message, type)
  }
}