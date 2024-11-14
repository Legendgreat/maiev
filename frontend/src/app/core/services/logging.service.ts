import { Injectable, isDevMode } from '@angular/core';
import dateFormat from 'dateformat';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  private getLogMessage(origin: string, message: string) {
    const dateString = dateFormat(new Date(), 'mm/dd/yy, h:MM:ss TT');
    return `[${origin}] - ${dateString} \t ${message}`;
  }

  public log(message: string, origin: string) {
    const logMessage = this.getLogMessage(origin, message);

    if (isDevMode()) {
      console.log(logMessage);
    }
  }

  public error(message: string, origin: string) {
    const logMessage = this.getLogMessage(origin, message);

    if (isDevMode()) {
      console.error(logMessage);
    }
  }
}
