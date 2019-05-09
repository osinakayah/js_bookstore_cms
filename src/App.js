import React from 'react';
import './App.css';
import BooksList from "./containers/BooksList/BooksList";
import BooksForm from "./containers/BooksForm/BooksForm";
import { Navbar } from 'react-bootstrap'


function App() {
    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Bookstore CMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>

            <div className={'App-body'}>

                <BooksList/>
                <BooksForm/>
            </div>
        </div>
    );
}

export default App;
