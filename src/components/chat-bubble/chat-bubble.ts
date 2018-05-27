import { Component } from '@angular/core';

/**
 * Generated class for the ChatBubbleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-bubble',
  templateUrl: 'chat-bubble.html'
})
export class ChatBubbleComponent {
  // public chatMessage: ChatMessage;
  // public messageType = MessageType;

  constructor()
  {

  }

  formatEpoch ( epoch ): string
  { return 'asd';
    // return UtilService.getCalendarDay( epoch );
  }

}
