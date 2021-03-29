
import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './styles.css'

const slides = [
  { id: 0, url: 'assets/images/s2.jpg' },
  { id: 1, url: 'assets/images/s3.jpg' },
  { id: 2, url: 'assets/images/s1.jpg' },
  { id: 3, url: 'assets/images/s3.jpg' },
]

const Slide = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 4000), [])
    return transitions.map(({ item, props, key }) => (<>
        
    <animated.div
      key={key}
      class="bg"
      style={{ ...props, backgroundImage: `url(${item.url})` }}
      />
      </>
  ))
}

export default Slide