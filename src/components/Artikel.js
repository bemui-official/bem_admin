import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import './Artikel.css'
import Layout from './Layout'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const format = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}

function Artikel() {
    const [value, setValue] = useState('');
    return (
        <div>
            <Layout>
                <h1 className='title'>Form Artikel</h1>

                <Card className='ar-card-container'>
                    <Form.Label className='ar-card-title'>Cover</Form.Label>
                    <Form.Control style={{}} type="file" placeholder="masih on process yaa" />
                    <br></br>
                    <Form.Label className='ar-card-title'>Judul</Form.Label>
                    <Form.Control style={{ height: '50px' }} type="text" placeholder="Judul artikel" />
                    <br></br>
                    <Form.Label className='ar-card-title'>Penulis</Form.Label>
                    <Form.Control style={{ height: '50px' }} type="text" placeholder="Nama penulis artikel" />
                    <br></br>
                    <Form.Label className='ar-card-title'>Artikel Text Editor</Form.Label>
                    <ReactQuill className='text-editor' theme="snow" value={value} onChange={setValue} formats={format} modules={modules} />
                    <br></br>


                    <div className="d-grid gap-2" >

                        <Button href="dashboard" className='card-button' style={{ padding: '12px' }}>Log in</Button>
                    </div>

                </Card>
            </Layout>
        </div>
    )
}

export default Artikel