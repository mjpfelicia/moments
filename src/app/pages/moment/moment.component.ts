import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';

import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})




export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiurl =environment.baseApiurl



  constructor(private momentService: MomentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.momentService.getMoment(id)
      .subscribe((item) => (this.moment = item.data));

  }

}
