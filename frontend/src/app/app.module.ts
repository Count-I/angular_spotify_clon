import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SigInViewComponent } from './views/sig-in-view/sig-in-view.component';
import { CurrentChatComponent } from './components/current-chat/current-chat.component';
import { LandingChatComponent } from './components/current-chat/components/landing-chat/landing-chat.component';
import { SelectedChatComponent } from './components/current-chat/components/selected-chat/selected-chat.component';
import { MessageBoxComponent } from './components/current-chat/components/message-box/message-box.component';
import { CookieService } from 'ngx-cookie-service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatService } from './services/chat.service';
import { MainComponent } from './views/main/main.component';
import { HeaderComponent } from './components/contact/components/header/header.component';
import { SearcherComponent } from './components/contact/components/searcher/searcher.component';
import { LoadingChatComponent } from './components/current-chat/components/loading-chat/loading-chat.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { MainConfigComponent } from './components/main-config/main-config.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    SignInComponent,
    SigInViewComponent,
    CurrentChatComponent,
    LandingChatComponent,
    SelectedChatComponent,
    MessageBoxComponent,
    SignUpComponent,
    MainComponent,
    HeaderComponent,
    SearcherComponent,
    LoadingChatComponent,
    ContactDetailComponent,
    MainConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [CookieService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
