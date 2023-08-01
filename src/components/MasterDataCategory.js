import React, { useState } from 'react'
import Layout from './Layout'
import './MasterDataCategory.css'
import DataTable from 'react-data-table-component';
import { Button, Modal, Form } from 'react-bootstrap';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    }, {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },

]


function MasterDataCategory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Layout>
                <h1 className='title'>Master Data Category</h1>
                <Button variant="primary" onClick={handleShow}>
                    Create
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Buat Kategori Baru</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label >Nama Kategori</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div>
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                    />
                </div>
            </Layout>
        </div>
    )
}

export default MasterDataCategory