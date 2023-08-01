import React, { useCallback, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import './Kajian.css'
import Layout from './Layout'
import { ReactTags } from 'react-tag-autocomplete'
import './ReactTagStyle.css'




const suggestions = [
    { value: 3, label: 'Linkungan' },
    { value: 4, label: 'Sosial Politik' },
    { value: 5, label: 'Kesehatan' },
]
const suggestions2 = [
    { value: 3, label: 'BEM UI' },
    { value: 4, label: 'BE FIA UI' },
    { value: 5, label: 'BEM FASILKOM UI' },
]

function Kajian() {
    const [selected, setSelected] = useState([])
    const onAdd = useCallback(
        (newTag) => {
            setSelected([...selected, newTag])
        },
        [selected]
    )

    const onDelete = useCallback(
        (tagIndex) => {
            setSelected(selected.filter((_, i) => i !== tagIndex))
        },
        [selected]
    )

    return (
        <div>
            <Layout>
                <h1 className='title'>Form Kajian</h1>
                <Card className='kj-card-container'>
                    <Form.Label className='kj-card-title'>Cover</Form.Label>
                    <Form.Control type="file" placeholder="masih on process yaa" />
                    <br></br>
                    <Form.Label className='kj-card-title'>Judul</Form.Label>
                    <Form.Control type="text" placeholder="Judul kajian" />
                    <br></br>
                    <Form.Label className='kj-card-title'>Link</Form.Label>
                    <Form.Control type="text" placeholder="Link halaman kajian" />
                    <br></br>
                    <Form.Label className='kj-card-title'>Kategori Isu</Form.Label>
                    <ReactTags
                        labelText="Select countries"
                        selected={selected}
                        suggestions={suggestions}
                        onAdd={onAdd}
                        onDelete={onDelete}
                        noOptionsText="No matching countries"
                    />
                    <br></br>
                    <Form.Label className='kj-card-title'>Organisasi</Form.Label>
                    <ReactTags
                        labelText="Select countries"
                        selected={selected}
                        suggestions={suggestions2}
                        onAdd={onAdd}
                        onDelete={onDelete}
                        noOptionsText="No matching countries"
                    />
                    <br></br>




                    <div className="d-grid gap-2" >

                        <Button href="dashboard" className='card-button' style={{ padding: '12px' }}>Submit</Button>
                    </div>
                </Card>
            </Layout>
        </div>
    )
}

export default Kajian