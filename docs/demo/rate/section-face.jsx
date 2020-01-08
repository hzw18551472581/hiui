import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Form from '../../../components/form/index'
import FormItem from '../../../components/form/Item'
import Rate from '../../../components/rate'
const prefix = 'rate-face'
const desc = `使用表情后将不可自定义数量，不可定义半星      运用图标直观表达评级结果的优劣`
const code = `import React from 'react'
import Rate from '@hi-ui/hiui/es/rate'
import Form from '@hi-ui/hiui/es/form/index'
import FormItem from '@hi-ui/hiui/es/form/item'
class Demo extends React.Component {
  constructor() {
    super()
    this.tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful']
  }

  render() {
    return (
      <Form labelWidth="80" labelPosition="left">
        <FormItem label="基础">
          <Rate defaultValue={3} useEmoji />
        </FormItem>
        <FormItem label="提示">
          <Rate defaultValue={3} useEmoji tooltips={this.tooltips} />
        </FormItem>
        <FormItem label="禁用样式">
          <Rate defaultValue={0} useEmoji disabled />
        </FormItem>
        <FormItem label="只读样式">
          <Rate defaultValue={3} useEmoji disabled />
        </FormItem>
        <FormItem label="禁止清除">
          <Rate defaultValue={3} useEmoji clearable={false} />
        </FormItem>
      </Form>
    )
  }
}`
const DemoBase = () => (
  <DocViewer
    code={code}
    scope={{ Form, FormItem, Rate }}
    prefix={prefix}
    desc={desc}
  />
)
export default DemoBase
