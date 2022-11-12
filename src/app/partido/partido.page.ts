import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.page.html',
  styleUrls: ['./partido.page.scss'],
})
export class PartidoPage implements OnInit {

  partidoId: any;

  data: [];
  dataid: Array <any>=[]; 
  constructor(
    private activatedRouted: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.partidoId= this.activatedRouted.snapshot.paramMap.get("id");
    parseInt(this.partidoId)
    
    this.http.get('https://www.fuchoquiniela.com/api/mundial/matches').subscribe((res:any)=>{
      this.data=res.matches 
      console.log(this.data)
      // this.data= SerializationHelper.toInstance(new tipoDeTuClase), res.matches);
      // this.data = JSON.parse(res.matches)
      // console.log(this.data)
      // for(var datas of this.data){
      // //  this.dataid = this.data[datas]    // this.dataid = datas    
      //   console.log(datas)       
      // //  console.log(this.dataid)
      // // console.log(datas.id.toString())
      // // console.log(datas.id)
      // // var n = datas.id
      // // console.log(n)
      // }
      // console.log(this.dataid)
      
    }
    
    )
    
    console.log(typeof(this.partidoId))
    

  }

}
