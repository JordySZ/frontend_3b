import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  products:any[]=[
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
    {id:1,nombre:"teclado",precio:394.96, categoria_id:5, stock:12,estado:"COMPLETADO"},
   
    
  
  ];
  cols:any[]=[]
  OpenNew(){
  }
editProduct(prod:any){

}
deleteProduct(prod:any){

}
}
