import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PokemonList } from 'src/app/core/interfaces/pokemon-list.interface';
import { PokeapiService } from 'src/app/core/services/pokeapi.service';

@Component({
  selector: 'app-pokemons-list-smart',
  templateUrl: './pokemons-list-smart.component.html',
  styleUrls: ['./pokemons-list-smart.component.scss'],
})
export class PokemonsListSmartComponent {
  // private _pokemons!: PokemonList;
  private _pokemons: PokemonList | null = null;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly poeapiService: PokeapiService
  ) {}

  ngOnInit(): void {
    this.poeapiService.getPokemonList().subscribe({
      next: (res) => {
        console.log(res);
        this._pokemons = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  get pokemons() {
    return this._pokemons?.results;
  }
}
