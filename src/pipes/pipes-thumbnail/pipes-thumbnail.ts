import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PipesThumbnailPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'pipesThumbnail',
})
export class PipesThumbnailPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(filename: string, args?: string): string {

    const imgSize = {
      small: '-tn160.png',
      medium: '-tn320.png',
      large: '-tn640.png'
    };

    if (args) { return filename.split('.')[0] + imgSize[args]; }

    return filename.split('.')[0] + imgSize.small;
  }

}
