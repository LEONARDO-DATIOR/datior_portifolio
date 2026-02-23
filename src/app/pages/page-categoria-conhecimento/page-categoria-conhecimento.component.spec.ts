import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoriaConhecimentoComponent } from './page-categoria-conhecimento.component';

describe('PageCategoriaConhecimentoComponent', () => {
  let component: PageCategoriaConhecimentoComponent;
  let fixture: ComponentFixture<PageCategoriaConhecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCategoriaConhecimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCategoriaConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
