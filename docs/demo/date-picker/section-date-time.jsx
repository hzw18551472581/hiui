import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import DatePicker from '../../../components/date-picker'
const prefix = 'date-picker-date-time'
const code = `import React from 'react'
import DatePicker from '@hi-ui/hiui/es/date-picker'\n
class Demo extends React.Component {
  render () {
    return (
      <DatePicker
        value={new Date()}
        showTime={true}
        format='yyyy-MM-dd HH:mm:ss'
        onChange={(date, dateStr) => {console.log('onChange', date, dateStr)}}
      />
    )
  }
}`

const DemoDateTime = () => (
  <DocViewer
    code={code}
    scope={{ DatePicker }}
    prefix={prefix}
  />
)
export default DemoDateTime
