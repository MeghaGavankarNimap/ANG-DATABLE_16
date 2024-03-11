import { catchError, map, of } from "rxjs";
import { HomeService } from "../service/home.service";
import { baseDataSource } from "./baseDatasource";





export class homeDataSource extends baseDataSource{
constructor (public service:HomeService ){
    super();
}

    getAllData(){
        

        this.service.getData()
            .pipe(
                map(
                    res => 
                    // this.paginatorTotalSubject.next(data.count);
                    // this.paginatorTotalSubject.next(data.count);
                    // this.paginatorTotalSubject.next(data.count);
                    this.entitySubject.next(res)
                ),
                catchError(() => of([])),
                // finalize(() => {
                //     this.loadingSubject.next(false);
                //     this.isPreloadTextViewedSubject.next(false);
                // })
            )
            .subscribe();
    }

}