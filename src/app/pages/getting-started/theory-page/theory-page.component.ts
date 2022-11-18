import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoEquation } from 'src/app/demonstration-components/equation-component/equation.component';
import { PortionMarker } from 'src/app/demonstration-components/svg-photo-component/svg-photo.component';

export interface TheoryChannelPhotoPayload{
  photo: string;
  payload: PortionMarker;
}

@Component({
  selector: 'theory-page',
  templateUrl: './theory-page.component.html',
  styleUrls: ['./theory-page.component.css']
})
export class TheoryPageComponent implements OnInit {

  TheoryChannel: BroadcastChannel = new BroadcastChannel('theoryChannel');

  DemoA: TheoryChannelPhotoPayload = {
    photo: '../../../assets/wasp_example.jpg',
    payload: {
      width: 111,
      height: 300,
      locations: [
        {
          x: 180,
          y: 63,
          text: '77mm',
          direction: true,
          /*rotate: {
            degree: 30,
            x: 0,
            y: 300
          }*/
        }
      ]
    }
  };

  DemoAEquation : DemoEquation = {
    numberA: '77mm',
    equation: 'divide',
    numberB: '1.618',
    result: '47.589mm'
  };

  DemoB: TheoryChannelPhotoPayload = {
    photo: '../../../assets/wasp_example.jpg',
    payload: {
      width: 22,
      height: 185.41,
      locations: [
        {
          x: 168,
          y: -104,
          direction: false,
          rotate: {
            degree: 63,
            x: 22,
            y: 185.41
          }
        },
        {
          x: 205,
          y: 182,
          direction: true
        }
      ]
    }
  };

  DemoC: TheoryChannelPhotoPayload = {
    photo: '../../../assets/wasp_example.jpg',
    payload: {
      width: 22,
      height: 114.59,
      locations: [
        {
          x: 140,
          y: 120,
          direction: false,
          rotate: {
            degree: -77,
            x: 22,
            y: 114.59
          }
        },
        {
          x: 240,
          y: 206,
          direction: true,
          rotate: {
            degree : -9,
            x: 0,
            y: 0
          }
        },
        {
          x: 204,
          y: 72,
          direction: true
        }
      ]
    }
  };

  DemoD: TheoryChannelPhotoPayload = {
    photo: '../../../assets/wasp_example.jpg',
    payload: {
      width: 22,
      height: 70.82,
      locations: [
        {
          x: 94,
          y: 116,
          direction: false
        },
        {
          x: 118,
          y: 46,
          direction: true,
          rotate: {
            degree : -57,
            x: 0,
            y: 0
          }
        },
        {
          x: 220,
          y: 48,
          direction: true,
          rotate : {
            degree : 27,
            x: 0,
            y: 70.82
          }
        },
        {
          x: 260,
          y: 250,
          direction: true,
          rotate : {
            degree : -10,
            x: 0,
            y: 70.82
          }
        },
        {
          x: 234,
          y: 250,
          direction: true,
          rotate : {
            degree : 90,
            x: 0,
            y: 0
          }
        }
      ]
    }
  };

  DemoE: TheoryChannelPhotoPayload = {
    photo: '../../../assets/wasp_example.jpg',
    payload: {
      width: 22,
      height: 43.77,
      locations: [
        {
          x: 94,
          y: 116,
          direction: false
        },
        {
          x: 206,
          y: 72,
          direction: true
        },
        {
          x: -10,
          y: 45,
          direction: false,
          rotate : {
            degree : 32,
            x: 22,
            y: 0
          }
        },
        {
          x: 204,
          y: 199,
          direction: true,
          rotate : {
            degree : 0,
            x: 0,
            y: 70.82
          }
        }
      ]
    }
  };

  DemoF: TheoryChannelPhotoPayload = {
    photo: '../../../assets/wasp_example.jpg',
    payload: {
      width: 22,
      height: 27.05,
      locations: [
        {
          x: 94,
          y: 88,
          direction: false
        },
        {
          x: 164,
          y: -24,
          direction: false,
          rotate: {
            degree: 90,
            x: 22,
            y: 27.05
          }
        },
        {
          x: 248,
          y: 55,
          direction: true,
          rotate : {
            degree : 11,
            x: 0,
            y: 0
          }
        },
        {
          x: 246,
          y: 168,
          direction: true,
          rotate : {
            degree : -20,
            x: 0,
            y: 0
          }
        },
        {
          x: 200,
          y: 218,
          direction: true,
          rotate : {
            degree : 0,
            x: 0,
            y: 0
          }
        },
        {
          x: 213,
          y: 180,
          direction: true,
          rotate : {
            degree : 90,
            x: 0,
            y: 0
          }
        },
        {
          x: 170,
          y: 140,
          direction: true,
          rotate : {
            degree : 0,
            x: 0,
            y: 0
          }
        }
      ]
    }
  };

  DemoG: TheoryChannelPhotoPayload = {
    photo: '../../../assets/wasp_example.jpg',
    payload: {
      width: 22,
      height: 16.72,
      locations: [
        {
          x: 208,
          y: -30,
          direction: false,
          rotate : {
            degree: 90,
            x: 0,
            y: 0
          }
        },
        {
          x: 88,
          y: 66,
          direction: false,
          rotate: {
            degree: 0,
            x: 0,
            y: 0
          }
        },
        {
          x: 88,
          y: 182,
          direction: false,
          rotate : {
            degree : 0,
            x: 0,
            y: 0
          }
        },
        {
          x: 302,
          y: 139,
          direction: true,
          rotate : {
            degree : -9,
            x: 0,
            y: 0
          }
        },
        {
          x: 204,
          y: 170,
          direction: true,
          rotate : {
            degree : -90,
            x: 0,
            y: 0
          }
        },
        {
          x: 228,
          y: 246,
          direction: true,
          rotate : {
            degree : -10,
            x: 0,
            y: 0
          }
        }
      ]
    }
  };
 
  //PhotoA: string = '../../../assets/wasp_example.jpg';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public previousPage(): void { this.router.navigateByUrl('getting-started'); }

  public nextPage(): void { this.router.navigateByUrl('setup'); }

}
