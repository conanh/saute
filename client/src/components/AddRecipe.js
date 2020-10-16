import React from 'react';
import { Row, Col, Form, Input, Button, Rate, Typography, Upload, message } from 'antd';
import { PictureTwoTone } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;
const { Dragger } = Upload;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const draggerProps = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function AddRecipe() {

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };  

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row>
        <Col span={8} offset={8}>
          <Title level={2}>Add a Recipe</Title>
        </Col>
      </Row>
      <Row gutter={[0,24]}>
        <Col span={8} offset={8}>
          <Dragger {...draggerProps}>
            <p className="ant-upload-drag-icon">
              <PictureTwoTone />
            </p>
            <p className="ant-upload-text">Click or drag file(s) to this area to upload</p>
          </Dragger>      
        </Col>
      </Row>
      
      <Form.Item 
        className="title"
        label="Recipe Title"
        name="title"
        rules={[{ required: true, message:"A title is required for a recipe."}]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        className="ingredients"
        label="Ingredients"
        name="ingredients"
        rules={[{ required: true, message:"Ingredients are required for a recipe."}]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item 
        className="instructions"
        label="Instructions"
        name="instructions"
        rules={[{ required: true, message:"Instructions are required for a recipe."}]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item 
        className="rating"
        label="Rating"
        name="rating"
      >
        <Rate />
      </Form.Item>
      <Form.Item 
        className="source"
        label="Source"
        name="source"
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      
    </Form>)
}

export default AddRecipe
