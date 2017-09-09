import { AnimalsService } from './../services/animals.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import { UsersService } from '../services/users.service';
import { ActivitiesService } from '../services/activities.service';
import { DataBaseService } from '../services/data-base.service';
import { UsersGuardService } from '../shared/guards/auth.service';
import { NotAuthGuardService } from '../shared/guards/not-auth-guard.service';
import { ToastOptions, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CustomToastsManager } from '../app.toastr.settings';
import { AngularFireDatabase } from 'angularfire2/database';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const AngularFireMocks = {
    auth: jasmine.createSpy('auth')
  };

  const AngularFireDBMocks = {
    database: jasmine.createSpy('database')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        MaterialModule,
        RouterModule,
        RouterTestingModule
      ],
      providers: [
        FirebaseApp,
        AnimalsService,
        UsersService,
        ActivitiesService,
        DataBaseService,
        UsersGuardService,
        NotAuthGuardService,
        ToastOptions,
        [{
          provide: ToastsManager, useClass: CustomToastsManager
        }],
        {
            provide: AngularFireDatabase,
            useValue: AngularFireDBMocks
          },
          {
            provide: AngularFireAuth,
            useValue: AngularFireMocks
          }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
