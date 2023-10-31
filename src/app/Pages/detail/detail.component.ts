import { Component } from '@angular/core';
import {DashboardComponent} from '../../Features/dashboard/dashboard.component';
import { Product } from 'src/app/Core/Models/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  product: Product | undefined;
  
}
