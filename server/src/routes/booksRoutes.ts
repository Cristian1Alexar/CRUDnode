import { Router } from 'express'; 
import booksController from '../controllers/booksController'; 
class BooksRoutes{
    public router: Router = Router();
    constructor()
    {
        this.config(); 
    } 
    config(): void{
        this.router.get('/', booksController.list);
        this.router.get('/:id', booksController.getBook);
        this.router.post('/', booksController.create);
        this.router.delete('/:id', booksController.delete); 
        this.router.put('/:id', booksController.update); 
    }
}

const booksRoutes = new BooksRoutes(); 
export default booksRoutes.router; 