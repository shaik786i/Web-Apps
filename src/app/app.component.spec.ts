import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '../../node_modules/@angular/material';

import { RouterTestingModule } from '@angular/router/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        MatToolbarModule,        
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have openRegister method"', () => {
    const fixture = TestBed.createComponent(AppComponent);   
    const app = fixture.debugElement.componentInstance;
    expect(app.openRegister).toBeDefined();
  });



});
