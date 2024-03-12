import { Component, OnInit } from '@angular/core';
import { homeDataSource } from '../datasource/homedatasource';
import { HomeService } from '../service/home.service';
import { distinctUntilChanged, skip } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  OnInit{
  
  dataSource!: homeDataSource;
  pendingResult:any
  displayedColumns= ["BranchFDGLCode", "BranchName", "CustomerID","CustomerName","RedemptionID","RedemptionDate&Time","TotalPrice","RoundOff","TotalPayable","Status"];
  constructor(private service:HomeService){}

  ngOnInit(){
    
    this.dataSource = new homeDataSource(this.service);
    // const entitiesSubscription = this.dataSource.entitySubject
    //   .pipe(skip(1), distinctUntilChanged())
    //   .subscribe((res:  any[]) => {
    //     this.pendingResult = res;
    //     console.log(this.pendingResult)
       
    //   });
    
    this.dataSource.getAllData();

  }


}
