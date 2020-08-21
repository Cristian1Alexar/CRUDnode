import { Component, OnInit, HostBinding } from '@angular/core';
import { Book } from 'src/app/models/book';
import {BooksService} from '../../services/books.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

  @HostBinding('class') classes = 'row'; 

  book: Book = {
    id: 0,
    title: '', 
    description: '',
    image: '',
    created_at: new Date()

  };
  
  public edit: boolean = false; 

  constructor(private bookService: BooksService, private router: Router, private activatedRoute: ActivatedRoute) {
      
   }
   saveNewBook(){
    delete this.book.created_at;
    delete this.book.id; 
    this.bookService.saveBook(this.book).subscribe(
      res =>{
        console.log(res); 
        this.router.navigate(['/libros']);
      },
      err => console.error(err)
    ); 
   }
   updateBook(){
     delete this.book.created_at; 
     this.bookService.updateBook(this.book.id.toString(), this.book).subscribe(
      res =>{
        console.log(res); 
        this.router.navigate(['/libros']);
        
      },
      err => console.error(err)
     ); 

   }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params; 
    if (params.id)
    {
      this.bookService.getBook(params.id).subscribe(
        res =>{
          console.log(res); 
          this.book = res; 
          this.edit = true; 
          
        },
        err => console.error(err)
      ); 
    }
  }

}
