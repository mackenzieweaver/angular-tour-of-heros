import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute, // holds information about the route (id)
    private heroService: HeroService, // gets hero data from the remote server 
    private location: Location // Angular service for interacting with the browser
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // js (+) operator converts string to number
    const id = +this.route.snapshot // static image of the route information
      .paramMap //dictionary of route parameter values extracted from the URL
      .get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

}
