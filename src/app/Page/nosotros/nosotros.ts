import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ChatBot } from '../../components/chat-bot/chat-bot';

@Component({
  selector: 'app-nosotros',
  imports: [Navbar,Footer, ChatBot],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css'
})
export class Nosotros {

}
