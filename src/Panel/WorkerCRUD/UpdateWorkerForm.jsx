// UpdateWorkerForm.jsx

import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, message, Select } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const { Option } = Select;

const UpdateWorkerForm = ({ visible, setVisible, workerId, onUpdate, workerList }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm(); // Добавьте эту строку

  useEffect(() => {
    const fetchWorkerData = async () => {
      try {
        const userUpdate = workerList.find((item) => item._id === workerId);
        form.setFieldsValue({
          fullname: userUpdate.fullname,
          phone: userUpdate.phone,
          birthday: userUpdate.birthday,
          type: userUpdate.type,
        });
      } catch (error) {
        console.error('Ошибка при получении данных о сотруднике:', error);
        message.error('Не удалось получить данные о сотруднике');
      }
    };
  
    if (visible && workerId) {
      fetchWorkerData();
    }
  }, [visible, workerId, form]);
  

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = async values => {
    setLoading(true);
    try {
      await axios.put(`https://restorant-backend.vercel.app/users/workerEdit/${workerId}`, values);
      setLoading(false);
      message.success('Worker updated successfully');
      onUpdate();
      setVisible(false);
    } catch (error) {
      setLoading(false);
      console.error('Error updating worker:', error);
      message.error('Failed to update worker');
    }
  };

  return (
    <Modal
      title="Update Worker"
      visible={visible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        name="update_worker"
        onFinish={onFinish}
      >
        <Form.Item
          name="fullname"
          label="Full Name"
          rules={[{ required: true, message: 'Please input full name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: 'Please input phone number' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="birthday"
          label="Birthday"
          rules={[{ required: true, message: 'Please input birthday' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: 'Please select worker type' }]}
        >
          <Select placeholder="Select worker type">
            <Option value="admin">Admin</Option>
            <Option value="manager">Manager</Option>
            <Option value="waiter">Waiter</Option>
            <Option value="cook">Cook</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateWorkerForm;
