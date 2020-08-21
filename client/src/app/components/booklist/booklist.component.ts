import { Component, OnInit, HostBinding } from '@angular/core';

import {BooksService} from '../../services/books.service'; 
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  @HostBinding('class') classes = 'row'; 
  books: any = [];

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.getBooks(); 
  }
  deleteBook(id: string)
  {
    this.bookService.deleteBook(id).subscribe(
      res =>{
        console.log(res); 
        this.getBooks();

      },
      err => console.error(err)
    );
  }
  getBooks(){
    this.bookService.getBooks().subscribe(
      res => {
        this.books = res; 
      },
      err => console.error(err) 
    );
  }
  editBook(id: string){
   console.log(id); 
  }

}
