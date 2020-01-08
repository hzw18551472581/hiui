import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Button from '../../../components/button'
const prefix = 'button-link'
const rightOptions = ['正常', '禁用']
const code = [
  {
    code: `import React from 'react'
import Button from '@hi-ui/hiui/es/button'\n
class Demo extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Button type="primary" appearance="link">编辑</Button>
        <Button type="default" appearance="link">查看更多</Button>
        <Button type="success" appearance="link">复制链接到微信</Button>
        <Button type="danger" appearance="link">删除</Button>
        <Button type="line" appearance="link" icon="edit" />
        <Button type="line" appearance="link" icon="down">展开更多</Button>
        <Button type="line" appearance="link" icon="plus">新增筛选项目</Button>
      </React.Fragment>
    )
  }
}`,
    opt: ['正常']
  },
  {
    code: `import React from 'react'
import Button from '@hi-ui/hiui/es/button'\n
class Demo extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Button type="primary" appearance="link">编辑</Button>
        <Button type="default" appearance="link">查看更多</Button>
        <Button type="success" appearance="link">复制链接到微信</Button>
        <Button type="danger" appearance="link">删除</Button>
        <Button type="line" appearance="link" icon="edit" />
        <Button type="line" appearance="link" icon="down">展开更多</Button>
        <Button type="line" appearance="link" icon="plus">新增筛选项目</Button>
      </React.Fragment>
    )
  }
}`,
    opt: ['禁用']
  }
]

const DemoLink = () => (
  <DocViewer
    code={code}
    scope={{ Button }}
    prefix={prefix}
    rightOptions={rightOptions}
  />
)
export default DemoLink
