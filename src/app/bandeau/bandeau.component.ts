import {Component, Input, OnInit} from '@angular/core';
import {MovieResponse} from '../tmdb-data/Movie';

@Component({
  selector: 'app-bandeau',
  templateUrl: './bandeau.component.html',
  styleUrls: ['./bandeau.component.css']
})
export class BandeauComponent implements OnInit {


  constructor() { }

  @Input() nomBandeau: String;

  estAffichable = true;


  populaires: MovieResponse[] = [
    {
      adult: false ,
      backdrop_path: '/t5KONotASgVKq4N19RyhIthWOPG.jpg',
      id: 135397,
      original_language: 'en',
      original_title: 'Jurassic World',
      overview: 'Twenty-two years after the events of Jurassic Park, ' +
        'Isla Nublar now features a fully functioning dinosaur theme park,' +
        'Jurassic World, as originally envisioned by John Hammond.',
      popularity: 27.749,
      poster_path: '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
      release_date: '2015-06-06', // format: date
      title: 'Jurassic World',
      video: false,
      vote_average: 6.6,
      vote_count: 12547
    },
    {
      adult: false ,
      backdrop_path: '/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg',
      id: 383498,
      original_language: 'en',
      original_title: 'Deadpool 2',
      overview: 'Wisecracking mercenary Deadpool battles the evil and powerful Cable ' +
                'and other bad guys to save a boy\'s life.',
      popularity: 54.619,
      poster_path: '/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg',
      release_date: '2018-05-15', // format: date
      title: 'Deadpool 2',
      video: false,
      vote_average: 7.5,
      vote_count: 5834
    },
    {
      adult: false ,
      backdrop_path: '/65JWXDCAfwHhJKnDwRnEgVB411X.jpg',
      id: 272,
      original_language: 'en',
      original_title: 'Batman Begins',
      overview: 'Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption' +
        ' that plagues his home, Gotham City. Unable to work within the system, he instead creates a new identity, ' +
        'a symbol of fear for the criminal underworld - The Batman.',
      popularity: 21.077,
      poster_path: '/dr6x4GyyegBWtinPBzipY02J2lV.jpg',
      release_date: '2005-06-10', // format: date
      title: 'Batman Begins',
      video: false,
      vote_average: 7.6,
      vote_count: 10613
    },
    {
      adult: false ,
      backdrop_path: '/fupyzBwFAn1PoeCXhp54bYVM2ER.jpg',
      id: 500,
      original_language: 'en',
      original_title: 'Reservoir Dogs',
      overview: 'A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse.' +
        ' Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde,' +
        ' bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.',
      popularity: 12.246,
      poster_path: '/tB2ITHg556e7aTV6cqQqVAXkdxN.jpg',
      release_date: '1992-09-02', // format: date
      title: 'Reservoir Dogs',
      video: false,
      vote_average: 8.1,
      vote_count: 5973
    },
    {
      adult: false ,
      backdrop_path: '/oMKFQmoVgB69fyXfSMu0lGlHJP2.jpg',
      id: 447200,
      original_language: 'en',
      original_title: 'Skyscraper',
      overview: 'Framed and on the run, a former FBI agent must save his family from' +
        ' a blazing fire in the world\'s tallest building.',
      popularity: 97.102,
      poster_path: '/5LYSsOPzuP13201qSzMjNxi8FxN.jpg',
      release_date: '2018-07-11', // format: date
      title: 'Skyscraper',
      video: false,
      vote_average: 6.1,
      vote_count: 1153
    },
    {
      adult: false ,
      backdrop_path: '/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg',
      id: 27205,
      original_language: 'en',
      original_title: 'Inception',
      overview: 'Cobb, a skilled thief who commits corporate espionage by infiltrating ' +
        'the subconscious of his targets is offered a chance to regain' +
        ' his old life as payment for a task considered to be impossible: \"inception\", the implantation of ' +
        'another person\'s idea into a target\'s subconscious.',
      popularity: 24.179,
      poster_path: '/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
      release_date: '2010-07-15', // format: date
      title: 'Inception',
      video: false,
      vote_average: 8.2,
      vote_count: 19362
    },
    {
      adult: false ,
      backdrop_path: '/t5KONotASgVKq4N19RyhIthWOPG.jpg',
      id: 135397,
      original_language: 'en',
      original_title: 'Jurassic World',
      overview: 'Twenty-two years after the events of Jurassic Park, ' +
        'Isla Nublar now features a fully functioning dinosaur theme park,' +
        'Jurassic World, as originally envisioned by John Hammond.',
      popularity: 27.749,
      poster_path: '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
      release_date: '2015-06-06', // format: date
      title: 'Jurassic World',
      video: false,
      vote_average: 6.6,
      vote_count: 12547
    }
  ];

