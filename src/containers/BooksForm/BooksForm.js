import React, {Component} from 'react'
import {Form, Col, Row, Button} from "react-bootstrap";
import './BooksForm.css'
import {connect} from "react-redux";
import {Book, BOOK_CATEGORIES} from "../../logic/book";
import { createBook } from "../../actions";
import PropTypes from "prop-types";

class BooksForm extends Component {
    static propTypes = {
        dispatchAddBook: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: 0
        }
    }
    _handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
            const newBook = Book(Math.random(), this.state.title, BOOK_CATEGORIES[parseInt(this.state.category)]);
            this.props.dispatchAddBook(newBook);
        }


    }

    _handleChange = (key, value) => {
        this.setState({[key]: value})
    }

    render() {
        return (
            <div className={'booksform'}>
                <h3 className={'booksform-heading'}>Add New Book</h3>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Book Title" value={this.state.title} onChange={(event) => this._handleChange('title', event.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control as="select" value={this.state.category} onChange={(event) => this._handleChange('category', event.target.value)}>
                                {BOOK_CATEGORIES.map((category, index) => <option value={index} key={index}>{category}</option>)}
                            </Form.Control>
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit" onClick={this._handleSubmit}>
                                Add Book
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddBook: (book) => dispatch(createBook(book))
    }
}

export default connect(null, mapDispatchToProps)(BooksForm)