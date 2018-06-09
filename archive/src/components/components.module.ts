import { NgModule } from '@angular/core';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble';
import { ElasticTextareaComponent } from './elastic-textarea/elastic-textarea';
@NgModule({
	declarations: [ChatBubbleComponent,
    ElasticTextareaComponent],
	imports: [],
	exports: [ChatBubbleComponent,
    ElasticTextareaComponent]
})
export class ComponentsModule {}
