import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetComponentComponent } from './tweet-component.component';

describe('TweetComponentComponent', () => {
  let component: TweetComponentComponent;
  let fixture: ComponentFixture<TweetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
