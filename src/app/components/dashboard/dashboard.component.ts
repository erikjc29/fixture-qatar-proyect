import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public matchs: Array<any>= []
  public datas:Array<any>=[]
  constructor(public authService: AuthService,public http : HttpClient,) {}
  ngOnInit(): void {
    this.http.get<any>('https://www.fuchoquiniela.com/api/mundial/matches').subscribe((res:any) => {
      console.log(res);
      console.log(res.matches)
      this.matchs = res.matches;})
    this.http.get<any>("https://world-cup-json-2022.fly.dev/matches").subscribe((res:any)=>{
      console.log(res);
      this.datas=res;
    })
      

  }
}