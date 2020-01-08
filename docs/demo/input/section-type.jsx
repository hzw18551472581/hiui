import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Input from '../../../components/input'
const rightOptions = ['基础', '默认值', '禁用', '可清除']
const prefix = 'input-type'
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
        />
      )
    }
  }`,
  opt: ['基础']
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
          defaultValue="Input输入框"
        />
      )
    }
  }`,
  opt: ['默认值']
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
          disabled
        />
      )
    }
  }`,
  opt: ['禁用']
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
          defaultValue="Input输入框"
          clearable
        />
      )
    }
  }`,
  opt: ['可清除']
}]

const DemoType = () => (
  <DocViewer
    code={code}
    scope={{ Input }}
    prefix={prefix}
    rightOptions={rightOptions}
  />
)
export default DemoType
