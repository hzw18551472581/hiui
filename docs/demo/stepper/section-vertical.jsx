import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Stepper from '../../../components/stepper'
import Icon from '../../../components/icon'
const prefix = 'stepper-vertical'
const desc = '竖直方向只需传入属性 placement="vertical"'
const rightOptions = ['基础', '图标']

const code = [{
  code: `import React from 'react'
  import Icon from '@hi-ui/hiui/es/icon'
  import Stepper from '@hi-ui/hiui/es/stepper'\n
  class Demo extends React.Component {
    render() {
      const list = [
        {
          title: '账号信息',
          content: '请输入账号信息',
        },
        {
          title: '邮箱激活',
          content: '请输入邮箱',
        },
        {
          title: '信息登记',
          content: '请输入个人信息',
        },
      ]
  
      return (
        <div
          style={{height: '500px', width: '130px'}}
        >
          <Stepper
            data={list}
            current={1}
            placement='vertical'
          />
        </div>
      )
    }
  }`,
  opt: ['基础']
}, {
  code: `import React from 'react'
  import Icon from '@hi-ui/hiui/es/icon'
  import Stepper from '@hi-ui/hiui/es/stepper'\n
  class Demo extends React.Component {
    render() {
      const list = [
        {
          title: '账号信息',
          content: '请输入账号信息',
          icon: <Icon name='user' />,
        },
        {
          title: '邮箱激活',
          content: '请输入邮箱',
          icon: <Icon name='time' />,
        },
        {
          title: '信息登记',
          content: '请输入个人信息',
          icon: <Icon name='list' />,
        },
      ]
  
      return (
        <div
          style={{ height: 500 }}
        >
          <Stepper
            data={list}
            current={1}
            placement='vertical'
          />
        </div>
      )
    }
  }`,
  opt: ['图标']
}]

const DemoVertical = () => <DocViewer code={code} scope={{ Stepper, Icon }} prefix={prefix} desc={desc} rightOptions={rightOptions} />
export default DemoVertical
