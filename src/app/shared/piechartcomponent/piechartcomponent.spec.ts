import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piechartcomponent } from './piechartcomponent';

describe('Piechartcomponent', () => {
  let component: Piechartcomponent;
  let fixture: ComponentFixture<Piechartcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Piechartcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Piechartcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
