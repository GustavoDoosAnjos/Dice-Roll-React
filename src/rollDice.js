import React, { Component } from 'react';
import './RollDice.css'
import Die from './die';
import './Dice.css'

class RollDice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstRandom: 1,
            secondRandom: 5
        }
        this.roll = this.roll.bind(this);
    }

    roll() {
        let firstNum = Math.floor(Math.random() * 6) + 1;
        let secondNum = Math.floor(Math.random() * 6) + 1;
        this.setState({firstRandom: firstNum});
        this.setState({secondRandom: secondNum});
    }

    render() {
        return (
            <div className='container'>
                <div className='dados'>
                    <div className="dadim">
                        <Die num={this.state.firstRandom}/>
                    </div>
                    <div className="dadimm">
                        <Die num={this.state.secondRandom}/>
                    </div>
                </div>
                <div>
                    <button className='botao' onClick={() => {
                        let dado = document.querySelector('.dadim');
                        let dadoo = document.querySelector('.dadimm');
                        let botao = document.querySelector('.botao');
                        dado.classList.add('animate')
                        dadoo.classList.add('animate')
                        botao.innerHTML = 'rolando...'
                        setTimeout(() => {
                            dado.classList.remove('animate')
                            dadoo.classList.remove('animate')
                            botao.innerHTML = 'rolar'
                        }, 1200)



                        this.roll()
                    }}>rolar</button>
                </div>
            </div>
        
        )
    }
}

export default RollDice;