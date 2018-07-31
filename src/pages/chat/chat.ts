import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Events, Content } from 'ionic-angular';
import { ChatService, ChatMessage, UserInfo } from "../../providers/chat-service/chat-service";
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class Chat {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: ElementRef;
  msgList: ChatMessage[] = [];
  user: UserInfo;
  toUser: UserInfo;
  editorMsg = '';
  showEmojiPicker = false;
  sender_id = ''
  chat: any;
  nickname:string= 'hassan'
  m:any []=[]
  constructor(navParams: NavParams, public api:ApiProvider,
    private chatService: ChatService,
    private events: Events,) {
    
    this.data.type = 'message';
    this.data.nickname = this.nickname;
    var user = JSON.parse( localStorage.getItem( 'zip_user' ) )    
    
    
    this.user = {
      id:user.id,
      name:user.fname + ' ' + user.lname,
      avatar:user.img+'no'
    }
    var u  = navParams.get('user')
    this.toUser = {
      id: u.id,
      name: u.name,
      avatar: u.dp
    };


    this.sender_id = user.id
    let that = this
    api.firebase().ref('chats/').child( user.id +'_'+ this.toUser.id).once('value', d =>{
      if(d.exists())
        {
          this.chat = api.firebase().ref('chats/' + user.id +'_'+  this.toUser.id)
          api.firebase().ref('rooms/' + user.id).child(this.toUser.id).once('value', ok => {
            if(!ok.exists())
            {
              api.firebase().ref('rooms/' + user.id +'/'+ this.toUser.id).set(
                {
                  msg:'',
                  date:'',
                  name:this.user.name,
                  img:this.user.avatar
                })
              api.firebase().ref('rooms/' + this.toUser.id +'/'+ user.id).set(
                {
                  msg:'',
                  date:'',
                  name:this.user.name,
                  img:this.user.avatar
                }
              )
            }

          })
          this.chat.on('value', data => {
            if(data != null)
              this.m = that.snapshotToArray(data)
            this.msgList = this.m
            })
            this.scrollToBottom()
        }
      else{
          console.log('asd');
          this.chat = api.firebase().ref('chats/' + this.toUser.id +'_'+  user.id)
          api.firebase().ref('rooms/' + user.id).child(this.toUser.id).once('value', ok => {
            if(!ok.exists())
            {
              api.firebase().ref('rooms/' + user.id +'/'+ this.toUser.id).set(
                {
                  msg:'',
                  date:'',
                  name:this.user.name,
                  img:this.user.avatar
                }
              )
              api.firebase().ref('rooms/' + this.toUser.id +'/'+ user.id).set(
                {
                msg:'',
                date:'',
                name:this.user.name,
                img:this.user.avatar
              })
            }
          })
          this.chat.on('value', data => {
            if(data != null)
              this.m = that.snapshotToArray(data)
            this.msgList = this.m
            this.scrollToBottom()
            })
        }
    })
    
    // Get the navParams toUserId parameter
    
    // Get mock user information 
    // this.chatService.getUserInfo()
    // .then((res) => {
    //   this.user = res
    // });
  }

  snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};

  ionViewWillLeave() {
    // unsubscribe
    this.events.unsubscribe('chat:received');
  }

  ionViewDidEnter() {
    //get message list
    // this.getMsg();

    // Subscribe to received  new message events
    this.events.subscribe('chat:received', msg => {
      this.pushNewMsg(msg);
    })
  }

  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }

  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.focus();
    } else {
      this.setTextareaScroll();
    }
    this.content.resize();
    this.scrollToBottom();
  }

  /**
   * @name getMsg
   * @returns {Promise<ChatMessage[]>}
   */
  getMsg() {
    // Get mock message list
    return this.chatService
    .getMsgList()
    .subscribe(res => {
      this.msgList = this.m;
      this.scrollToBottom();
    });
  }

  /**
   * @name sendMsg
   */
  sendMsg() {
    if (!this.editorMsg.trim()) return;

    // Mock message
    const id = Date.now().toString();
    let newMsg: ChatMessage = {
      messageId: id,
      userId: this.user.id,
      userName: this.user.name,
      userAvatar: this.user.avatar,
      toUserId: this.toUser.id,
      time: Date.now(),
      message: this.editorMsg,
      status: 'pending'
    };

    this.pushNewMsg(newMsg);
    this.editorMsg = '';

    if (!this.showEmojiPicker) {
      this.focus();
    }

    this.chatService.sendMsg(newMsg)
    .then(() => {
      let index = this.getMsgIndexById(id);
      if (index !== -1) {
        this.msgList[index].status = 'success';
      }
    })
    
  }
  data = { type:'', nickname:'', message:'' };

  /**
   * @name pushNewMsg
   * @param msg
   */
  pushNewMsg(msg: ChatMessage) {
    const userId = this.user.id,
      toUserId = this.toUser.id;
    // Verify user relationships
    if (msg.userId === userId && msg.toUserId === toUserId) {
      console.log('pushing to db');
    msg.status='success'
    this.chat.push(msg).then( () => {
      this.api.firebase().ref('rooms/' + this.user.id +'/'+ this.toUser.id).set({msg:msg.message,name:this.toUser.name})
      this.api.firebase().ref('rooms/' + this.toUser.id +'/'+ this.user.id).set({msg:msg.message,name:this.user.name})
      // this.msgList.push(msg);
      this.data.message = '';
      })
    } else if (msg.toUserId === userId && msg.userId === toUserId) {
      this.msgList.push(msg);
    }
    this.scrollToBottom();
  }

  getMsgIndexById(id: string) {
    return this.msgList.findIndex(e => e.messageId === id)
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  private focus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }

  private setTextareaScroll() {
    const textarea =this.messageInput.nativeElement;
    textarea.scrollTop = textarea.scrollHeight;
  }
}
