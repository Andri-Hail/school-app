import React, { useEffect, useState } from 'react'

import './App.css'
import audio2 from './PictureSelectInstructions.mp3'

const PictureSelect = props => {
  const { src1, src2, correctSrc } = props
  const [letter, setLetter] = useState(props.letter)
  const audio = new Audio(audio2)
  const [played, setPlayed] = useState(false)

  const start = () => {
    if (!played) {
      audio.play()
    }
    setPlayed(true)
  }

  useEffect(() => {
    start()
  }, [])

  const selectPic = src => {
    if (src === correctSrc) {
      alert('Good job!')
    } else {
      alert('try again!')
    }
  }

  const disp = [
    <img
      className="picOption"
      onMouseEnter={() => start()}
      onClick={() => selectPic(src1)}
      src={src1}
      style={{}}
    />,
    <img
      className="picOption"
      onMouseEnter={() => start()}
      onClick={() => selectPic(src2)}
      src={src2}
      style={{}}
    />,
    <img
      className="picOption"
      onMouseEnter={() => start()}
      onClick={() => selectPic(correctSrc)}
      src={props.correctSrc}
      style={{}}
    />,
  ]

  const shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  shuffle(disp)

  return (
    <div>
      <h1 className="header">Select the image that starts with  </h1>
      <h1 className="header" style={{fontSize:'110px', fontWeight: 'bold'}}> {letter}  </h1>

      <img src='https://www.cdm.depaul.edu/PublishingImages/icon-play-button.png' onClick ={() => audio.play()} style = {{marginTop:'3%', width:'10%', marginLeft:'45%'}}/>
      <div className="imgContainer">{disp}</div>
      
    </div>
  )
}

export default PictureSelect
