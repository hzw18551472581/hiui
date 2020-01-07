import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Form from '../../../components/form/index'
import Input from '../../../components/input'
import Button from '../../../components/button'
import Grid from '../../../components/grid'
const prefix = 'form-row'
const rightOptions = ['上下结构', '左右结构']
const desc = '上下：表单项对应的标题长度较长，表单项较    左右：屏幕分辨率较大，表单项较多且对应标'
const code = [{
  code: `import React from 'react'
  import { Form, Input, Grid } from '@hi-ui/hiui'
  class Demo extends React.Component {
    render (){
      const FormItem = Form.Item
      const Row = Grid.Row
      const Col = Grid.Col
      return (
        <Form placement='vertical' labelPlacement='top'>
          <Row gutter={true}>
            <Col span={10}>
              <FormItem label='邮箱' >
                <Input placeholder={'请输入邮箱'} />
              </FormItem>
            </Col>
            <Col span={10} offse={2}>
              <FormItem label='密码' >
                <Input type='password' placeholder={'请输入密码'} />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={true} style={{marginTop:0}}>
            <Col span={10}>
              <FormItem label='确认密码'>
                <Input type='password' placeholder={'请再次输入密码'} />
              </FormItem>
            </Col>
            <Col span={10} offse={2}>
              <FormItem label='验证码'>
                <Input placeholder={'请输入验证码'} />
              </FormItem>
            </Col>
          </Row>
          <Row style={{marginTop:0}}>
            <FormItem>
              <Button.Group>
                <Button type="line" style={{marginRight:'20px'}}>重置</Button>
                <Button type="primary">确定</Button>
              </Button.Group>
            </FormItem>
          </Row>
        </Form>
      )
    }
  }`,
  opt: ['上下结构']
}, {
  code: `import React from 'react'
  import { Form, Input, Grid } from '@hi-ui/hiui'
  class Demo extends React.Component {
    render (){
      const FormItem = Form.Item
      const Row = Grid.Row
      const Col = Grid.Col
      return (
        <Form placement='vertical' labelPlacement='left'>
          <Row gutter={true}>
            <Col span={10}>
              <FormItem label='邮箱'  labelWidth='100px'>
                <Input placeholder={'邮箱'} />
              </FormItem>
            </Col>
            <Col span={10} offse={2}>
              <FormItem label='密码'  labelWidth='100px'>
                <Input type='password' placeholder={'密码'} />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={true} style={{marginTop:0}}>
            <Col span={10}>
              <FormItem label='确认密码' labelWidth='100px'>
                <Input type='password' placeholder={'确认密码'} />
              </FormItem>
            </Col>
            <Col span={10} offse={2}>
              <FormItem label='验证码' labelWidth='100px'>
                <Input placeholder={'验证码'} />
              </FormItem>
            </Col>
          </Row>
          <Row style={{marginTop:0}}>
            <FormItem>
              <Button.Group>
                <Button type="line" style={{marginLeft:'100px',marginRight:'20px'}}>重置</Button>
                <Button type="primary">确定</Button>
              </Button.Group>
            </FormItem>
          </Row>
        </Form>
      )
    }
  }`,
  opt: ['左右结构']
}]

const DemoRow = () => (
  <DocViewer
    code={code}
    scope={{ Form, Button, Input, Grid }}
    prefix={prefix}
    rightOptions={rightOptions}
    desc={desc}
  />
)
export default DemoRow
