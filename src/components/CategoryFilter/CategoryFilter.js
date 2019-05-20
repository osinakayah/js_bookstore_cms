import React from 'react'
import {Col, Form, Row} from "react-bootstrap";
import {BOOK_CATEGORIES} from "../../logic/book";


export default props => (
    <div>
        <Form>
            <Row>
                <Col xs={12} md={4} lg={2}>
                    <Form.Control as="select" onChange={event => props.handleFilterChange(parseInt(event.target.value))}>
                        <option value={-1}>Option All</option>
                        {BOOK_CATEGORIES.map((category, index) => <option value={index} key={index}>{category}</option>)}
                    </Form.Control>
                </Col>
            </Row>
        </Form>
    </div>
)