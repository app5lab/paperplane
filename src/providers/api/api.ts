import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import * as md5 from 'md5'
import { log } from 'util';
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
    var dataa = {
      email: email,
      password: pass,
      key: 'login',
      sec: '((|m5DlhrplfKx1'
    }
    let promise = new Promise( ( resolve ) =>
    {
      this.http.post( 'https://zipship.io/manage-data.php', dataa )
        .toPromise()
        .then(
          res =>
          {
            if ( res.text() != 'Invalid User' ){
              console.log(JSON.parse(res.text()));
              var data = JSON.parse( res.text() )
              var temp = {
                email:data.email,
                id:data.id,
                fname:data.firstname,
                lname:data.lastname,
                verified:data.verified,
                created:data.created,
                phone:data.phone,
                address:data.address
              }
              localStorage.setItem('zip_user', JSON.stringify(temp))
              localStorage.setItem('zip_login', 'true')
              resolve(true);
            }
            else
            resolve(false)
          }
        );
    } );
    return promise;
  }
  addFlight ( src_cr,src_ct, des_cr,des_ct, time, id ): Promise<any>
  {
    var dataa = {
      source_country: src_cr,
      source_city: src_ct,      
      destination_country: des_cr,
      destination_city: des_ct,      
      time:time,
      userid:id,
      key: 'addflight',
      sec: '((|m5DlhrplfKx1'
    }
    let promise = new Promise( ( resolve ) =>
    {
      this.http.post( 'https://zipship.io/flight-data.php', dataa )
        .toPromise()
        .then(
          res =>
          {
            console.log(res);
            
            //   resolve( true );
            // else
            //   resolve( false )
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

  addPost ( title, des, im1, im2, im3, tr, from, to, touser, buy ): Promise<any>
  {
    var data={
      title:title,
      description:des,
      image1: im1,
      image2: im2,
      image3: im3,
      treward:tr,
      from:from,
      to:to,
      touser:touser,
      buy:buy,
      key: 'addPost',
      sec: '((|m5DlhrplfKx1'
    }

    let promise = new Promise( ( resolve ) =>
    {
      this.http.post( 'https://zipship.io/user-posts.php', data )
        .toPromise()
        .then(
          res =>
          {
            console.log(res);
            
            // if ( res.text() != 'User already Exist' && res.text() == '1' )
            //   resolve( true );
            // else
            //   resolve( false )
          }
        );
    } );
    return promise;

  }

  getPostbyLoc (from,to): Promise<any>
  {
    var data = {
      from_loc: from,
      to_loc: to,
      key: 'getPostbyLoc',
      sec: '((|m5DlhrplfKx1'
    }

    let promise = new Promise( ( resolve ) =>
    {
      this.http.post( 'https://zipship.io/user-posts.php', data )
        .toPromise()
        .then(
          res =>
          {
            console.log( res );

            // if ( res.text() != 'User already Exist' && res.text() == '1' )
            //   resolve( true );
            // else
            //   resolve( false )
          }
        );
    } );
    return promise;
  }

}
