import React, { Component } from 'react'
import {Col, Form, Row} from "react-bootstrap";
import {BOOK_CATEGORIES} from "../../logic/book";
import PropTypes from "prop-types";

export default class CategoryFilter extends Component {
    static propTypes = {
        handleFilterChange: PropTypes.func.isRequired
    }
    _handleFilterChange = (event) => {
        if (event) {
            event.preventDefault();
            this.props.handleFilterChange(parseInt(event.target.value));
        }

    }
    render() {
        return (
            <div className={'CategoryFilter'}>
                <Form>
                    <Row>
                        <Col xs={12} md={4} lg={2}>
                            <Form.Control as="select" onChange={this._handleFilterChange}>
                                <option value={-1}>Option All</option>
                                {BOOK_CATEGORIES.map((category, index) => <option value={index} key={index}>{category}</option>)}
                            </Form.Control>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }

}
