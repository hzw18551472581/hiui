import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Breadcrumb from '../../../components/breadcrumb'
const prefix = 'alert-base'
const desc = '明确访问路径的每一个节点'
const code = `import React from 'react'
import Breadcrumb from '@hi-ui/hiui/es/breadcrumb'\n
class Demo extends React.Component {
  render () {
    const data = [{
      content: '首页',
      icon: 'left',
      path: '/home'
    }, {
      content: '产品类',
      icon: 'document',
      path: '/product'
    }, {
      icon: 'component',
      path: '/phone'
    }, {
      content: '红米系列',
      path: '/redmi'
    }, {
      content: 'Note7',
      path: '/note7'
    }]
    return (
      <div>
        <Breadcrumb data={data} separator='/'/>
      </div>
    )
  }
}`

const DemoBase = () => <DocViewer code={code} scope={{ Breadcrumb }} prefix={prefix} desc={desc} />
export default DemoBase
