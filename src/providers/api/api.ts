import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import * as md5 from 'md5';
import * as firebase from 'firebase';
import { log } from 'util';
@Injectable()
export class ApiProvider {
allFlights: any [] = []
user:any = {
  email:'',
  id:'',
  fname:'',
  lname:'',
  verified:'',
  created:'',
  phone:'',
  address:'',
  img:''
}
  constructor(public http: HTTP) {
  }

  firebase(){
   // return this.db.list('uploads')
   return firebase.database()
//     const storageRef = firebase.storage().ref();
// const uploadTask = storageRef.child(`/uploads/`).put('assets/imgs/final.png');

// uploadTask.on('value',
//       (snapshot) => {
//         // in progress
//         const snap = snapshot as firebase.storage.UploadTaskSnapshot
//       },
//       (error) => {
//         // fail
//         console.log(error)
//       },
//       () => {
//         // success
//         console.log('[ass');

//       }
//     );
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
      this.http.post( 'https://zipship.io/api/manage-data.php', dataa ,{} )
        .then(
          res =>
          {
            if ( res.data != 'Invalid User' && res.data != 'Security Key is invalid' ){
              var data = JSON.parse (res.data)
              this.user  = {
                email:data.email,
                id:data.id,
                fname:data.firstname,
                lname:data.lastname,
                verified:data.verified,
                created:data.created, 
                phone:data.phone,
                address:data.address,
                img:data.dp
              }
              let t = JSON.stringify(this.user)

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
      date:time,
      userid:id,
      key: 'addflight',
      sec: '((|m5DlhrplfKx1'
    }
    let promise = new Promise( ( resolve ) =>
    {
      this.http.setDataSerializer('json')

      this.http.post( 'https://zipship.io/api/flight-data.php', dataa ,{})
        .then(
          res =>
          {
            console.log(JSON.stringify(res.data));

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
      this.http.post( 'https://zipship.io/api/flight-data.php', datas ,{} )
        .then(
          res =>
          {
            console.log(JSON.stringify(res.data));
            
            if(res.data != 'Invalid Data' && res.data != 'Security Key is invalid')
              {
                if( res.data != "")
                  this.allFlights = JSON.parse( res.data )
                resolve(this.allFlights)
              }
            else
              resolve( [] )
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
      this.http.post( 'https://zipship.io/api/manage-data.php', data ,{})
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

  addPost ( title, des, im1, im2, im3, tr, fromCry, toCry, fromC, toC, qty, touser, buy ): Promise<any>
  {
    var data={
      title:title,
      description:des,
      image1: im1,
      image2: im2,
      image3: im3,
      treward:tr,
      fromCountry:fromCry,
      fromCity:fromC,
      toCountry:toCry,
      toCity:toC,
      touser:touser,
      qty:qty,
      buy:buy,
      key: 'addPost',
      sec: '((|m5DlhrplfKx1'
    }

    let promise = new Promise( ( resolve ) =>
    {
      this.http.setDataSerializer('json')
      this.http.post( 'https://zipship.io/api/user-posts.php', data,{} )
        .then(
          res =>
          {
            console.log(JSON.stringify(res.data));

            if (res.data == '1' )
              resolve( true );
            else
              resolve( false )
          }
        );
    } );
    return promise;

  }

  getPostbyLoc (): Promise<any>
  {
    var data = {
      // from_loc: from,
      // to_loc: to,
      key: 'getLatestPost',
      sec: '((|m5DlhrplfKx1'
    }

    let promise = new Promise( ( resolve ) =>
    { 
      this.http.setDataSerializer('json')
      this.http.post( 'https://zipship.io/api/user-posts.php', data,{} )
        .then(
          res =>
          {
            // console.log(JSON.parse(res.data));

            if(res.data != 'Data not Found' && res.data != 'Security Key is invalid')
              {
                resolve(JSON.parse(res.data))
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
      this.http.post( 'https://zipship.io/api/biddingBc.php', data ,{})
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
