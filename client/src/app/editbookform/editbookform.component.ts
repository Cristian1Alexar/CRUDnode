import { Component, OnInit, HostBinding } from '@angular/core';
import { Book } from 'src/app/models/book';
import {BooksService} from '../services/books.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-editbookform',
  templateUrl: './editbookform.component.html',
  styleUrls: ['./editbookform.component.css']
})
export class EditbookformComponent implements OnInit {

  @HostBinding('class') classes = 'row'; 

  book: Book = {
    id: 0,
    title: '', 
    description: '',
    image: '',
    created_at: new Date()

  };


  constructor(private bookService: BooksService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params; 
    if (params.id)
    {
      this.bookService.getBook(params.id).subscribe(
        res =>{
          console.log(res); 
          this.book = res; 
          console.log(this.book.created_at, 'Fecha')
          
        },
        err => console.error(err)
      ); 
    }
  }
  updateBook(){
    
   
    const id: number = this.book.id; 
    delete this.book.id; 
   
    this.bookService.updateBook(id.toString(), this.book).subscribe(
     res =>{
       console.log(res); 
       this.router.navigate(['/libros']);
       
     },
     err => console.error(err)
    ); 

  }

}
