import { Component } from '@angular/core';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-anadir-alumno',
  standalone: true,
  imports: [],
  templateUrl: './anadir-alumno.component.html',
  styleUrl: './anadir-alumno.component.css'
})
export class AnadirAlumnoComponent {

  
  data: any[]=[];

  constructor(private apiService: ApisService){}
  ngOnInit(): void{
    this.llenarData();
  }
  llenarData(){
    this.apiService.getData().subscribe( data =>{
      this.data = data;
      console.log(data);
    })
  }
}