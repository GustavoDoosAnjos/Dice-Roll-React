import React, { Component } from 'react';
import './Dice.css'

class Die extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fade: false
        }
    }

    decideClasse(props) {
        let nomeClasse
        switch (this.props.num) {
            case 1: 
                nomeClasse = 'fas fa-dice-one dado'
                break
            case 2: 
                nomeClasse = 'fas fa-dice-two dado'
                break
            case 3: 
                nomeClasse = 'fas fa-dice-three dado'
                break
            case 4: 
                nomeClasse = 'fas fa-dice-four dado'
                break
            case 5: 
                nomeClasse = 'fas fa-dice-five dado'
                break
            case 6: 
                nomeClasse = 'fas fa-dice-six dado'
                break
        }

        return nomeClasse
    }

    render() {
        let classe = this.decideClasse()
        return <h1 className={classe}></h1>
    }
}

export default Die;