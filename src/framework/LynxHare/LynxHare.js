/**
 * Lynx & Hare Demo
 *
 */
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import styledContainerQuery from 'styled-container-query';

const Logo = styled.div``;

const IntroText1 = styled.div`
	/* background: aliceblue; */
	font-size: 1.5em;
`;

const IntroText2 = styled.div`
	/* background: lightblue; */
	font-size: 1.25em;
`;

const Button = styled.div`
	border: 1px solid;
`;

const Question = styled.div`
	/* background: antiquewhite; */
	display: none !important;
	flex-wrap: wrap;
`;

const QuestionIntroText = styled.div`
`;

const QuestionBody = styled.div`
`;

const QuestionAnswers = styled.div`
	/* background: chocolate; */
`;

const AnswerA = styled.div`
`;

const AnswerB = styled.div`
`;

const Signup = styled.div`
	display: none !important;
`;

const Mailchimp = styled.div``;

const Container = styledContainerQuery.div`
	// Setup
	width: 100vw;
	min-height: 100vh;

	background: white;

	display: flex;
	flex-wrap: wrap;

	box-sizing: border-box;
	> * {
		box-sizing: border-box;
		display: inline-flex; // This makes the layout fluid, each container following it's content size.
		padding: 1.25em;
	}

	// Default state
	${Logo},
	${IntroText1},
	${IntroText2},
	${Button} {
		min-height: 25vh;
	}

	// Mobile and up
	&:container(min-width: 415px) {
		> * {
			font-size: 2em;
		}
	}

	// Tablet and up
	&:container(min-width: 1025px) {
		${IntroText1},
		${IntroText2} {
			font-size: 3em;
		}
	}
`;

/**
 * The main class
 */
class LynxHare extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: props.width,
			height: props.height,
		}
	}

	componentWillMount(){
    	this.setState({
			width: window.innerWidth + 'px',
			height: window.innerHeight + 'px',
		});
  	}

	render() {
		const {width, height} = this.state;

		return (
			<Container
				width={width}
				height={height}
				>
				<Logo>Lynx & Hare</Logo>
				<IntroText1>Investing / trading is the highest stakes game in the world.</IntroText1>
				<IntroText2>Your job as an investor is to pick players who can beat others.</IntroText2>
				<Button>Select your player</Button>
				<Question>
					<QuestionIntroText>
						You must answer a question correctly before you may choose to sign up.
					</QuestionIntroText>
					<QuestionBody>
						<ol>
							<li>Suppose that you are about to retire, and have two choices for a pension</li>
							<li>Pension A gives you an income equal to your per-retirement income</li>
							<li>Pension B has a 50% chance your income will be double your per-retirement income, and a 50% chance that your income will be 20% less than your per-retirement income</li>
							<li>You will have no other source of income during retirement, no chance of employment, and no other family income ever in the future</li>
							<li>Which pension would you choose?</li>
						</ol>
					</QuestionBody>
					<QuestionAnswers>
						<AnswerA>Pension A</AnswerA>
						<AnswerB>Pension B</AnswerB>
					</QuestionAnswers>
				</Question>
				<Signup>
					<Mailchimp>
						SIGNUP
					</Mailchimp>
				</Signup>
			</Container>
		);
	}
}

/**
 * The prop types
 */
LynxHare.propTypes = {
  /**
	 * Component is loading?
	 */
  loading: PropTypes.bool
};

/**
 * Default props
 */
LynxHare.defaultProps = {
  loading: false
};

export default LynxHare;
