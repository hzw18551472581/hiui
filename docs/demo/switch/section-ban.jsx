import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Button from '../../../components/button'
import Switch from '../../../components/switch'
import Icon from '../../../components/icon'
const prefix = 'switch-ban'
const code = `
import React from 'react'
import Switch from '@hi-ui/hiui/es/switch'
import Button from '@hi-ui/hiui/es/button'\n
class Demo extends React.Component { 
  render () {
    return (
        <div>
        <Switch content={['ON', 'OFF']} onChange={() => console.log('change')} checked disabled/>
        <br/>
        <br/>
        <Switch content={['ON', 'OFF']} onChange={() => console.log('change')} disabled/>
        </div>
    )
  }
}`

const DemoBan = () => (
  <DocViewer
    code={code}
    scope={{ Button, Switch, Icon }}
    prefix={prefix}
  />
)
export default DemoBan
