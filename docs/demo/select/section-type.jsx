import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Select from '../../../components/select'
const prefix = 'alert-autoClose'
const rightOptions = ['正常', '受控']
const desc = '展示从多个收起的备选项中选出的一个选项'
const code = [
  {
    code: `import React from 'react'
import Select from '@hi-ui/hiui/es/select'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      singleList: [
        { title:'电视', id:'3', disabled: true },
        { title:'手机', id:'2' },
        { title:'笔记本', id:'4', disabled: true },
        { title:'生活周边', id:'5' },
        { title:'办公', id:'6' },
      ]
    }
  }

  render () {
    const { value, singleList } = this.state
    return (
      <Select
        type='single'
        clearable
        style={{ width: 200 }}
        data={singleList}
        placeholder='请选择'
      />
    )
  }
}`,
    opt: ['正常']
  },
  {
    code: `import React from 'react'
import Select from '@hi-ui/hiui/es/select'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '3',
      singleList: [
        { title:'电视', id:'3', disabled: true },
        { title:'手机', id:'2' },
        { title:'笔记本', id:'4', disabled: true },
        { title:'生活周边', id:'5' },
        { title:'办公', id:'6' },
      ]
    }
  }

  render () {
    const { value, singleList } = this.state
    return (
      <Select
        type='single'
        clearable={false}
        style={{ width: 200 }}
        data={singleList}
        value={value}
        onChange={ids => {
          this.setState({
            value: ids[0]
          })
        }}
      />
    )
  }
}`,
    opt: ['受控']
  }
]
const DemoType = () => (
  <DocViewer
    code={code}
    scope={{ Select }}
    prefix={prefix}
    rightOptions={rightOptions}
    desc={desc}
  />
)
export default DemoType
