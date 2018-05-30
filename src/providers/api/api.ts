import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import * as md5 from 'md5'
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

  register ( firstname, lastname, address,phone, email, password ): Promise<any>
  {
    var p = md5( password );
    console.log(p);
    
    var data = {
      email: email,
      password: p,
      firstname:firstname,
      lastname:lastname,
      address:address,
      phone:phone,
      key: 'create',
      sec: '((|m5DlhrplfKx1'
    }
    let promise = new Promise( ( resolve ) =>
    {
      this.http.post( 'https://zipship.io/manage-data.php', data )
        .toPromise()
        .then(
          res =>
          {
            if ( res.text() != 'User already Exist' && res.text() == '1' )
              resolve( true );
            else
              resolve( false )
          }
        );
    } );
    return promise;
  }


}
