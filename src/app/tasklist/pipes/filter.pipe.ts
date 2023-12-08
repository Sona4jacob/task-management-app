import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  // filter pipe
  transform(tasks: any[], status: string): any {
    if (!tasks || status === 'All') {
      return tasks;
    }

    return tasks.filter((task) => task.status === status);
  }
}
