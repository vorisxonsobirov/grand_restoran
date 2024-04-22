// AdminPage.jsx

import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Form, Input, Select, message } from 'antd';
import axios from 'axios';
import UpdateWorkerForm from './UpdateWorkerForm';
import './style.css'; 

const { Option } = Select;

const AdminPage = () => {
  const [workers, setWorkers] = useState([]);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [selectedWorkerId, setSelectedWorkerId] = useState(null);
  const [addModalVisible, setAddModalVisible] = useState(false);

  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    axios.get('https://restorant-backend.vercel.app/users/getWorkers')
      .then(response => {
        setWorkers(response.data.data);
      })
      .catch(error => {
        console.error('Ошибка при получении списка работников:', error);
      });
  }, []);

  const handleUpdate = () => {
    axios.get(`https://restorant-backend.vercel.app/users/getWorkers`)
      .then(response => {
        setWorkers(response.data.data);
      })
      .catch(error => {
        console.error('Ошибка при получении списка работников:', error);
        message.error('Не удалось получить данные работника');
      });
  };

  const handleEdit = (workerId) => {
    if (workerId) {
      setSelectedWorkerId(workerId);
      setUpdateModalVisible(true);
    } else {
      console.error('Ошибка: Недопустимый ID работника');
    }
  };

  const handleAddWorker = () => {
    setAddModalVisible(true);
  };

  const handleDelete = (workerId) => {
    axios.delete(`https://restorant-backend.vercel.app/users/workerDelete/${workerId}`)
      .then(response => {
        message.success(response.data.message);
        handleUpdate();
      })
      .catch(error => {
        console.error('Ошибка при удалении работника:', error);
        message.error('Не удалось удалить работника');
      });
  };

  const handleAddSubmit = () => {
    const newWorker = { fullname, password, phone, birthday, type };

    axios.post('https://restorant-backend.vercel.app/users/createworkers', newWorker)
      .then(response => {
        message.success(response.data.message);
        handleUpdate();
        setAddModalVisible(false);
        setFullname('');
        setPassword('');
        setPhone('');
        setBirthday('');
        setType('');
      })
      .catch(error => {
        console.error('Ошибка при добавлении работника:', error);
        message.error('Не удалось добавить работника');
      });
  };

  const columns = [
    {
      title: 'ФИО',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Дата рождения',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'Должность',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Действие',
      key: 'action',
      render: (text, record) => (
        <>
          <Button onClick={() => handleEdit(record._id)}>Редактировать</Button>
          <Button type="primary" danger ghost onClick={() => handleDelete(record._id)}>Удалить</Button>
        </>
      ),
    },
  ];

  return (
    <div className="admin-container">
      <h1>Страница администратора</h1>
      <Button type="primary" onClick={handleAddWorker} className="add-worker-button">
        Добавить работника
      </Button>
      <Table dataSource={workers} columns={columns} className="worker-table" />

      <UpdateWorkerForm
        visible={updateModalVisible}
        setVisible={setUpdateModalVisible}
        workerId={selectedWorkerId}
        onUpdate={handleUpdate}
      />

      <Modal
        title="Добавить работника"
        visible={addModalVisible}
        onCancel={() => setAddModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setAddModalVisible(false)}>Отмена</Button>,
          <Button key="submit" type="primary" onClick={handleAddSubmit}>Подтвердить</Button>,
        ]}
      >
        <Form>
          <Form.Item label="ФИО">
            <Input value={fullname} onChange={(e) => setFullname(e.target.value)} />
          </Form.Item>
          <Form.Item label="Пароль">
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item label="Телефон">
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Item>
          <Form.Item label="Дата рождения">
            <Input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
          </Form.Item>
          <Form.Item label="Должность">
            <Select value={type} onChange={(value) => setType(value)}>
              <Option value="admin">Администратор</Option>
              <Option value="manager">Менеджер</Option>
              <Option value="waiter">Официант</Option>
              <Option value="cook">Повар</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminPage;
