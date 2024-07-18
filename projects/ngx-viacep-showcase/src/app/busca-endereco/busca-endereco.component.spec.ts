import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BuscaEnderecoComponent } from './busca-endereco.component';

describe('BuscaEnderecoComponent', () => {
  let component: BuscaEnderecoComponent;
  let fixture: ComponentFixture<BuscaEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa o módulo de teste do HttpClient
      declarations: [BuscaEnderecoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Atualiza o DOM com as mudanças do componente
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
