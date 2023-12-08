import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasklistRoutingModule } from './tasklist-routing.module';
import { TasklistComponent } from './tasklist.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { TaskSingleviewComponent } from './task-singleview/task-singleview.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
 import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {v4 as uuidv4} from 'uuid';
import {  SearchPipe } from './pipes/search.pipe'
import {  FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe'


@NgModule({
  declarations: [
    TasklistComponent,
    AllTasksComponent,
    TaskSingleviewComponent,
    EditTaskComponent,
    AddTaskComponent,
    SearchPipe,
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    TasklistRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DatePipe]

})
export class TasklistModule { }
