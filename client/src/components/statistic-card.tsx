import React, { Component } from 'react'
import './statistic-card.scss'

interface ICardProps{
    title?:string;
    numbers?:string;
}

export class StatisticCard extends Component<ICardProps> {
    render() {
        return (
            <div className='statisticCard'>
                <p>{this.props.title}</p>
                <p>{this.props.numbers}</p>
            </div>
        )
    }
}

export default StatisticCard
