import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Layout.css'
import logo from '../img/LOGO.png'
import { Link } from "react-router-dom"

function Layout({ children }) {
    return (
        <Container fluid>
            <Row>
                <Col md={3} className='sidebar' >
                    <div className='text-center'>
                        <img style={{ marginTop: '35px' }} src={logo} width='75%' />
                    </div>
                    <hr style={{ borderTop: '2px solid #992020' }}></hr>

                    <Link className='sb-text' to={'/dashboard'}>
                        Dashboard</Link>
                    <Link className='sb-text' to={'/form-dokumen'}>Form Dokumen</Link>
                    <Link className='sb-text' to={'/form-kajian'}>Form Kajian</Link>
                    <Link className='sb-text' to={'/form-artikel'}>Form Artikel</Link>
                    <Link className='sb-text' to={'/master-data'}>Master Data</Link>
                    <Link className='sb-text' to={'/shortener'}>URL Shortener</Link>
                </Col>

                <Col md={9} className='layout'>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default Layout