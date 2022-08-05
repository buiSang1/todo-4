import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Itask } from 'src/app/models/models';

@Component({
  selector: 'app-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  todoForm =  this.fb.group({
    item: ['', Validators.required],
  });
  tasks: Itask[] = [];
  inprogress: Itask[] = [];
  completed: Itask[] = [];
  updateId!: any;
  isEditEnabled: boolean = false;
  isOpen: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  addTask() {
    this.tasks.push({
      description: this.todoForm.value.item as string,
      done: false,
    });
    this.todoForm.reset();
  }
  updateTask() {
    this.tasks[this.updateId].description = this.todoForm.value.item as string;
    this.tasks[this.updateId].done = false;
    this.todoForm.reset();
    //chuyển qua lại addTask khi nhấn update
    this.updateId = undefined;
    this.isEditEnabled = false;
  }
  onEdit(item: Itask, i: number): void {
    this.todoForm.controls['item'].setValue(item.description);
    this.updateId = i;
    this.isEditEnabled = true;
  }
  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
  deleteInprogressTask(i: number) {
    this.inprogress.splice(i, 1);
  }
  deleteCompletedTask(i: number) {
    this.completed.splice(i, 1);
  }
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
