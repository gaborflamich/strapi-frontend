import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  standalone: true,
  imports: [CommonModule, FilterPipe],
})
export class JobsComponent implements OnInit {
  jobs: any[] = [];
  contentBlocks: any[] = [];
  selectedCategory: string;

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.jobsService.getJobs().subscribe(
      (response) => {
        this.jobs = response.data;
        // Itt feltételezzük, hogy minden munkának van "Content" tulajdonsága
        this.jobs.forEach((job) => {
          if (job.attributes.Content) {
            // A "contentBlocks" tömböt kibővítjük minden munka tartalmi blokkjaival
            this.contentBlocks = [
              ...this.contentBlocks,
              ...job.attributes.Content,
            ];
          }
        });
      },
      (error) => {
        console.error('Error fetching jobs', error);
      }
    );
  }

  getText(block: any): string {
    return block.children.map((child: any) => child.text).join('');
  }
}
