import { Component, ViewChild, EventEmitter, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {
  @ViewChild( 'txtChat' ) txtChat: any;
  // @ViewChild( 'content' ) content: any;
  messages: any[] = [];
  chatBox: string =""; 
  btnEmitter: EventEmitter<string>;

  constructor( public _zone: NgZone, public api:ApiProvider)
  {
    this.btnEmitter = new EventEmitter<string>();
    this.messages = [];
    this.chatBox = "";
    this.init();
    var user = JSON.parse( localStorage.getItem( 'zip_user' ) )
    this.api.firebase().ref('chat/users/' + user.id +'/' + '10').push({msg:'test'})
    // this.api.firebase().ref('chat/users/' + user.id +'/' + '10').push({msg:'test'})
   
  }

  // ionViewWillEnter ()
  // {
  //   this.databaseService.getJson( "messages" )
  //     .then( messages =>
  //     {
  //       if ( messages )
  //       {
  //         this.messages = this.messages.concat( _.sortBy( messages, ['epoch'] ) );
  //       }
  //       this.scrollToBottom();
  //     } );
  //   this.socketService.connect();
  // }

  ionViewWillLeave ()
  {
    // this.socketService.disconnect();
  }

  init ()
  {
    // this.socketService.messages.subscribe( ( chatMessage: ChatMessage ) =>
    // {
    //   this._zone.run( () =>
    //   {
    //     this.messages.push( chatMessage );
    //   } );
    //   this.scrollToBottom();
    // } );
  }

  public sendMessage ()
  {
    this.btnEmitter.emit( "sent clicked" );
    this.txtChat.setFocus();
    let message = this.txtChat.content;
    this.send( message );
    this.txtChat.clearInput();
  }

  send ( message )
  {
    //todo read email from database
    let from = "annaggarwal@paypal.com";
    // this.socketService.newRequest( UtilService.formatMessageRequest( message, from ) );
    this.chatBox = '';
    this.scrollToBottom();
  }

  scrollToBottom ()
  {
    this._zone.run( () =>
    {
      setTimeout( () =>
      {
        // this.content.scrollToBottom( 300 );
      } );
    } );
  }
}
