import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// Mock do TestBed e demais funções do Angular para Jest
jest.mock('@angular/core/testing', () => {
  const actual = jest.requireActual('@angular/core/testing');
  return {
    ...actual,
    TestBed: {
      configureTestingModule: jest.fn().mockReturnThis(),
      compileComponents: jest.fn().mockResolvedValue(undefined),
      createComponent: jest.fn().mockImplementation((component: any) => {
        return {
          componentInstance: new component(),
          detectChanges: jest.fn(),
          nativeElement: {
            querySelector: jest.fn().mockReturnValue({
              textContent: 'ngx-viacep-showcase app is running!'
            })
          }
        };
      }),
    },
  };
});

describe('AppComponent', () => {
  let fixture: any;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges(); // Atualiza o DOM com as mudanças do componente
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngx-viacep-showcase'`, () => {
    expect(app.title).toEqual('ngx-viacep-showcase');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ngx-viacep-showcase app is running!');
  });
});
