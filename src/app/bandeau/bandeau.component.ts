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

  estAffichable: boolean ;

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
      backdrop_path: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
      id: 335983,
      original_language: 'en',
      original_title: 'Venom',
      overview: 'When Eddie Brock acquires the powers of a symbiote, ' +
        'he will have to release his alter-ego \"Venom\" to save his life,',
      popularity: 363.221,
      poster_path: '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      release_date: '2018-10-03', // format: date
      title: 'Venom',
      video: false,
      vote_average: 6.6,
      vote_count: 1833
    },
    {
      adult: false ,
      backdrop_path: '/nNh7vHHISVAaziJEqAq0P9iL52w.jpg',
      id: 395992,
      original_language: 'en',
      original_title: 'Life',
      overview: 'The six-member crew of the International Space Station is tasked with studying a sample from Mars' +
        ' that may be the first proof of extra-terrestrial life, ' +
        'which proves more intelligent than ever expected.',
      popularity: 16.673,
      poster_path: '/h2mhfbEBGABSHo2vXG1ECMKAJa7.jpg',
      release_date: '2017-03-22', // format: date
      title: 'Life',
      video: false,
      vote_average: 6.3,
      vote_count: 3468
    }
  ];

  prochainement: MovieResponse[] = [
    {
      adult: false ,
      backdrop_path: '/f4E0ocYeToEuXvczZv6QArrMDJ.jpg',
      id: 346910,
      original_language: 'en',
      original_title: 'The Predator',
      overview: 'From the outer reaches of space to the small-town streets of suburbia,' +
        ' the hunt comes home. Now, the universe’s most lethal hunters are stronger,' +
        ' smarter and deadlier than ever before, having genetically upgraded themselves with DNA' +
        ' from other species. When a young boy accidentally triggers their return to Earth,' +
        ' only a ragtag crew of ex-soldiers and a disgruntled science teacher can prevent' +
        ' the end of the human race.',
      popularity: 99.534,
      poster_path: '/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg',
      release_date: '2018-09-13', // format: date
      title: 'The Predator',
      video: false,
      vote_average: 5.3,
      vote_count: 708
    },
    {
      adult: false ,
      backdrop_path: '/ifvlCe6sLvhk7VgvHlSgB0C1EbP.jpg',
      id: 506043,
      original_language: 'pt',
      original_title: 'Le cahier noir',
      overview: 'The story of the adventures, in the twilight of the eighteenth century, ' +
        'of a singular couple formed by a little orphan with mysterious origins and his young ' +
        'Italian nurse of a similarly uncertain birth. They lead us in their wake, ' +
        'from Rome to Paris, from Lisbon to London, from Parma to Venice. ' +
        'Always followed in the shadows, for obscure reasons, by a suspicious-looking Calabrian ' +
        'and a troubling cardinal, they make us explore the dark intrigues of the Vatican, ' +
        'the pangs of a fatal passion, a gruesome duel, banter at the court of Versailles ' +
        'and the convulsions of the French Revolution.',
      popularity: 1.092,
      poster_path: '/zlvEyMhwdmuYcJ66ve6wsVkcKnS.jpg',
      release_date: '2018-10-01', // format: date
      title: 'The Black Book',
      video: false,
      vote_average: 4,
      vote_count: 1
    },
    {
      adult: false ,
      backdrop_path: '/22cUd4Yg5euCxIwWzXrL4m4otkU.jpg',
      id: 500664,
      original_language: 'en',
      original_title: 'Upgrade',
      overview: 'A brutal mugging leaves Grey Trace paralyzed in the hospital and his beloved wife dead.' +
        ' A billionaire inventor soon offers Trace a cure — an artificial intelligence implant called' +
        ' STEM that will enhance his body. Now able to walk, Grey finds that he also has superhuman ' +
        'strength and agility — skills he uses to seek revenge against the thugs who destroyed his life.',
      popularity: 26.605,
      poster_path: '/8fDtXi6gVw8WUMWGT9XFz7YwkuE.jpg',
      release_date: '2018-06-01', // format: date
      title: 'Upgrade',
      video: false,
      vote_average: 7.3,
      vote_count: 600
    },
    {
      adult: false ,
      backdrop_path: '/tZ358Wk4BnOc4FjdGsiexAUvCMH.jpg',
      id: 424139,
      original_language: 'en',
      original_title: 'Halloween',
      overview: 'Laurie Strode comes to her final confrontation with Michael Myers, ' +
        'the masked figure who has haunted her since she narrowly escaped his killing' +
        ' spree on Halloween night four decades ago.',
      popularity: 293.328,
      poster_path: '/bXs0zkv2iGVViZEy78teg2ycDBm.jpg',
      release_date: '2018-10-18', // format: date
      title: 'Halloween',
      video: false,
      vote_average: 6.7,
      vote_count: 524
    }
  ];

  ngOnInit() {
    this.estAffichable = true;
  }

  setEstAffichable() {
    if (this.estAffichable === true) {
      this.estAffichable = false;
    } else {
      this.estAffichable = true;
    }
  }

  estBandeauPopulaire() {
    return this.nomBandeau === 'populaires';
  }

  estBandeauProchainement() {
    return this.nomBandeau === 'prochainement en salles';
  }

}


