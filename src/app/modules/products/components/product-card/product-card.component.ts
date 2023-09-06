import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input()
  public title:string = '';

  @Input()
  public image:string = '';

  @Input()
  public description:string = '';

  @Input()
  public price:number = 0;

  @Input()
  public id:number = 0;

  @Input()
  public thumbnail:string = '';
}
