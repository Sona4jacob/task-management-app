import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service-file/data.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  dateCreated: any = new Date();

  // model form for add
  taskForm = this.fb.group({
    title: ['', Validators.required],
    discription: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private dpipe: DatePipe,
    private ds: DataService,
    private rout: Router
  ) {
    // for get date
    this.dateCreated = this.dpipe.transform(this.dateCreated, 'medium');
  }

  ngOnInit(): void {}

  addNewTask() {
    //create id
    let taskId = uuidv4();
    // body
    let taskData = {
      id: taskId,
      title: this.taskForm.value.title,
      discription: this.taskForm.value.discription,
      date: this.dateCreated,
      status: 'pending',
    };
    if (this.taskForm.valid) {
      // api call for add new task
      this.ds.addNewTaskApi(taskData).subscribe({
        next: (result: any) => {
          alert('new task added');
          this.rout.navigateByUrl('');
        },
        error: (error: any) =>
          alert('something went wrong, task cannot added !'),
      });
    } else {
      alert('Please fill all the fields');
    }
  }
}
