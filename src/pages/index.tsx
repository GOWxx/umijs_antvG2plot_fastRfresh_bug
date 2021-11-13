// @refresh reset
import { Line } from '@antv/g2plot';
import { useEffect } from 'react';

export default function IndexPage() {
  useEffect(() => {
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
    ];
    // 更改 new Line() 配置项里的任何内容，保存并重新编译，页面渲染很会怪异
    const line = new Line('container', {
      data,
      xField: 'year',
      yField: 'value',
      // yAxis: {},
    });
    line.render();
  }, []);
  return (
    <div>
      <div id="container"></div>
    </div>
  );
}
