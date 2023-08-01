import React from 'react'
import { Card, Form, InputGroup, Button } from 'react-bootstrap'
import Layout from './Layout'
import './Shortener.css'

function Shortener() {
    return (
        <div>
            <Layout>
                <h1 className='title'>URL Shortener</h1>

                <Card className='sh-card-container'>
                    <Form.Control style={{ height: '50px' }} type="url" placeholder="Enter your long url" />
                    <br></br>
                    <InputGroup className="mb-3" style={{ height: '50px' }}>
                        <InputGroup.Text id="basic-addon3">
                            🔗 bemui.link/
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>

                    <div className="d-grid gap-2" >

                        <Button href="dashboard" className='card-button' style={{ padding: '12px', marginTop: '30px' }}>Shorten</Button>
                    </div>

                </Card>


                <h1 className='sh-history'> History</h1>

                <div style={{ padding: '0px 70px' }}>
                    <span className='title-history'>bemui.link/BiroMultimedia2023</span>
                    <br></br>
                    <span className='sub-title-history'>https://bem.ui.ac.id/</span>
                    <hr style={{ borderTop: '2px solid #CCCCCC' }}></hr>
                </div>
                <div style={{ padding: '10px 70px' }}>
                    <span className='title-history'>bemui.link/BiroMultimedia2023</span>
                    <br></br>
                    <span className='sub-title-history'>https://bem.ui.ac.id/</span>
                    <hr style={{ borderTop: '2px solid #CCCCCC' }}></hr>
                </div>
                <div style={{ padding: '10px 70px' }}>
                    <span className='title-history'>bemui.link/BiroMultimedia2023</span>
                    <br></br>
                    <span className='sub-title-history'>https://bem.ui.ac.id/</span>
                    <hr style={{ borderTop: '2px solid #CCCCCC' }}></hr>
                </div>

            </Layout>
        </div>
    )
}

export default Shortener