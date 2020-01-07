import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Icon from '../../../components/icon'
const prefix = 'icon-base'
const code = `import React from 'react'
import Icon from '@hi-ui/hiui/es/icon'\n
class Demo extends React.Component {
  render () {
    return (
      <div>
        <Icon name="edit" style={{fontSize: '24px'}} />
        <Icon name="building" style={{fontSize: '24px'}} />
        <Icon name="check-circle-o" style={{fontSize: '24px'}} />
        <Icon name="qr" style={{fontSize: '24px'}} />
      </div>
    )
  }
}`

const DemoBase = () => <DocViewer code={code} scope={{ Icon }} prefix={prefix} />
export default DemoBase
