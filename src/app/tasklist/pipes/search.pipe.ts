import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tasks:any[],searchString:string,searchKey:string): any {
    // search pipe
    const result:any=[]
    if(!tasks || !searchString || searchKey==""){
      return tasks;
    }else{
      tasks.forEach((task:any)=>{
        if(task[searchKey].trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(task);
        }
      })
    }
    return result

  }

}

