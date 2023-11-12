import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  faqItems: FaqItem[] = [
    { question: '¿Cómo funciona el empeño?', answer: 'El empeño funciona...', isOpen: false },
    { question: '¿Qué artículos aceptan para empeñar?', answer: 'Aceptamos...', isOpen: false },
    // Agrega más preguntas y respuestas según sea necesario
  ];

  toggleAnswer(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}


