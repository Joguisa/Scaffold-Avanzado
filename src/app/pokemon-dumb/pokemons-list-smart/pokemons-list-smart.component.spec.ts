import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsListSmartComponent } from './pokemons-list-smart.component';

describe('PokemonsListSmartComponent', () => {
  let component: PokemonsListSmartComponent;
  let fixture: ComponentFixture<PokemonsListSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsListSmartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsListSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
