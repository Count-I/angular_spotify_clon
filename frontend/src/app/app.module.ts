import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChatComponent } from './components/chatList/chat.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
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
import { SearcherContactListComponent } from './components/contact-list/components/searcher/contact-list-searcher.component';
import { MainComponent } from './views/main/main.component';
import { HeaderComponent } from './views/main/components/header/header.component';
import { HeaderContactListComponent } from './components/contact-list/components/header/contact-list-header.component';
import { SearcherComponent } from './views/main/components/searcher/searcher.component';
import { LoadingChatComponent } from './components/current-chat/components/loading-chat/loading-chat.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { MainConfigComponent } from './components/main-config/main-config.component';
import { HeaderContactDetailComponent } from './components/contact-detail/header-contact-detail/header-contact-detail.component';
import { ChatService } from './services/chat.service';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
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
    HeaderContactDetailComponent,
    HeaderContactListComponent,
    SearcherContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [CookieService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
