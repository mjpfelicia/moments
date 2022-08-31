import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-messagen',
  templateUrl: './messagen.component.html',
  styleUrls: ['./messagen.component.css']
})
export class MessagenComponent implements OnInit {
  faTimes =faTimes;

  
  constructor(
    public messagesService: MessagesService,
  ) { }

  ngOnInit(): void {
  }

}
