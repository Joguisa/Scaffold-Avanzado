import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../core/services/pokeapi.service';
import { PokemonList } from '../core/interfaces/pokemon-list.interface';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})

/**
 *  Smart and Dumb
 */
export class PokemonListComponent implements OnInit {
  private _pokemons!: PokemonList;
  // private _pokemons: PokemonList | null = null;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly poeapiService: PokeapiService
  ) {}

  ngOnInit(): void {
    this.poeapiService.getPokemonList().subscribe({
      next: (res) => {
        this._pokemons = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  get pokemons() {
    return this._pokemons.results;
  }
}
