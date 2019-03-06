import React, { Fragment } from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import Link from '@material-ui/core/Link'

const I = props => <CardMedia component="img" src={props.src} />

export default [
	{
		title: 'internship at IBM',
		posts: [
			{
				title: 'Description',
				content: `At the end of my Junior high school year I got an internship at IBM Warsaw. This internship was 3 months long, starting from July through September.`
			},
			{
				title: 'Webdev',
				content: `After successfully passing the interview I was recruited as a Javascript web developer because I knew the tools and frameworks needed. My team's task was to created a PoC of micro-frontends.`
			},
			{
				title: 'React+redux',
				content: `The framework I mostly worked with was React with Redux as state management. That's where I fell in love in React and have rewritten many of my webapps to React, including this page (previously in EJS). I like React because of its ease to get something working quick and because of its huge community.`
			},
			{
				title: 'Micro-frontends',
				content: `After finishing the micro-frontends (small parts of a webpage written separately: navbar, footer, content, etc.) came the time to create this 'glue' that would combine them together in one finished webpage. I was given the task of investigating all possibilities of creating that 'glue'. The main goal was to follow the micro-services architecture and that's exactly what I did. Each micro-frontend was supposed to be fully independent. I spent all my time researching different methods because there was no uniform solution. After I finished collecting a few good methods I was asked to have a presentation about all of them with respect to their pros and cons. After the presentation we decided on a solution that we thought would fit our project the best.`
			},
			{
				title: 'Corporate life',
				content: `Thanks to the internship I have learned what it means to work for a big corporation: often meetings and a lot of teamwork. I also gained experience in the SCRUM and AGILE workflow which was a pleasure to work in.`
			}
		]
	},
	{
		title: 'digit recognition',
		posts: [
			{
				title: 'Description',
				content: `It was my biggest personal project involving machine learning. The goal was to create the hello world of machine learning: mnist digits recognition. However to make it a little bit more interesting I decided to write each part in a different programming language.`
			},
			{
				title: 'Data',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/DR-mnist.png'} /> Data, on which my fully connected
						neural network was training was taken from the famous 'mnist' database. It contains tens
						of thousands of hand-drawn digits. Firstly I had to get the data in a computer-readable
						format: numbers. Each line in the .csv file contains the label (what digit was drawn)
						followed by the brightness level of each pixel.
						<I src={'/assets/pics/portfolio/2019/DR-dataset.png'} />
					</Fragment>
				)
			},
			{
				title: 'Server',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/DR-server.png'} />
						Server was written in <Link href="https://golang.org/">Golang</Link>. Its function is to
						initially load and process the before prepared digit data. Afterwards it will respond to
						such requests as train or test data, taking guesses, or serving the interaction page. It
						serves as a communicator between different parts of the project.
					</Fragment>
				)
			},
			{
				title: 'Trainer',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/DR-trainer.png'} />
						Trainer was written in <Link href="https://www.python.org/">Python</Link>. First it
						loads the configuration of the neural network from a yaml file. Then, it trains the
						neural network, tests it, and saves the weights in a json file. During the training
						session it will save statistics such as current accuracy, loss, activation function, or
						learning rate.
					</Fragment>
				)
			},
			{
				title: 'Guesser',
				content: `The guesser was written in c++. It utilizes the previously trained network to perfom guesses sent by the Interaction.`
			},
			{
				title: 'Iteraction',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/DR-interaction.png'} />
						The interaction was written in JavaScript. It was the place to finally test our trained
						neural network. In the black canvas you can draw a digit and send it to our server. The
						server then will query the Guesser and return the guess to the javascript frontend. You
						can see the guess under the canvas.
					</Fragment>
				)
			},
			{
				title: 'Visualisation',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/DR-visualisation.png'} />
						Visualisation was written in <Link href="https://processing.org/">Processing</Link>
						(Java). It shows the gathered data during training sessions as a nice chart.
					</Fragment>
				)
			}
		]
	},
	{
		title: 'Kółko ML',
		posts: [
			{
				title: 'Opis',
				content: `W poniedziałki od 16:00 do 19:00 prowadze kółko/zajęcia z AI. Omawiam z uczniami różne podstawowe techniki 'machine learning' i pomagam im je zaprogramować.`
			},
			{
				title: 'Zrozumienie',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/lessons-GA.png'} />
						Główną ideą jest skupienie się na zrozumieniu czemu jakiś algorytm działa a nie
						wyłącznie na sposobie jego zakodowania.
					</Fragment>
				)
			},
			{
				title: 'Wyrównanie poziomu',
				content: `Uczniowie są z różnich roczników więc staram sie nie używać zaawansowanych terminologii matematycznych by wszyscy mieli równe szanse zrozumienia. Dzięki temu widzę jak czasami osoba młodsza rozumie równie dobrze matematyke algorytmu jak i starsza.`
			},
			{
				title: 'Projekty',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/lessons-perceptron.jpg'} />
						Wiekszość czasu spędziliśmy na teorię i zrozumienie. Ale zrobiliśmy też małe projekty. Z
						użyciem genetycznego algorytmu napisaliśmy znajdywacz a, b i c funkcji kwadratowej.
						Symulacje funkcji OR napisaliśmy dzięki jedno-warstwowej sieci: perceptron. Następnym
						planem jest napisanie snake-AI z neuro-ewolucją.
					</Fragment>
				)
			}
		]
	}
]
