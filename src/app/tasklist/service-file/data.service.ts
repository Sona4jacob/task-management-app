import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }

  // api for get all tasks
getAllTasksApi(){
  return this.http.get('http://localhost:3000/task')
}

// api for single task view
singleTaskViewApi(id:any){
  return this.http.get('http://localhost:3000/task/'+id);
}

// api for deleting a task
deleteATaskApi(id:any){
  return this.http.delete('http://localhost:3000/task/'+id);
  }

  // api for adding new task
  addNewTaskApi(bodyData:any){
    return this.http.post('http://localhost:3000/task',bodyData)
  }

  // api fro edit task
  editTaskApi(id:any,bodyData:any){
    return this.http.put("http://localhost:3000/task/"+id,bodyData)
  }
}
