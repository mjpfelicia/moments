import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { ComentService } from 'src/app/services/coment.service';

import { Moment } from 'src/app/Moment';
import { Comments } from 'src/app/Comment';

import { environment } from 'src/environments/environment';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})




export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiurl = environment.baseApiurl

  faTimes = faTimes;
  faEdit = faEdit;
  commentForm!: FormGroup;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    private ComentService: ComentService,


  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentService.getMoment(id)
      .subscribe((item) => (this.moment = item.data));

    this.commentForm = new FormGroup({
      text: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
    })

  }

  get text() {
    return this.commentForm.get('text')!;
  }
  get username() {
    return this.commentForm.get('username')!;
  }


  async removeHandler(id: number) {

    await this.momentService.removeMoment(id).subscribe();

    this.messagesService.add("Momento excluido com suceso!");

    this.router.navigate(['/']);
  }

  onSubmit(FormDirective: FormGroupDirective) {

  }


}
