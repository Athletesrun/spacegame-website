import { Component } from '@angular/core';

@Component({
  selector: 'jupiter',
  templateUrl: './jupiter.component.html',
  styleUrls: ['./jupiter.component.css']
})

export class JupiterComponent {
    public planetReadable:string = 'Jupiter';
    public planetCodable:string = 'jupiter';
    public extension:string = '.jpg';
}
