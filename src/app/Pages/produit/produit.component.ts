import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Core/Services/products.service';
import { Product } from '../../Core/Models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService, private router: Router) {}

  ngOnInit() {
    this.productService.getProductsFromJson().subscribe((data) => {
      this.products = data;
      // Formatez les prix ici avec le symbole de la devise
    });
  }

  toto() {
    console.log('toto');
    this.router.navigate(['/detail'], );
  }
}
