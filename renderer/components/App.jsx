import React from 'react';
import Rect from './Rect';
import Cursor from './Cursor';

const createRect = (a, b) => ({
  x: Math.min(a.x, b.x),
  y: Math.min(a.y, b.y),
  width: Math.abs(a.x - b.x),
  height: Math.abs(a.y - b.y)
});

const captureScreenShot = (rect) => {
  return navigator.mediaDevices.getUserMedia({
    audio: false,
      video: {
        mandatory: {
        chromeMediaSource: 'screen',
        minWidth: 1280,
        maxWidth: 1280,
        minHeight: 720,
        maxHeight: 720
      }
    }
  }).then((stream) => {
    // TODO: save screenshot
    stream.getTracks().forEach((track) => track.stop());
  });
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      cropping: false,
      downPoint: {},
      rect: {}
    };
  }

  render() {
    const { cropping, downPoint, rect } = this.state;
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          cursor: 'none'
        }}
        onMouseMove={(e) => {
          if (cropping) {
            this.setState({
              x: e.clientX,
              y: e.clientY,
              rect: createRect(downPoint, { x: e.clientX, y: e.clientY })
            });
          } else {
            this.setState({
              x: e.clientX,
              y: e.clientY
            });
          }
        }}
        onMouseUp={(e) => {
          const { rect } = this.state;
          this.setState({ cropping: false, rect: {} }, () => {
            captureScreenShot(rect)
              .catch((err) => { alert(err.message); });
          });
        }}
        onMouseDown={(e) => {
          this.setState({
            downPoint: { x: e.clientX, y: e.clientY },
            cropping: true
          });
        }}
      >
        <Rect
          x={rect.x}
          y={rect.y}
          width={rect.width}
          height={rect.height}
        />
        <Cursor
          x={this.state.x}
          y={this.state.y}
        />
      </div>
    );
  }
}

export default App;
