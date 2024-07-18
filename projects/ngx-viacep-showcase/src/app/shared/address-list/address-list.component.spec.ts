import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AddressListComponent } from './address-list.component';

describe('AddressListComponent', () => {
  let component: AddressListComponent;
  let fixture: ComponentFixture<AddressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressListComponent);
    component = fixture.componentInstance;

    // Mock de dados de entrada completo conforme a interface Endereco
    component.enderecos = [
      {
        cep: '12345-678',
        logradouro: 'Rua Exemplo',
        complemento: 'Apt 101',
        bairro: 'Centro',
        localidade: 'Cidade Exemplo',
        uf: 'EX',
        unidade: 'Unidade Exemplo',
        ibge: '1234567',
        gia: '98765'
      },
      {
        cep: '87654-321',
        logradouro: 'Avenida Exemplo',
        complemento: 'Casa',
        bairro: 'Bairro Exemplo',
        localidade: 'Outra Cidade',
        uf: 'OX',
        unidade: 'Outra Unidade',
        ibge: '7654321',
        gia: '54321'
      }
    ];

    fixture.detectChanges(); // Atualiza o DOM com as mudanças do componente
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
