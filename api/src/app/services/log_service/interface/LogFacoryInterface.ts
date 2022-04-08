import { Logger } from 'winston'

export interface LogFacoryInterface
{
  call_log (): Logger;
}