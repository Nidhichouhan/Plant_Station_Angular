import { Component, OnInit } from '@angular/core';
import Json from '../body/data.json';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public data: { image: string, full_description: string }[] = Json;
}
