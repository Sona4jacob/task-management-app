import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistComponent } from './tasklist.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { TaskSingleviewComponent } from './task-singleview/task-singleview.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [{ path: '', component: AllTasksComponent },
{ path: 'task/single-view/:id', component: TaskSingleviewComponent },
{ path: 'task/edit-task/:id', component: EditTaskComponent },
{ path: 'task/add-task', component: AddTaskComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasklistRoutingModule { }
