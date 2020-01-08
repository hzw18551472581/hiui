import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Input from '../../../components/input'
const rightOptions = ['手机号码', '身份证号', '邮箱', '银行卡号', '浮点数']
const prefix = 'input-state'
const code = [{
  code: `import React from 'react'
  import Grid from '@hi-ui/hiui/es/grid'
  import Radio from '@hi-ui/hiui/es/radio'
  import Input from '@hi-ui/hiui/es/input'\n
  class Demo extends React.Component {
    render() {
      return (
        <Input
          style={{ width: 250 }}
          placeholder='请输入'
          type='tel'
        />
      )
    }
  }`,
  opt: ['手机号码']
}, {
  code: `import React from 'react'
  import Grid from '@hi-ui/hiui/es/grid'
  import Radio from '@hi-ui/hiui/es/radio'
  import Input from '@hi-ui/hiui/es/input'\n
  class Demo extends React.Component {
    render() {
      return (
        <Input
          style={{ width: 250 }}
          placeholder='请输入'
          type='id'
        />
      )
    }
  }`,
  opt: ['身份证号']
}, {
  code: `import React from 'react'
  import Grid from '@hi-ui/hiui/es/grid'
  import Radio from '@hi-ui/hiui/es/radio'
  import Input from '@hi-ui/hiui/es/input'\n
  class Demo extends React.Component {
    render() {
      return (
        <Input
          style={{ width: 250 }}
          placeholder='请输入'
          type='email'
        />
      )
    }
  }`,
  opt: ['邮箱']
}, {
  code: `import React from 'react'
  import Grid from '@hi-ui/hiui/es/grid'
  import Radio from '@hi-ui/hiui/es/radio'
  import Input from '@hi-ui/hiui/es/input'\n
  class Demo extends React.Component {
    render() {
      return (
        <Input
          style={{ width: 250 }}
          placeholder='请输入'
          type='card'
        />
      )
    }
  }`,
  opt: ['银行卡号']
},
{
  code: `import React from 'react'
  import Grid from '@hi-ui/hiui/es/grid'
  import Radio from '@hi-ui/hiui/es/radio'
  import Input from '@hi-ui/hiui/es/input'\n
  class Demo extends React.Component {
    render() {
      return (
        <Input
          style={{ width: 250 }}
          placeholder='请输入'
          type='amount'
        />
      )
    }
  }`,
  opt: ['浮点数']
}]

const DemoState = () => (
  <DocViewer
    code={code}
    scope={{ Input }}
    prefix={prefix}
    rightOptions={rightOptions}
  />
)
export default DemoState
