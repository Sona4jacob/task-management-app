import { Component } from '@angular/core';
import { DataService } from '../service-file/data.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css'],
})
export class AllTasksComponent {
  
  allTasks: any[] = [];
  searchString: any = '';
  selectedStatus: string = 'All';
  sortedData: any[] = [];
    constructor(private ds: DataService) {}

  ngOnInit(): void {
    // api for get all task
    this.ds.getAllTasksApi().subscribe({
      next: (result: any) => {
        this.allTasks = result;
      },
    });
  }

  // changing status and updating
  changeStatus(task: any): void {
    console.log(task);

    this.ds.editTaskApi(task.id, task).subscribe({
      next: (result: any) => {
        alert(`${task.title} status updated to ${task.status}`);
      },
      error: (error) => {
        console.error('Error updating task status:', error);
      },
    });
  }

  // for filtering data using filter pipe
  filterData(status: string): void {
    this.selectedStatus = status;
  }

  sortData() {
    this.sortedData = this.sortedData.slice().sort((a, b) => a.title.localeCompare(b.title));
  }
}