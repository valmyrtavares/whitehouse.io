import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsefulFunctionsService {
  auth: boolean = false;

  transformUrl(originalUrl: string): string {
    if (
      originalUrl.includes('/view?usp=drive_link') ||
      originalUrl.includes('/view?usp=sharing')
    ) {
      let modifiedUrl = originalUrl.replace(
        /\/file\/d\//,
        '/uc?export=download&id='
      );
      modifiedUrl = modifiedUrl.replace(/\/view\?usp=drive_link$/, '');
      modifiedUrl = modifiedUrl.replace(/\/view\??usp=sharing$/, '');
      return modifiedUrl;
    } else {
      return originalUrl;
    }
  }

  transformCategoryName(data: string): String {
    const words: string[] = data.split(' ');  
    if (words.length > 1) {
      return (
        words[0].toLowerCase() +
        words
          .slice(1)
          .map(
            (item) =>
              item.charAt(0).toUpperCase() + item.slice(1).toLocaleLowerCase()
          )
          .join('')
      );
    } else {
      return data.toLowerCase();
    }
  }
}
