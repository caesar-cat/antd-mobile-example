import React, { PureComponent } from 'react';
import F2 from '@antv/f2';
F2.Global.pixelRatio = window.devicePixelRatio;

export default class Chart extends PureComponent {

  componentDidMount() {
    this.renderChart()
  }

  componentWillReceiveProps(nextProps) {
   
  }

  componentWillUnmount() {
  
  }

  resize() {
   
  }

  handleRef = (n) => {
    this.node = n;
  }

  renderChart() {
    const data = [
        { time: '2016-08-08 00:00:00', tem: 10 },
        { time: '2016-08-08 00:10:00', tem: 22 },
        { time: '2016-08-08 00:30:00', tem: 20 },
        { time: '2016-08-09 00:35:00', tem: 26 },
        { time: '2016-08-09 01:00:00', tem: 20 },
        { time: '2016-08-09 01:20:00', tem: 26 },
        { time: '2016-08-10 01:40:00', tem: 28 },
        { time: '2016-08-10 02:00:00', tem: 20 },
        { time: '2016-08-10 02:20:00', tem: 28 }
    ]
    console.log(this.node)
    const chart = new F2.Chart({
        el: this.node
    });

    const defs = {
        time: {
            type: 'timeCat',
            mask: 'MM/DD',
            tickCount: 3,
            range: [ 0, 1 ]
        },
        tem: {
            tickCount: 5,
            min: 0
        }
    };

    chart.axis('tem', {
        label: {
          fontSize: 14
        }
      });
    chart.axis('time', {
        label: {
            fontSize: 14
        }
    });

    chart.source(data, defs);
    chart.line().position('time*tem');
    chart.render();
  }

  render() {
    return (
        <div>
            <canvas ref={this.handleRef} />
        </div>  
    );
  }
}
