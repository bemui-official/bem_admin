import React, { useState } from 'react'
import './Dokumen.css'
import Layout from './Layout'
import { Card, Row, Col, Form, Button } from 'react-bootstrap'
import { FileUploader } from "react-drag-drop-files";
import upload from '../img/upload.png'

const fileTypes = ["JPG", "PNG", "GIF"];

function Dokumen() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (

        <div>
            <Layout>
                <h1 className='title'>Form Dokumen</h1>

                <Card className='dk-card-container'>
                    <Form.Label className='dk-card-title'>Judul</Form.Label>
                    <Form.Control style={{ height: '50px' }} type="juduldok" placeholder="Judul dokumen" />
                    <br></br>
                    <Form.Label className='dk-card-title'>Kategori</Form.Label>
                    <Form.Control style={{ height: '50px' }} type="kategoridok" placeholder="Kategori dokumen" />

                    <br></br>
                    <Form.Label className='dk-card-title'>Dokumen</Form.Label>
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
                        <div className='upload-box'>
                            <img src={upload} />
                            <br></br>
                            <b className='upload-text'><u>Choose file</u> or drag here</b>
                        </div>
                    </FileUploader>
                    <br></br>


                    <div className="d-grid gap-2" >

                        <Button href="dashboard" className='card-button' style={{ padding: '12px' }}>Submit</Button>
                    </div>
                </Card>
            </Layout>
        </div>
    )
}

export default Dokumen