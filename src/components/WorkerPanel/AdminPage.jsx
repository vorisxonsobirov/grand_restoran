/* AdminPage.jsx */

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
    // Ишчилар рўйхатини ўқиш вараклари
    axios.get('http://localhost:5000/users/getWorkers')
      .then(response => {
        setWorkers(response.data.data);
      })
      .catch(error => {
        console.error('Ишчиларни ўқишда хатолик:', error);
      });
  }, []);

  const handleUpdate = () => {
    axios.get(`http://localhost:5000/users/getWorkers`)
      .then(response => {
        setWorkers(response.data.data);
      })
      .catch(error => {
        console.error('Ишчиларни ўқишда хатолик:', error);
        message.error('Ишчи маълумотини ўқиш муваффақиятли ўтказилмади');
      });
  };

  const handleEdit = (workerId) => {
    setSelectedWorkerId(workerId);
    setUpdateModalVisible(true);
  };

  const handleAddWorker = () => {
    setAddModalVisible(true);
  };

  const handleDelete = (workerId) => {
    axios.delete(`http://localhost:5000/users/workerDelete/${workerId}`)
      .then(response => {
        message.success(response.data.message);
        handleUpdate();
      })
      .catch(error => {
        console.error('Ишчи ўчиришда хатолик:', error);
        message.error('Ишчи ўчириш муваффақиятли амалга оширилмади');
      });
  };

  const handleAddSubmit = () => {
    const newWorker = { fullname, password, phone, birthday, type };

    axios.post('http://localhost:5000/users/createworkers', newWorker)
      .then(response => {
        message.success(response.data.message);
        handleUpdate();
        setAddModalVisible(false);
        // Муваффақиятли қўшилган кейинга майдонларнинг қийматларини тозалаш
        setFullname('');
        setPassword('');
        setPhone('');
        setBirthday('');
        setType('');
      })
      .catch(error => {
        console.error('Ишчи қўшишда хатолик:', error);
        message.error('Ишчи қўшиш муваффақиятли амалга оширилмади');
      });
  };

  const columns = [
    {
      title: 'Тўлиқ исм',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Туғилган кун',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'Тур',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Ҳаракат',
      key: 'action',
      render: (text, record) => (
        <div className="worker-actions">
          <Button onClick={() => handleEdit(record._id)}>Таҳрир</Button>
          <Button type="primary" danger ghost onClick={() => handleDelete(record._id)}>Ўчириш</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="admin-container">
      <h1>Администратор саҳифаси</h1>
      <Button type="primary" onClick={handleAddWorker} className="add-worker-button">
        Ишчи қўшиш
      </Button>
      <Table dataSource={workers} columns={columns} className="worker-table" />

      <UpdateWorkerForm
        visible={updateModalVisible}
        setVisible={setUpdateModalVisible}
        workerId={selectedWorkerId}
        onUpdate={handleUpdate}
      />

      <Modal
        title="Ишчи қўшиш"
        visible={addModalVisible}
        onCancel={() => setAddModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setAddModalVisible(false)}>Бекор қилиш</Button>,
          <Button key="submit" type="primary" onClick={handleAddSubmit}>Тасдиқлаш</Button>,
        ]}
      >
        <Form>
          <Form.Item label="Тўлиқ исм">
            <Input value={fullname} onChange={(e) => setFullname(e.target.value)} />
          </Form.Item>
          <Form.Item label="Парол">
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item label="Телефон">
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Item>
          <Form.Item label="Туғилган кун">
            <Input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
          </Form.Item>
          <Form.Item label="Тур">
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
  