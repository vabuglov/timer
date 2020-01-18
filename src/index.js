import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './style.sass';

// let name = 'Иван-Царевич';
// let element = <h1>Здравствуй, {name}!</h1>;

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: this.getDate(), timerID: 0 };
	}

	getDate() {
		let newTime = new Date();
		let hours = newTime.getHours().toString();
		let minutes = newTime.getMinutes().toString();
		let seconds = newTime.getSeconds().toString();
		if (minutes.length === 1) minutes = '0' + minutes;
		if (hours.length === 1) hours = '0' + hours;
		if (seconds.length === 1) seconds = '0' + seconds;
		let time = hours + ':' + minutes + ':' + seconds;
		return time;
	}

	tick() {
		this.setState({ date: this.getDate() });
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	render() {
		return (
			<div>
				<h1>Hello my friend!</h1>
				<h2>Now time is: {this.state.date}</h2>
			</div>
		);
	}
}

ReactDOM.render(<Clock />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
