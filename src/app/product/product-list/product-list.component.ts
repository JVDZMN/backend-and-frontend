import {Component , OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs'
import {ProductService} from '../../models/product.service'
import {product} from '../../models/product.model'

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {
    productsisEmpty : boolean = true
    products : product[]=[]
    private productSubscription!: Subscription;
   constructor(public productService : ProductService){
       
   }
    ngOnDestroy(): void {
        this.productSubscription.unsubscribe()
        }
    ngOnInit(): void {
        this.productService.getProducts()
        
        this.productSubscription = this.productService.getProductUpdateListener()
        .subscribe((products : product[])=>{
            if(products.length >= 0) this.productsisEmpty = false
            this.products = products
        })
        
    }
    onDelete(productId : string){
        if(!productId)productId=''
        this.productService.deleteProduct(productId)
        if([...this.products])this.productsisEmpty = false
        else this.productsisEmpty = true
    }
    
}