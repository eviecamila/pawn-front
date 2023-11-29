import { Component, EventEmitter, Output, Input } from "@angular/core";
@Component({
    selector: 'app-create-modal',
    templateUrl: './modal-new.html',
    styleUrls: ['./modal-new.css',],
  })
export class CreateModalComponent{
    @Output() data = new EventEmitter<any>();
    @Input() inputData!: any;
    onSave(){}
}