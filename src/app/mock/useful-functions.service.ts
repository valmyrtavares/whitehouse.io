import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsefulFunctionsService {
  transformUrl(originalUrl: string): string {
    if (originalUrl.includes('/view?usp=drive_link')) {
      let modifiedUrl = originalUrl.replace(
        /\/file\/d\//,
        '/uc?export=download&id='
      );
      modifiedUrl = modifiedUrl.replace(/\/view\?usp=drive_link$/, '');
      return modifiedUrl;
    } else {
      return originalUrl;
    }
  }

  constructor() {}
}
