import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  public todo;

  @Output()
  public done = new EventEmitter<any>();

  @HostBinding('class.done')
  public doneState = false;

  ngOnInit() {
  }

  onClick() {
    this.done.emit(this.todo);
  }

  @HostListener('click')
  onElementClick() {
    this.doneState = !this.doneState;
  }
}
