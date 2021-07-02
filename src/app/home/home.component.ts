import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 usuarios: Usuario[] = [];

 ngOnInit(): void {
   this.usuarios = [
     {
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BNDYwMzkwNjc0Ml5BMl5BanBnXkFtZTcwMDU1NTMzNw@@._V1_QL75_UX140_CR0,14,140,140_.jpg',
      name: 'Dexter Morgan',
      email: 'dexter@dextershowtime.com',
      contact: 'Departamento da Polícia Metropolitana de Miami',
      occupation: 'Médico legista',
     }, 
     {
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTkwOTQ1MjA2NF5BMl5BanBnXkFtZTgwOTAwOTc5MjE@._V1_UY100_CR16,0,100,100_AL_.jpg',
      name: 'Walter White',
      email: 'walter@jpwynneschool.com',
      contact: 'J. P. Wynne High School, Octopus Car Wash',
      occupation: 'Professor de Química, empresário',
     },
     {
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BM2MwNzRhNDYtMGJiMi00NWUzLWE0ZmEtZWNmMjk3NTQ4MmQxXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_UX99_CR0,0,99,99_AL_.jpg',
      name: 'Daenerys Targaryen',
      email: 'daenerys@meereenqueen.com',
      contact: 'Nascida da Tormenta',
      occupation: 'Rainha dos Sete Reinos de Westeros',
     }, 
     {
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTgxNTY4MjkwMV5BMl5BanBnXkFtZTcwODk2Njk4Mw@@._V1_UY99_CR25,0,99,99_AL_.jpg',
      name: 'Stefan Salvatore',
      email: 'stefan@salvatoreschool.com',
      contact: 'Salvatore Boarding School for the Young & Gifted',
      occupation: 'Estudante',
     }, 
     {
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BYmNkZGYyZjItYjE0My00MzE4LTgyOGEtYWVhYjk1Y2IyYWRjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_UY100_CR39,0,100,100_AL_.jpg',
      name: 'Elena Gilbert',
      email: 'elena@duke.com',
      contact: 'Universidade Duke',
      occupation: 'Estudante',
     }, 
     {
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTA2OTM4NDI3NTheQTJeQWpwZ15BbWU3MDA4NzI3Mjc@._V1_QL75_UX140_CR0,7,140,140_.jpg',
      name: 'Dolores Abernathy',
      email: 'dolores@westworld.com',
      contact: 'Westworld',
      occupation: 'Anfitriã',
     }
   ]
 }


}
