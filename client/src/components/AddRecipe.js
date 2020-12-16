import React from 'react';
import { Row, Col, Form, Input, Button, Rate, Typography, Upload, message } from 'antd';
import { PictureTwoTone } from '@ant-design/icons';
import axios from 'axios';

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

function AddRecipe(props) {

  const onFinish = values => {
    const data = {
      "title": values.title,
      "images": values.images,
      "ingredients": values.ingredients,
      "instructions": values.instructions,
      "rating": values.rating,
      "source": values.source,
      "createdOn": Date(),
      "createdBy": 1 // this needs to be dynamic
    }
    axios.post('http://localhost:5000/recipes/add', data)
      .then(res => {
        if(res.data.success) {
          // put in notification of success here
          console.log('Success:', data);
          props.history.push('/recipes?addedRecipe=success');
          message.success('Recipe successfully added!');
        } else {
          // put notification of failure here
          console.log('Failure:', data);
        }
      })
      .catch(err => {
        console.log('error: ', err);
        console.log('data: ', data);
        message.error('Could not save the recipe. Please try again later.');
      })
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
          <Title className="add-recipe-title" level={2}>Add a Recipe</Title>
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
        label="Recipe Title"
        name="title"
        rules={[{ required: true, message:"A title is required for a recipe."}]}
      >
        <Input id="input-title" />
      </Form.Item>
      <Form.Item 
        label="Ingredients"
        name="ingredients"
        rules={[{ required: true, message:"Ingredients are required for a recipe."}]}
      >
        <TextArea id="input-ingredients" />
      </Form.Item>
      <Form.Item 
        label="Instructions"
        name="instructions"
        rules={[{ required: true, message:"Instructions are required for a recipe."}]}
      >
        <TextArea id="input-instructions" />
      </Form.Item>
      <Form.Item
        label="Rating"
        name="rating"
      >
        <Rate id="input-rating" />
      </Form.Item>
      <Form.Item
        label="Source"
        name="source"
      >
        <Input id="input-source" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button id="add-recipe-submit-btn" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      
    </Form>)
}

export default AddRecipe
