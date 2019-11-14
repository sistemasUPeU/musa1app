import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { Empresa } from 'src/app/base-models/Empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  empresa: Empresa = new Empresa();
  listarempresa: Empresa []=[];
  constructor(private service: ServiceService) { }
  
  /*listar empresa*/
  ngOnInit() {
    this.service.getEmpresa().subscribe(data=>{
      this.listarempresa=data['emp'];
      console.log(this.listarempresa)
    })
  }
  guardarempresa(){
    
  }

}
