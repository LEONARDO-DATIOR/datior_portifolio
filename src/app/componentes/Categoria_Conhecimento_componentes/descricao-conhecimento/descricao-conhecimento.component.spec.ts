import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoConhecimentoComponent } from './descricao-conhecimento.component';

describe('DescricaoConhecimentoComponent', () => {
  let component: DescricaoConhecimentoComponent;
  let fixture: ComponentFixture<DescricaoConhecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescricaoConhecimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
