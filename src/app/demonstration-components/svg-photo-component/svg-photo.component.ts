import { Component, Input, OnInit } from '@angular/core';
import { TheoryChannelPhotoPayload } from 'src/app/pages/getting-started/theory-page/theory-page.component';

export interface XyCoordinates{
  x: number;
  y: number;
}

export interface MarkerRotation extends XyCoordinates{
  degree: number;
}

export interface MarkerLocation extends XyCoordinates{
  rotate?: MarkerRotation;
  direction: boolean;
  text?: string;
}

export interface PortionMarker{
  width: number;
  height: number;
  locations: MarkerLocation[];
}

const MARKER : PortionMarker = {
  
  width: 111,
  height: 300,
  locations: [
    {
      x: 180,
      y: 63,
      text: '77mm',
      direction: true,
      rotate: {
        degree: 30,
        x: 0,
        y: 300
      }
    }
  ]
}

const MARKERB : PortionMarker = {
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

const MARKERC : PortionMarker = {
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

const MARKERD : PortionMarker = {
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

const MARKERE : PortionMarker = {
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

const MARKERF : PortionMarker = {
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

const MARKERG : PortionMarker = {
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





@Component({
  selector: 'svg-photo',
  templateUrl: './svg-photo.component.svg',
  styleUrls: ['./svg-photo.component.css']
})
export class SvgPhotoComponent implements OnInit {

  constructor() { }

  //@Input() Photo : string = '';
  @Input() Data! : TheoryChannelPhotoPayload;

  Marker! : PortionMarker;

  LeftFacingLine!  : string;
  RightFacingLine! : string;


  ngOnInit(): void {
    this.Marker          = this.Data.payload;
    this.LeftFacingLine  = this.createLeftFacingMarker();
    this.RightFacingLine = this.createRightFacingMarker();
  }

  public createLeftFacingMarker(): string{
    const w : number = this.Marker.width;
    const h : number = this.Marker.height;

    return `0,0 ${w},0 ${w},${h}, 0,${h}`;
  }
  
  public createRightFacingMarker(): string{
    const w : number = this.Marker.width;
    const h : number = this.Marker.height;

    return `${w + 77},0 77,0 77,${h} ${w + 77},${h}`;
  }

  private createRotation(prop: MarkerRotation):string{
    return `rotate(${prop.degree} ${prop.x} ${prop.y})`;
  }

  private createTranslate(prop: XyCoordinates): string{
    return `translate(${prop.x} ${prop.y})`;
  }

  public createTransform(prop: MarkerLocation): string{
    const rotate    : string = prop.rotate ? this.createRotation(prop.rotate) : '';
    const translate : string = this.createTranslate(prop);

    if(rotate !== ''){ return `${translate} ${rotate}`; }
    else{ return translate; }
  }

}
