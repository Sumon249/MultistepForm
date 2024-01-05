import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {


  constructor(private route:ActivatedRoute, private router:Router){

  }
  ngOnInit(): void {
    // console.log(this.router.url);

  }
}
