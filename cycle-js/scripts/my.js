/// <reference path="xstream/xstream.js" />
/// <reference path="cycle-run.js" />
/// <reference path="cycle-dom.js" />

function cycle_base() {
	function main(sources) {
		/* {Function} main a function that takes `sources` as input and outputs `sinks`. */

		// Use sources.DOM.select(selector).events(eventType)
		// ...
		// Create vdom$ somehow
		// ...
		//return {
		//	DOM: vdom$
		//};
		var sinks = {};
		//sinks.DOM = vdom$;
		console.log('main(sources', sources);

		return sinks;
	}

	// DOM
	function getDrivers() {
		// {Object} drivers an object where keys are driver names and values are driver functions. */
		var makeDOMDriver = window.CycleDOM.makeDOMDriver;
		var drivers = new Object();
		drivers.DOM = makeDOMDriver('#app-container');
		return drivers;
	}
	var drivers = getDrivers();

	// import {setup} from '@cycle/run';
	var setup = window.Cycle.setup;

	//const {sources, sinks, run} = setup(main, drivers);
	var setupObj = setup(main, drivers);

	// import run from '@cycle/run';
	var run = window.Cycle.run;

	console.log('test', [setupObj, dispose]);

	//const dispose = run(main, drivers); // Executes the application
	var dispose = run(main, drivers);

	//dispose();
}
//cycle_base();

function cycle_hello() {
	//import {run} from '@cycle/run';
	var Cycle = window.Cycle,
		run = Cycle.run;

	//import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom';
	var CycleDOM = window.CycleDOM,
		div = CycleDOM.div,
		label = CycleDOM.label,
		input = CycleDOM.input,
		hr = CycleDOM.hr,
		h1 = CycleDOM.h1,
		makeDOMDriver = CycleDOM.makeDOMDriver;

	function main(sources) {
		var myDOM = sources.DOM
			.select('.myinput').events('input')
			.map(ev => ev.target.value)
			.startWith('')
			.map(function (name) {
				return div([
					label('Name:'),
					input('.myinput', { attrs: { type: 'text' } }),
					hr(),
					h1('Hello ' + name)
				])
			});

		return {
			DOM: myDOM,
		};
	}

	run(main, {
		DOM: makeDOMDriver('#app-container')
	});
}
//cycle_hello();

function cycle_test1() {
	//import {run} from '@cycle/run';
	var run = Cycle.run;

	//import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom';
	var div = CycleDOM.div,
		label = CycleDOM.label,
		input = CycleDOM.input,
		hr = CycleDOM.hr,
		h1 = CycleDOM.h1,
		makeDOMDriver = CycleDOM.makeDOMDriver;

	var varsNames = {
		myinput: '.myinput',
	}

	function main1(sources) {
		var myDOM = sources.DOM
			//.select('.myinput')
			.select(varsNames.myinput)
			.events('input')
			.map(function (ev) {
				console.log('[ev, ev.target]', [ev, ev.target]);
				return ev.target.value;
			})
			.startWith('user')
			.map(function (name) {
				return CycleDOM.div([
					label('Name:'),
					//input('.myinput', {attrs: {type: 'text'}}),
					input(varsNames.myinput, { attrs: { type: 'text' } }),
					hr(),
					h1('Hello ' + name)
				])
			});

		return {
			DOM: myDOM,
		};
	}

	function main(sources) {
		var myinputValueDefaulted = sources.DOM
			//.select('.myinput')
			.select(varsNames.myinput)
			.events('input')
			.map(function (ev) {
				console.log('[ev, ev.target]', [ev, ev.target]);
				return ev.target.value;
			})
			.startWith('user');

		var myDOM = myinputValueDefaulted
			.map(function (name) {
				return CycleDOM.div([
					label('Name:'),
					//input('.myinput', {attrs: {type: 'text'}}),
					input(varsNames.myinput, { attrs: { type: 'text' } }),
					hr(),
					h1('Hello ' + name)
				])
			});

		return {
			DOM: myDOM,
		};
	}

	run(main, {
		DOM: makeDOMDriver('#app-container')
	});
}

function cycle_test() {
	//import {run} from '@cycle/run';
	var run = Cycle.run;
	console.log("import {run} from '@cycle/run'", { run, Cycle });

	var Stream = xstream.Stream;
	console.log("import {Stream} from 'xstream'", { Stream, xstream });


	//import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom';
	var div = CycleDOM.div,
		label = CycleDOM.label,
		input = CycleDOM.input,
		hr = CycleDOM.hr,
		br = CycleDOM.br,
		h1 = CycleDOM.h1,
		makeDOMDriver = CycleDOM.makeDOMDriver;

	var varsNames = {
		myText: '#myInput',
		myNum1: '#myNum1',
		myNum2: '#myNum2',
	}

	function main(sources) {
		var $myText = sources.DOM
			//.select('.myinput')
			.select(varsNames.myText)
			.events('input')
			.map(function (ev) {
				var val = ev.target.value;
				console.log(varsNames.myText + '[ev, ev.target]', [ev, ev.target, val]);
				return val;
			})
			.startWith('user');


		var $myNum1 = sources.DOM
			.select(varsNames.myNum1)
			.events('input')
			.map(function (ev) {
				var val = ev.target.value;
				console.log(varsNames.myNum1 + '[ev, ev.target]', [ev, ev.target, val]);
				return parseFloat(val);
			})
			.startWith(0);

		var $myNum2 = sources.DOM
			.select(varsNames.myNum2)
			.events('input')
			.map(function (ev) {
				var val = ev.target.value;
				console.log(varsNames.myNum2 + '[ev, ev.target]', [ev, ev.target, val]);
				return parseFloat(val);
			})
			.startWith(0);


		var $combine = Stream.combine($myNum1, $myNum2);

		var $targil = $combine
			.map(function ([num1, num2]) {
				var targil = { num1, num2 };
				console.log('targil', { num1, num2, targil });
				return targil
			});
			
		var $sum = $combine
			.map(function ([num1, num2]) {
				var sum = num1 + num2;
				console.log('sum', { num1, num2, s: sum });
				return sum
			})

		var $myDOM = Stream.combine($sum, $myText).map(function ([sum, myText]) {
			return CycleDOM.div([
				label('Name:', { name: varsNames.myText }),
				input(varsNames.myText, { attrs: { type: 'text' } }),
				br(), 

				label('Nums:'),
				input(varsNames.myNum1, { attrs: { type: 'number' } }),
				input(varsNames.myNum2, { attrs: { type: 'number' } }),

				hr(),

				h1('hello ' + myText),
				h1('Res ' + sum)
			])
		});

		return {
			DOM: $myDOM,
		};
	}

	run(main, {
		DOM: makeDOMDriver('#app-container')
	});
}

cycle_test();
