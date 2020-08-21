import {Request, Response} from 'express'; 
import db from '../database'; 
import { json } from 'body-parser';


class BooksController {
    public async list (req: Request, res: Response){
        const books = await db.query('SELECT * FROM book'); 
        res.json(books);

    }
    public async getBook(req: Request, res: Response): Promise<void>
    {
        const { id } = req.params; 
        const books = await db.query('SELECT * FROM book WHERE id = ?', [id]); 
        if(books.length > 0)
        {
            res.json(books[0]); 
        }
        else
        {
            res.status(404).json({message: 'Book Not Found'}); 
        }
    }
    public async create(req: Request, res: Response): Promise<void>
    {
        await db.query('INSERT INTO book set ?', [req.body]); 
        res.json({message: 'Book saved'}); 
    } 
    public async delete(req: Request, res: Response): Promise <void> 
    {
        const { id } = req.params; 
        await db.query('DELETE FROM book WHERE id = ?', [id]);
        res.json({message: 'The book was deleted'}); 
    }
    public async update(req: Request, res: Response)
    {
        const { id } = req.params; 
        await db.query('UPDATE book set ? WHERE id = ?', [req.body, id]); 
        res.json({message: 'The game was updated'}); 
    }
}

const booksController = new BooksController(); 
export default booksController; 