




import {LogProduct} from "@utility/logger/concrete/products/LogProduct"
import { Logger } from "@utility/logger/Logger";
import { LoggerInterface } from "@utility/logger/interfaces/LoggerInterface";

export class Log extends Logger 
{
  public logger (): LoggerInterface
  {
    return new LogProduct();
  }

}