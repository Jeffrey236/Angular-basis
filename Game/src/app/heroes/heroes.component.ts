import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { IGame } from '../game';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: IGame[] = [];

  name = 'Jeffrey';
  age = 12;
  constructor(private services: GameService) { }

  ngOnInit() {
    this.services.getHeroes()
    .subscribe(data => this.heroes = data, error => console.log(error) );
  }
}