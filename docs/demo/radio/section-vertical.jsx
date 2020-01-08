import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Radio from '../../../components/radio'
const prefix = 'btn-placement'
const code = `import React from 'react'
import Radio from '@hi-ui/hiui/es/radio'\n
class Demo extends React.Component {
  constructor() {
    super()
    this.list = [{
      id: 0,
      content: '手机类'
    }, {
      id: 1,
      content: '电脑类',
      disabled: true
    }, {
      id: 2,
      content: '生活类'
    }, {
      id: 3,
      content: '其它'
    }]
  }
  render() {
    return (
      <Radio.Group
        data={this.list}
        defaultValue={0}
        placement='vertical'
        onChange={(data) => console.log(data)}
      />
    )
  }
}`
const DemoVertical = () => (
  <DocViewer
    code={code}
    scope={{ Radio }}
    prefix={prefix}
  />
)
export default DemoVertical
