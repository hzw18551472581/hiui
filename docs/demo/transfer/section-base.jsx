import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Transfer from '../../../components/transfer'
const prefix = 'transfer-base'
const desc = '源集合中的数据可全部展示'
const code = `import React from 'react'
import Transfer from '@hi-ui/hiui/es/transfer'\n
class Demo extends React.Component {
  constructor () {
    super()
    this.state = {
      datas: this.randomDatas(),
      targetKeys: [2, 3]
    }
  }
  randomDatas () {
    const arr = []
    for (let i=1;i<16; i++) {
      arr.push({
        id: i,
        content: '选项'+i,
        disabled: i%3 === 0
      })
    }
    return arr
  }
  onChange (movedKeys) {
    this.setState({
      targetKeys: movedKeys
    })
  }
  render () {
    return (
      <Transfer
        mode='basic'
        emptyContent={['空', '无数据']}
        title={['源','目的']}
        targetKeys={this.state.targetKeys}
        data={this.state.datas}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}`

const DemoBase = () => (
  <DocViewer
    code={code}
    scope={{ Transfer }}
    prefix={prefix}
    desc={desc}
  />
)
export default DemoBase
