import React, { Component } from 'react';
import CatComponent from './CatComponent';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent';
import MouseComponent from './MouseComponent';

export defaualt class GraceHopperQuoteComponent extends Component {
	render() {
		return (
			<div className="bar" id="hopper">
				<i>
					<p>
						&quot;The most dangerous phrase in the language is, ‘We’ve always done it this way.’&quot;
					</p>
				</i>
				<br />
				&#9;-Admiral Grace Hopper
			</div>
		);
	}
}
