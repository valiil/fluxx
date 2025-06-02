import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ChatBot } from '../../components/chat-bot/chat-bot';

@Component({
  selector: 'app-contactanos',
  imports: [Navbar,Footer, ChatBot],
  templateUrl: './contactanos.html',
  styleUrl: './contactanos.css'
})
export class Contactanos {

}
