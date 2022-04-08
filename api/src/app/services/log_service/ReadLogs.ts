import {LogFactory} from "@app/services/log_service/LogFactory";
import {LogFacoryInterface} from "@app/services/log_service/interface/LogFacoryInterface";
import {ConsoleReadLogs} from "@app/services/log_service/products/ConsoleReadLogs";

export class ReadLogs extends LogFactory
{
  /**
   * 
   */
  public logger(): LogFacoryInterface {
    return new ConsoleReadLogs();
  }
}
