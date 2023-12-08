import { Component } from '@angular/core';
import { DataService } from '../service-file/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

id:any=''
taskData:any={}

constructor(private ds:DataService,private ar:ActivatedRoute,private rout:Router){}

ngOnInit(): void{
  // id from url param
  this.ar.params.subscribe(data=>{
    this.id=data["id"]
  })
  // fetching task detail with corresponding id
  this.ds.singleTaskViewApi(this.id).subscribe({
    next:(result:any)=>{
      this.taskData=result
      console.log(this.taskData);
      
    }
  })
}

// update task
updateTask(){
  this.ds.editTaskApi(this.id,this.taskData).subscribe({
    next:(result:any)=>{
      alert("Task Updated")
      this.rout.navigateByUrl(`tasklist/task/single-view/${this.id}`)
    }
  })
}
}
