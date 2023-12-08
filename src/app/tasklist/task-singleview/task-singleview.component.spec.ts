import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSingleviewComponent } from './task-singleview.component';

describe('TaskSingleviewComponent', () => {
  let component: TaskSingleviewComponent;
  let fixture: ComponentFixture<TaskSingleviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskSingleviewComponent]
    });
    fixture = TestBed.createComponent(TaskSingleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
