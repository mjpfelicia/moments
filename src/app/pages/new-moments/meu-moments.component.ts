import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-meu-moments',
  templateUrl: './meu-moments.component.html',
  styleUrls: ['./meu-moments.component.css']
})

export class MeuMomentsComponent implements OnInit {
  btnText = "Compartilhar!"

  constructor(
    private momentService: MomentService,
    private messagesService: MessagesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {
    const formData = new FormData()

    formData.append("title", moment.title);
    formData.append("description", moment.description);


    if (moment.image) {
      formData.append("image", moment.image);
    }

    //  tudo
    await this.momentService.createMoment(formData).subscribe();

    this.messagesService.add('Momento adicionado com susseco');
    this.router.navigate(['/']);

  }

}
