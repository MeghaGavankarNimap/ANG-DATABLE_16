import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { BehaviorSubject, Observable, distinctUntilChanged, skip } from "rxjs";
import { HomeService } from "../service/home.service";


export class baseDataSource implements DataSource<any> {

    public entitySubject = new BehaviorSubject<any[]>([]);
    hasItems: boolean | undefined;
    subscriptions: any;
    paginatorTotalSubject: any;
    paginatorTotal$: any;

    constructor() {
      
    }

    connect(collectionViewer: CollectionViewer): Observable<any[]> {
      return this.entitySubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
      
    }
  
   
}