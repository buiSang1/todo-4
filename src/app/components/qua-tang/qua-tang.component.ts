import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Apollo } from 'apollo-angular';
import { USER_DESCRIPTION } from 'src/app/graphql/graphql.user';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-qua-tang',
  templateUrl: './qua-tang.component.html',
  styleUrls: ['./qua-tang.component.scss']
})
export class QuaTangComponent implements OnInit {
  users: any[] = [];
  names: string[] = [];
  selectedItem = '2';

  constructor(private apollo: Apollo, private dialogService: NbDialogService) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: USER_DESCRIPTION,
      })
      .valueChanges.subscribe((res: any) => {
        this.users = res?.data?.user;


      })

  }
  open() {
    this.dialogService.open(DialogComponent)
      .onClose.subscribe(name => name && this.names.push(name));
  }
}
