import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AddressCardComponent } from './address-card.component';

describe('AddressCardComponent', () => {
  let component: AddressCardComponent;
  let fixture: ComponentFixture<AddressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressCardComponent);
    component = fixture.componentInstance;

    // Forneça os dados mock necessários para o componente
    component.endereco = {
      logradouro: 'Rua Exemplo',
      cep: '12345-678',
      complemento: 'Apt 101',
      bairro: 'Centro',
      localidade: 'Cidade Exemplo',
      uf: 'EX',
      unidade: 'Unidade Exemplo',
      ibge: '1234567',
      gia: '98765'
    };

    fixture.detectChanges(); // Atualiza o DOM com as mudanças do componente
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
