import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BuscaCepComponent } from './busca-cep.component';

// Mock do TestBed e demais funções do Angular para Jest
jest.mock('@angular/core/testing', () => {
  const actual = jest.requireActual('@angular/core/testing');
  return {
    ...actual,
    TestBed: {
      createComponent: jest.fn().mockImplementation((component: any) => {
        return {
          componentInstance: new component(),
        } as ComponentFixture<any>;
      }),
    },
  };
});

describe('BuscaCepComponent', () => {
  let component: BuscaCepComponent;

  beforeEach(() => {
    // Criando o componente mockado
    const fixture = TestBed.createComponent(BuscaCepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
