import { Component } from '@angular/core';
import { DataService } from '../service-file/data.service';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-task-singleview',
  templateUrl: './task-singleview.component.html',
  styleUrls: ['./task-singleview.component.css']
})
export class TaskSingleviewComponent {

id:any
taskData:any={}
  constructor(private ds:DataService,private ar:ActivatedRoute,private rout:Router){}

  ngOnInit():void{
    // id from url param
    this.ar.params.subscribe((data:any)=>{
      this.id=data.id
      console.log(this.id);
      
    })
    // resolving single view 
    this.ds.singleTaskViewApi(this.id).subscribe({
      next:(result:any)=>{
        this.taskData=result
      }
    })
  }

  // resolving delete task
  deleteTask(){
    this.ds.deleteATaskApi(this.id).subscribe({
      next:(result:any)=>{
        alert("task deleted successfully")
        this.rout.navigateByUrl("")
      }
    })

}
}