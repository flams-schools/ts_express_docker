import { LogFacoryInterface } from '@app/services/log_service/interface/LogFacoryInterface';

export abstract class LogFactory {
  public abstract logger (): LogFacoryInterface;

  /**
   * 
   */
  public log (): string | object
  {
    const logger = this.logger();
    return logger.call_log().info("Hello World from Factory dialer!");
  }
}