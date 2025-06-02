import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ChatBot } from '../../components/chat-bot/chat-bot';

@Component({
  selector: 'app-inicio',
  imports: [Navbar, Footer, ChatBot],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}
