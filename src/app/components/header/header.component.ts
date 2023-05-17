import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {

  isHomePage = true;
  isMoviesPage = false;
  isSeriesPage = false;

  constructor(private router: Router) {
    this.switcher();
  }


  ngOnInit(): void {
    this.switcher();
  }

  switcher(){
    this.router.events.subscribe((val)=>{
      this.isHomePage = (val as RouterEvent).url === '/home';
      this.isMoviesPage = (val as RouterEvent).url === '/movies';
      this.isSeriesPage = (val as RouterEvent).url === '/series';
    });
  }

}
