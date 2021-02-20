import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private name: string;

  constructor(private route:ActivatedRoute) {
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
   }

  ngOnInit() {
  }

}
