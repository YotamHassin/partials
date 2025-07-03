'use strict';
const React = require('react');
const { useState, useEffect, Fragment } = require('react');
const { Text, useApp, useInput, Box } = require('ink');

const ForegroundColor = {
black: "black",
red: "red",
green: "green",
yellow: "yellow",
blue: "blue",
magenta: "magenta",
cyan: "cyan",
white: "white",
gray: "gray",
grey: "grey",
blackBright: "blackBright",
redBright: "redBright",
greenBright: "greenBright",
yellowBright: "yellowBright",
blueBright: "blueBright",
magentaBright: "magentaBright",
cyanBright: "cyanBright",
whiteBright: "whiteBright"
};

const Counter = (foregroundColor = ForegroundColor.green) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			if (counter > 60) {
				exit();
			}
			setCounter(previousCounter => previousCounter + 1);
		}, 100);

		return () => {
			clearInterval(timer);
		};
	}, []);

	const res = <Fragment>
		<Text color={foregroundColor}>{counter}</Text>
	</Fragment>;
}

const useInputTest = () => {
	const { exit } = useApp();

	const [x, setX] = React.useState(1);
	const [y, setY] = React.useState(1);

	useEffect(() => {
		const timer = setInterval(() => {
			if (counter > 60) {
				exit();
			}
			setCounter(previousCounter => previousCounter + 1);
		}, 100);

		return () => {
			clearInterval(timer);
		};
	}, []);

	useInput((input, key) => {
		if (input === 'q') {
			exit();
		}

		if (key.leftArrow) {
			setX(Math.max(1, x - 1));
		}

		if (key.rightArrow) {
			setX(Math.min(20, x + 1));
		}

		if (key.upArrow) {
			setY(Math.max(1, y - 1));
		}

		if (key.downArrow) {
			setY(Math.min(10, y + 1));
		}
	});

	// <Box> can’t be nested inside <Text> component
	const inputDisplay = <Fragment>
		<Text>Use arrow keys to move the face. Press “q” to exit.</Text>
		<Box height={12} paddingLeft={x} paddingTop={y}>
			<Text>^_^</Text>
		</Box>
	</Fragment>

	const res = <Fragment>
		<Text color="green">{counter} tests passed</Text>
	</Fragment>;

	return res;
	//return inputDisplay;
};


// to be able to get params in App, need to use AppWrapper with no params as a wrapper
const App = ({ name = 'Stranger' }) => (
	<Text>
		Hello, <Text color="green">{name} </Text>
		<Text color="green"><Counter></Counter></Text>

	</Text>
);

// AppWrapper is not able to get params, unless from console, see -h (meow) for help
const AppWrapper = ({ name = 'Stranger' }) => (
	<App name ></App>
);

module.exports = AppWrapper;
