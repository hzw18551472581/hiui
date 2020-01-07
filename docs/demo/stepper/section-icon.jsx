import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Stepper from '../../../components/stepper'
import Icon from '../../../components/icon'
import Tooltip from '../../../components/tooltip'
const desc = '每个步骤可用图标明确表示含义，带来丰富生动的效果'
const prefix = 'stepper-icon'
const rightOptions = ['上下结构', '左右结构']

const code = [{
  code: `import React from 'react'
  import Icon from '@hi-ui/hiui/es/icon'
  import Stepper from '@hi-ui/hiui/es/stepper'
  import Tooltip from '@hi-ui/hiui/es/tooltip'\n
  class Demo extends React.Component {
    render() {
      const list = [
        {
          title: '账号信息',
          content: '请输入账号信息',
          icon: <Icon name='user' />
        },
        {
          title: '邮箱激活',
          content: '请输入邮箱',
          icon: <Tooltip title='邮箱激活' placement='top' ><Icon name='time' /></Tooltip>
        },
        {
          title: '信息登记',
          content: '请输入个人信息',
          icon: <Icon name='list' />
        },
      ]
  
      return (
        <div>
          <Stepper
            data={list}
            current={1}
            itemLayout='vertical'
          />
        </div>
      )
    }
  }`,
  opt: ['上下结构']
}, {
  code: `import React from 'react'
  import Icon from '@hi-ui/hiui/es/icon'
  import Stepper from '@hi-ui/hiui/es/stepper'\n
  class Demo extends React.Component {
    render() {
      const list = [
        {
          title: '账号信息',
          icon: <Icon name='user' />,
        },
        {
          title: '邮箱激活',
          icon: <Icon name='time' />
        },
        {
          title: '信息登记',
          icon: <Icon name='list' />
        },
      ]
  
      return (
        <Stepper
          data={list}
          current={1}
        />
      )
    }
  }`,
  opt: ['左右结构']
}]
const DemoIcon = () => (
  <DocViewer code={code} scope={{ Stepper, Icon, Tooltip }} prefix={prefix} desc={desc} rightOptions={rightOptions} />
)
export default DemoIcon
