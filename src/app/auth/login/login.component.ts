import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AuthState } from '../reducers';
import { login } from '../auth.actions';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {
    id: 23,
    name: 'Devashish Sarmah'
  }

  constructor(private store: Store<AuthState>) { }

  ngOnInit(): void {
  }

  onClickLogin(): void {
    this.store.dispatch(login({ user: this.user }));
  }

}
