import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { map } from 'rxjs';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, FilterPipe],
})
export class SidebarComponent {
  jobs: any[] = [];
  categories: any[] = [];
  cities: any[] = [];
  companies: any[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.jobsService.getJobs().subscribe(
      (response) => {
        this.jobs = response.data;

        const categories = response.data
          .map((job) => job.attributes.category.data.attributes.Name)
          .filter(
            (category, index, array) => array.indexOf(category) === index
          );

        this.categories = categories.map((category) => ({ Name: category }));

        const cities = response.data
          .map((job) => job.attributes.city.data.attributes.Name)
          .filter((city, index, array) => array.indexOf(city) === index);
        this.cities = cities.map((city) => ({ Name: city }));

        const companies = response.data
          .map((job) => job.attributes.company.data.attributes.Name)
          .filter((company, index, array) => array.indexOf(company) === index);
        this.companies = companies.map((company) => ({ Name: company }));
      },
      (error) => {
        console.error('Error fetching jobs', error);
      }
    );
  }

  // @Output() categorySelected = new EventEmitter<string>();

  // selectCategory(category: string) {
  //   this.categorySelected.emit(category);
  // }
}
