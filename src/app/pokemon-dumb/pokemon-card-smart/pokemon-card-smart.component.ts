import { Component, Input } from '@angular/core';
import { PokemonItem } from 'src/app/core/interfaces/pokemon-list.interface';

@Component({
  selector: 'app-pokemon-card-smart',
  templateUrl: './pokemon-card-smart.component.html',
  styleUrls: ['./pokemon-card-smart.component.scss'],
})
export class PokemonCardSmartComponent {
  @Input()
  pokemon: PokemonItem | null = null;

  @Input()
  index: number = 1;

  get image() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.index}.png`;
  }
  get color() {
    return `GET https://pokeapi.co/api/v2/pokemon-color/${this.index}/`;
  }
}
