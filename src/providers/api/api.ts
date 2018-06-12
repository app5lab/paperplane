import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http';
import * as md5 from 'md5'
import { log } from 'util';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
allFlights: any [] = []
  constructor(public http: HTTP) {
  }

  login(email,pass):Promise<any>{
    let dataa =  ({
      "email": email+"",
      "password": pass+"",
      "key": 'login',
      "sec": '((|m5DlhrplfKx1'
    })
      //console.log(JSON.stringify(dataa));

    let promise = new Promise( ( resolve ) =>
    {
      this.http.setDataSerializer('json')
      this.http.post( 'https://zipship.io/manage-data.php', dataa ,{} )
        .then(
          res =>
          {
            if ( res.data != 'Invalid User' && res.data != 'Security Key is invalid' ){
              var data = JSON.parse (res.data)
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
              let t = JSON.stringify(temp)
              
              localStorage.setItem('zip_user', t)
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
      this.http.setDataSerializer('json')

      this.http.post( 'https://zipship.io/flight-data.php', dataa ,{})
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
  getFlights(id):Promise<any>
  {
    var datas = {
      id: id,
      key: 'userId',
      sec: '((|m5DlhrplfKx1'
    }
    
    let promise = new Promise( ( resolve ) =>
    {
      this.http.setDataSerializer('json')
      this.http.post( 'https://zipship.io/flight-data.php', datas ,{} )
        .then(
          res =>
          {
            if(res.data != 'Invalid Data' && res.data != 'Security Key is invalid')
              {
                this.allFlights = JSON.parse( res.data )
                resolve(this.allFlights)
              }
            else
              resolve( 'false' ) 
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
      this.http.setDataSerializer('json')
      this.http.post( 'https://zipship.io/manage-data.php', data ,{})
        .then(
          res =>
          {
            if ( res.data != 'User already Exist' && res.data == '1' )
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
      this.http.setDataSerializer('json')
      this.http.post( 'https://zipship.io/user-posts.php', data,{} )
        .then(
          res =>
          {
            console.log(res);
            
            // if ( res.data != 'User already Exist' && res.data == '1' )
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
      this.http.setDataSerializer('json')
      this.http.post( 'https://zipship.io/user-posts.php', data,{} )
        .then(
          res =>
          {
            console.log( res );

            if(res.data != 'Data not Found' && res.data != 'Security Key is invalid')
              {
                resolve(JSON.parse( res.data ))
              }
            else
              resolve( 'false' ) 
          }
        );
    } );
    return promise;
  }

  bid(pid,uid,amount,flight): Promise<any>
  {
    var data = {
      post_id:pid,
      user_id: uid,
      amount:amount,
      flight_id:flight,
      key: 'addbid',
      sec: '((|m5DlhrplfKx1'
    }

    let promise = new Promise( ( resolve ) =>
    {
      this.http.setDataSerializer('json')
      this.http.post( 'https://zipship.io/biddingBc.php', data ,{})
        .then(
          res =>
          {
            console.log( res );

            // if ( res.data != 'User already Exist' && res.data == '1' )
            //   resolve( true );
            // else
            //   resolve( false )
          }
        );
    } );
    return promise;
  }

}