  prochainement: MovieResponse[] = [
    {
      adult: false ,
      backdrop_path: '/t5KONotASgVKq4N19RyhIthWOPG.jpg',
      id: 135397,
      original_language: 'en',
      original_title: 'Jurassic World',
      overview: 'Twenty-two years after the events of Jurassic Park, ' +
        'Isla Nublar now features a fully functioning dinosaur theme park,' +
        'Jurassic World, as originally envisioned by John Hammond.',
      popularity: 27.749,
      poster_path: '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
      release_date: '2015-06-06', // format: date
      title: 'Jurassic World',
      video: false,
      vote_average: 6.6,
      vote_count: 12547
    },
    {
      adult: false ,
      backdrop_path: '/t5KONotASgVKq4N19RyhIthWOPG.jpg',
      id: 135397,
      original_language: 'en',
      original_title: 'Jurassic World',
      overview: 'Twenty-two years after the events of Jurassic Park, ' +
        'Isla Nublar now features a fully functioning dinosaur theme park,' +
        'Jurassic World, as originally envisioned by John Hammond.',
      popularity: 27.749,
      poster_path: '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
      release_date: '2015-06-06', // format: date
      title: 'Jurassic World',
      video: false,
      vote_average: 6.6,
      vote_count: 12547
    },
    {
      adult: false ,
      backdrop_path: '/t5KONotASgVKq4N19RyhIthWOPG.jpg',
      id: 135397,
      original_language: 'en',
      original_title: 'Jurassic World',
      overview: 'Twenty-two years after the events of Jurassic Park, ' +
        'Isla Nublar now features a fully functioning dinosaur theme park,' +
        'Jurassic World, as originally envisioned by John Hammond.',
      popularity: 27.749,
      poster_path: '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
      release_date: '2015-06-06', // format: date
      title: 'Jurassic World',
      video: false,
      vote_average: 6.6,
      vote_count: 12547
    },
    {
      adult: false ,
      backdrop_path: '/t5KONotASgVKq4N19RyhIthWOPG.jpg',
      id: 135397,
      original_language: 'en',
      original_title: 'Jurassic World',
      overview: 'Twenty-two years after the events of Jurassic Park, ' +
        'Isla Nublar now features a fully functioning dinosaur theme park,' +
        'Jurassic World, as originally envisioned by John Hammond.',
      popularity: 27.749,
      poster_path: '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
      release_date: '2015-06-06', // format: date
      title: 'Jurassic World',
      video: false,
      vote_average: 6.6,
      vote_count: 12547
    },
    {
      adult: false ,
      backdrop_path: '/t5KONotASgVKq4N19RyhIthWOPG.jpg',
      id: 135397,
      original_language: 'en',
      original_title: 'Jurassic World',
      overview: 'Twenty-two years after the events of Jurassic Park, ' +
        'Isla Nublar now features a fully functioning dinosaur theme park,' +
        'Jurassic World, as originally envisioned by John Hammond.',
      popularity: 27.749,
      poster_path: '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
      release_date: '2015-06-06', // format: date
      title: 'Jurassic World',
      video: false,
      vote_average: 6.6,
      vote_count: 12547
    },
    {
      adult: false ,
      backdrop_path: '/t5KONotASgVKq4N19RyhIthWOPG.jpg',
      id: 135397,
      original_language: 'en',
      original_title: 'Jurassic World',
      overview: 'Twenty-two years after the events of Jurassic Park, ' +
        'Isla Nublar now features a fully functioning dinosaur theme park,' +
        'Jurassic World, as originally envisioned by John Hammond.',
      popularity: 27.749,
      poster_path: '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
      release_date: '2015-06-06', // format: date
      title: 'Jurassic World',
      video: false,
      vote_average: 6.6,
      vote_count: 12547
    }, {
      adult: false,
      backdrop_path: '/t5KONotASgVKq4N19RyhIthWOPG.jpg',
      id: 135397,
      original_language: 'en',
      original_title: 'Jurassic World',
      overview: 'Twenty-two years after the events of Jurassic Park, ' +
        'Isla Nublar now features a fully functioning dinosaur theme park,' +
        'Jurassic World, as originally envisioned by John Hammond.',
      popularity: 27.749,
      poster_path: '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
      release_date: '2015-06-06', // format: date
      title: 'Jurassic World',
      video: false,
      vote_average: 6.6,
      vote_count: 12547
    }
  ];

  ngOnInit() {

  }

  setEstAffichable() {
    if (this.estAffichable === true) {
      this.estAffichable = false;
    } else {
      this.estAffichable = true;
    }
  }

}


