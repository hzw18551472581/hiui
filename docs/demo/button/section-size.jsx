import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Button from '../../../components/button'
const prefix = 'button-size'
const leftOptions = ['大按钮', '小按钮']
const rightOptions = ['正常', '禁用']
const desc = '不同的展示区域选择相应尺寸的按钮'
const code = `import React from 'react'
import Button from '@hi-ui/hiui/es/button'\n
class Demo extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Button type='primary' size="large">大号按钮</Button>
        <Button type='primary' >中号按钮</Button>
        <Button type='primary' size="small">小号按钮</Button>
      </React.Fragment>
    )
  }
}`

const DemoAux = () => (
  <DocViewer
    code={code}
    scope={{ Button }}
    leftOptions={leftOptions}
    prefix={prefix}
    rightOptions={rightOptions}
    desc={desc}
  />
)
export default DemoAux
