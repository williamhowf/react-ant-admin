import React, {useEffect, useState} from 'react';
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider
} from 'antd';
import './App.less';

const { Option } = Select;
const { Title } = Typography;

// public function when import App.js
function myAlert(num) {
   console.log('hello world clicked=>',num);
};

// public function when import App.js
function getRandomString(length) {
  //random function
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result; //return random
}

const App = () => {
  //initliaze variable [getValue, setValue] => const varObj { getter; setter; }
  const [string,setString] = useState(''); // initialize count as string with empty string
  const [count,setCount] = useState(0); // initialize count as integer with zero
  
  // local function
  const increaseCount = () => {
    setCount(count => count + 1);
    myAlert(count);
  }

  const addString = () => {
    setString(string => string + getRandomString(1));
    console.log('string value=>',string);
    console.log('string length', string.length);
  }

  const printRandom = () => {
    console.log('random string=>',getRandomString(18));
  }

  const printLog = () => {
    console.log('on-load effect triggered.');
  }

  //on-load will trigger this
  useEffect(() => {
    printLog();
    setCount(count => count+1);
  }, []);

  // if the function component doesn't have any other functions, 'return' keyword can remove and return sample code as below. 
  /* sample code:
    const App = () => (
      <>
        <section>...
        <form>...
        <div>...
      </>
    );
  */
  return ( 
  <>
    <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
      <Space align="start">
        <img
          style={{width: 40, height: 40 }}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="Ant Design"
        />
        <Title level={2} style={{ marginBottom: 0 }}>
          Ant Design
        </Title>
      </Space>
    </section>
    <Divider style={{ marginBottom: 60 }}>Form</Divider>
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
      <Form.Item label="数字输入框">
        <InputNumber min={1} max={10} defaultValue={3} />
        <span className="ant-form-text"> 台机器</span>
        <a href="https://ant.design">链接文字</a>
      </Form.Item>
      <Form.Item label="开关">
        <Switch defaultChecked />
      </Form.Item>
      <Form.Item label="滑动输入条">
        <Slider defaultValue={70} />
      </Form.Item>
      <Form.Item label="选择器">
        <Select defaultValue="lucy" style={{ width: 192 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" disabled>disabled</Option>
          <Option value="yiminghe">yiminghe</Option>
          <Option value="william">william</Option>
        </Select>
      </Form.Item>
      <Form.Item label="日期选择框">
        <DatePicker />
      </Form.Item>
      <Form.Item label="日期范围选择框">
        <DatePicker.RangePicker />
      </Form.Item>
      <Form.Item label="评分">
        <Rate defaultValue={5} />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button>
            Cancel
          </Button>
          <Button type="ghost">ghost</Button>
          <Button type="dashed" onClick={addString}>dashed</Button>
          <Button type="link" onClick={printRandom}>link</Button>
          <Button type="text" onClick={increaseCount}>text</Button>
        </Space>
      </Form.Item>
    </Form>
  </>
  )
};

export default App;