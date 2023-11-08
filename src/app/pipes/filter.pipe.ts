import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(jobs: any[], category: string): any[] {
    if (!jobs || !category) {
      return jobs;
    }
    return jobs.filter(
      (job) => job.attributes.category.data.attributes.Name === category
    );
  }
}
