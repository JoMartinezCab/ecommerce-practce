import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users.interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  private user:User[] = []

  constructor(
    private route:ActivatedRoute,
    private usersService:UsersService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getUser(id);
  }

  getUser(id: string) {
    this.usersService.getUserById(id)
      .subscribe(
        user => console.log(user)
      );
  }

}
