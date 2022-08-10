import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';
import { IPost } from './models/ipost';
import { ObjectAssignService } from './service/object-assign.service';

@Component({
  selector: 'app-object-assign',
  templateUrl: './object-assign.component.html',
  styleUrls: ['./object-assign.component.scss'],
  providers: [ObjectAssignService],
})
export class ObjectAssignComponent implements OnInit {
  public betterWay = false;
  public instanceOf = false;

  constructor(private service: ObjectAssignService) {}

  ngOnInit(): void {
    const post = new Post({ id: 1, title: '' });

    this.service
      .getPosts()
      .subscribe((result) => (this.instanceOf = result[0] instanceof Post));
  }
}
