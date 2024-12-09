import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { TableModule } from 'primeng/table';
import { FormGroup,FormControl } from '@angular/forms';
 
interface Categoria{
  id:number,
  nombre: string;
  detalle: string
}
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit{
  private categoriaService=inject(CategoriaService)
  categorias:Categoria[]=[]
  visible:boolean=false;
  categoria_id:number=-1;
  categoriaForm=new FormGroup({
    nombre: new FormControl(''),
    detalle: new FormControl('')
  });
  ngOnInit(): void {
      
    this.getCategorias()
  }
  getCategorias(){
    this.categoriaService.funListar().subscribe(
      (res:any)=>{
        this.categorias=res;
      },
      (error:any)=>{
        console.log(error);
      }
    )

  }
  mostrarDialog(){
this.visible=true
  }
  guardarCategoria(){
    if(this.categoria_id>0){ 
this.categoriaService.funModificar(this.categoria_id,this.categoriaForm.value).subscribe(
(res:any)=>{
  this.visible=false;
  this.getCategorias();
  this.categoria_id=-1
},
(error:any)=>{
  console.log(error);
}
)
}
else{
  this.categoriaService.funGuardar(this.categoriaForm.value).subscribe(
    (res:any)=>{
      this.visible=false;
      this.getCategorias();
      
    },
    (error:any)=>{
      console.log(error);
    })
  
}

  }
  editarCategoria(cat:Categoria){
this.visible=true
this.categoria_id=cat.id
this.categoriaForm.setValue({nombre: cat.nombre, detalle:cat.detalle})
  }
  deleteCategoria(cat:Categoria){

  }

}
