import React, { Component } from 'react';
import './Speech.css';

// const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new webkitSpeechRecognition();

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'

//------------------------COMPONENT-----------------------------

class Speech extends Component {

  constructor() {
    super()
    this.state = {
      listening: false
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }
  
  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }
  
  handleListen(){
    // handle speech recognition here 
    if (this.state.listening) {
        recognition.start()
        recognition.onend = () => recognition.start()
      } else {
        recognition.end()
      }

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      document.getElementById('interim').innerHTML = interimTranscript
      document.getElementById('final').innerHTML = finalTranscript


      if (this.state.listening) {
        recognition.start()
        recognition.onend = () => recognition.start()
      } else {
        recognition.end()
      }
  }
}
  

  render() {
    return (
      <div>
        <button id='microphone-btn' onClick={this.toggleListen} />
        <div id='interim'></div>
        <div id='final'></div>
      </div>
    )
  }
}

export default Speech;