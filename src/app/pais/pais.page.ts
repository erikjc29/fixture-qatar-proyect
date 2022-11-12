import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})
export class PaisPage implements OnInit {
  countryId: string
  infoPaisBol= false
  infoPais: any=[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {

   this.countryId=this.activatedRoute.snapshot.paramMap.get("country")

    if(this.countryId=="England"){
    this.countryId= "United Kingdom"
    }else if(this.countryId=="IR Iran"){
      this.countryId= "Islamic Republic of Iran"
    }else if(this.countryId=="Netherlands"){
      this.countryId= "The Netherlands"
    }else if(this.countryId=="Korea Repulic"){
      this.countryId="Republic of Korea"
    }

   console.log(this.countryId)
   this.http.get("https://restcountries.com/v3.1/name/"+this.countryId,{observe:"response"}).subscribe(res=>{
    console.log(res)
    this.infoPaisBol=true
    this.infoPais= res.body
    console.log(this.infoPais)

   })
  }

}
