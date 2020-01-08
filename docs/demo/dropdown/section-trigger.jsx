import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Dropdown from '../../../components/dropdown'
const prefix = 'dropdown-trigger'
const rightOptions = ['左键单击', '悬停', '右键单击']
const desc = '通过 trigger 属性切换菜单触发方式'

const code = [

  {
    code: `import React from 'react'
import Icon from '@hi-ui/hiui/es/icon'
import Dropdown from '@hi-ui/hiui/es/dropdown'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      list: [{
        title: '菜单一',
      }, {
        title: '菜单二'
      }, {
        title: '菜单三'
      }, {
        title: '-'
      }, {
        title: '链接一',
        href: 'https://www.mi.com',
        disabled: true
      }]
    }
  }
  render () {
    const { list } = this.state
    return (
      <Dropdown
        data={list}
        type='button'
        trigger='click'
        title='左键单击'
      />
    )
  }
}`,
    opt: ['左键单击']
  },
  {
    code: `import React from 'react'
import Icon from '@hi-ui/hiui/es/icon'
import Dropdown from '@hi-ui/hiui/es/dropdown'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      list: [{
        title: '菜单一',
      }, {
        title: '菜单二'
      }, {
        title: '菜单三'
      }, {
        title: '-'
      }, {
        title: '链接一',
        href: 'https://www.mi.com',
        disabled: true
      }]
    }
  }
  render () {
    const { list } = this.state
    return (
      <Dropdown
        data={list}
        trigger='hover'
        title='鼠标悬停'
        type='button'
      />
    )
  }
}`,
    opt: ['悬停']
  },
  {
    code: `import React from 'react'
import Icon from '@hi-ui/hiui/es/icon'
import Dropdown from '@hi-ui/hiui/es/dropdown'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      list: [{
        title: '菜单一',
      }, {
        title: '菜单二'
      }, {
        title: '菜单三'
      }, {
        title: '-'
      }, {
        title: '链接一',
        href: 'https://www.mi.com',
        disabled: true
      }]
    }
  }
  render () {
    const { list } = this.state
    return (
      <Dropdown
        data={list}
        type='button'
        trigger='contextmenu'
        title='右键单击'
      />
    )
  }
}`,
    opt: ['右键单击']
  },
  {
    code: `import React from 'react'
import Icon from '@hi-ui/hiui/es/icon'
import Dropdown from '@hi-ui/hiui/es/dropdown'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      list: [{
        title: '菜单一',
      }, {
        title: '菜单二'
      }, {
        title: '菜单三'
      }, {
        title: '-'
      }, {
        title: '链接一',
        href: 'https://www.mi.com',
        disabled: true
      }]
    }
  }
  render () {
    const { list } = this.state
    return (
      <Dropdown
        data={list}
        trigger={['click', 'contextmenu']}
        type='button'
        title='左键或右键单击'
      />
    )
  }
}`,
    opt: ['多种组合']
  }
]

const DemoBase = () => (
  <DocViewer
    code={code}
    scope={{ Dropdown }}
    prefix={prefix}
    rightOptions={rightOptions}
    desc={desc}
  />
)
export default DemoBase
