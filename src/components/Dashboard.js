import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import './Dashboard.css'
import Layout from './Layout'


function Dashboard() {
    return (
        <div>
            <Layout>

                <h1 className='title' >Dashboard</h1>
                <Row className='align-items-center justify-content-around'>
                    <Col md={5} >
                        <Card className='db-card-container '  >
                            <span className='db-card-title'>Jumlah Kunjungan</span>
                            <h2 className='card-text'>385.583</h2>
                        </Card>
                    </Col >
                    <Col md={5}>
                        <Card className='db-card-container' >
                            <span className='db-card-title'>Jumlah Dokumen</span>
                            <h2 className='card-text'>385.583</h2>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <Row className='align-items-center justify-content-around'>
                    <Col md={5} >
                        <Card className='db-card-container'>
                            <span className='db-card-title'>Jumlah Kajian</span>
                            <h2 className='card-text'>385.583</h2>
                        </Card>
                    </Col >
                    <Col md={5}>
                        <Card className='db-card-container' >
                            <span className='db-card-title'>Jumlah Artikel</span>
                            <h2 className='card-text'>385.583</h2>
                        </Card>
                    </Col>

                </Row>

            </Layout>
        </div>
    )
}

export default Dashboard