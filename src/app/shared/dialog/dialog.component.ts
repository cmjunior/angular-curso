import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  title = 'Atenção';
  dialogText: string = 'Texto do dialog';
  dialogHtml!: string;
  noText = 'Cancelar';
  yesText = 'Confirmar';

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.dialogText = this.data.dialogText;
    this.dialogHtml = this.data.dialogHtml;
    this.noText = this.data.noText;
    this.yesText = this.data.yesText;
  }

}
