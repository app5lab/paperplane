import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
  }

  login(email,pass):Promise<any>{
    var data = {
      email: email,
      password: pass,
      key: 'login',
      sec: '((|m5DlhrplfKx1'
    }
    let promise = new Promise( ( resolve ) =>
    {
      this.http.post( 'https://zipship.io/manage-data.php', data )
        .toPromise()
        .then(
          res =>
          {
            if ( res.text() != 'Invalid User' )
              resolve(true);
            else
            resolve(false)
          }
        );
    } );
    return promise;
  }
}
