import { useEffect, useState } from 'react'
import axios from 'axios'
import { Modal } from 'antd'
import TableUsers from './TableUsers'
import ModalFormUser from './ModalFormUser'
import SearchBox from '../SearchBox'
import { SearchContainer, ButtonCreate } from './styles'

const DEFAULT_USER = {
  name: '',
  country: '',
  countryCode: '',
  countryFlag: '',
  population: 0,
}

const Element = () => {
  const [formData, setFormData] = useState(DEFAULT_USER)
  const [dataSource, setDataSource] = useState([])
  const [open, setOpen] = useState(false)
  const [itemLoading, setItemLoading] = useState(false)
  const [tableLoading, setTableLoading] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    setTableLoading(true)

    axios
      .get('https://6401dc8a0a2a1afebef3bf4b.mockapi.io/users')
      .then((res) => {
        setDataSource(res.data)
        setTableLoading(false)
      })
  }

  const onCreate = () => {
    setFormData(DEFAULT_CITY)
    setOpen(true)
  }

  const onEdit = (id) => {
    setItemLoading(true)

    axios
      .get(`https://6401dc8a0a2a1afebef3bf4b.mockapi.io/users/${id}`)
      .then((res) => {
        setFormData(res.data)
        setItemLoading(false)
        setOpen(true)
      })
  }

  const onDelete = (id) => {
    Modal.confirm({
      title: 'Xóa dữ liệu này?',
      content: 'Dữ liệu sẽ bị mất vĩnh viễn.',
      onOk() {
        setItemLoading(true)

        axios
          .delete(`https://6401dc8a0a2a1afebef3bf4b.mockapi.io/users/${id}`)
          .then((res) => {
            setItemLoading(false)
            fetchData()
          })
      },
    })
  }

  const onSubmit = (id, data) => {
    setSubmitLoading(true)

    if (id) {
      axios
        .put(`https://6401dc8a0a2a1afebef3bf4b.mockapi.io/users/${id}`, data)
        .then((res) => {
          setSubmitLoading(false)
          setFormData(DEFAULT_CITY)
          setOpen(false)
          fetchData()
        })
    } else {
      axios
        .post('https://6401dc8a0a2a1afebef3bf4b.mockapi.io/users', data)
        .then((res) => {
          setSubmitLoading(false)
          setFormData(DEFAULT_CITY)
          setOpen(false)
          fetchData()
        })
    }
  }

  return (
    <div>
      <SearchContainer>
        <SearchBox />

        <ButtonCreate onClick={onCreate}>New User</ButtonCreate>
      </SearchContainer>

      <TableUsers
        loading={tableLoading}
        itemLoading={itemLoading}
        dataSource={dataSource}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <ModalFormUser
        loading={submitLoading}
        open={open}
        setOpen={setOpen}
        onSubmit={onSubmit}
        formData={formData}
      />
    </div>
  )
}

export default Element
