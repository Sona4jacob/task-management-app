import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<string>, args: any[]): any[] {
    if (!Array.isArray(array) || array.length <= 1 || !args || args.length === 0) {
      return array;
    }

    const field = args[0];

    return array.slice().sort((a, b) => {
      const aValue = a[field].toLowerCase();
      const bValue = b[field].toLowerCase();
      return aValue.localeCompare(bValue);
    });
  }
}
