export default {
  render(h) {
    const {
      styles: {
        position: { centerX, centerY },
        size: { width, height },
        transform: { rotateAngle }
      },
      zoomable,
      rotatable,
      parentRotateAngle
    } = this.props
    const style = {
      width: Math.abs(width),
      height: Math.abs(height),
      transform: `rotate(${rotateAngle}deg)`,
      left: centerX - Math.abs(width) / 2,
      top: centerY - Math.abs(height) / 2
    }
    const direction = zoomable.split(',').map(d => d.trim()).filter(d => d) // TODO: may be speed up

    return (
      <div
        ref="dragdiv"

        onMouseDown={this.startDrag}
        class="resizer"
        style={style}
      >
        {
          rotatable &&
          <div className="rotate" onMouseDown={this.startRotate}>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.536 3.464A5 5 0 1 0 11 10l1.424 1.425a7 7 0 1 1-.475-9.374L13.659.34A.2.2 0 0 1 14 .483V5.5a.5.5 0 0 1-.5.5H8.483a.2.2 0 0 1-.142-.341l2.195-2.195z"
                fill="#eb5648"
                fillRule="nonzero"
              />
            </svg>
          </div>
        }

        {
          direction.map((d) => {
            const cursor = `${getCursor(rotateAngle + parentRotateAngle, d)}-resize`
            return (
              <div key={d} style={{ cursor }} className={`${zoomableMap[ d ]} resizable-handler`} onMouseDown={e => this.startResize(e, cursor)} />
            )
          })
        }

        {
          direction.map((d) => {
            return (
              <div key={d} className={`${zoomableMap[ d ]} square`} />
            )
          })
        }
      </div>
    )
  }
}
