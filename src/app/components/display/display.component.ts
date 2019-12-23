import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  public name: string;

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {

    this.interactionService.name$
    .subscribe(
      message => this.name = message
    )

  }

}
