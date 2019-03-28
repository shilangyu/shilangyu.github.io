import React, { Fragment } from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import Link from '@material-ui/core/Link'

const I: React.SFC<{ src: string }> = props => <CardMedia component="img" src={props.src} />

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
		title: 'ML club',
		posts: [
			{
				title: 'Description',
				content: `On Mondays from 16:00 through 19:00 I conduct a ML club where I teach fellow students Machine Learning algorithms.`
			},
			{
				title: 'Understanding',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/lessons-GA.png'} />
						The main focus is deep understanding of the algorithms. I try to explain the mathematics
						behind an algorithm before getting into the implementation. That way I'm sure my
						students will be later able to write the code themselves.
					</Fragment>
				)
			},
			{
				title: 'Leveling',
				content: `My students are at different stages of education. Which is why I do my best to use simple language and concepts when explaining the mathematical part. I'm very happy to see  the results where much younger students understand at the same level as older ones.`
			},
			{
				title: 'Projects',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/lessons-perceptron.jpg'} />
						Most of our time is spent focusing on the theory and understanding. However we have done
						a few small projects using our gathered knowledge. With the use of the genetic algorithm
						the students have written a parameters finder of a quadriatic function: given 2 roots it
						will find a, b, and c (ax^2 + bx + c). Using a simple neural network we've simulated the
						OR and later XOR function. Next thing planned is writting a snake AI using
						neuro-evolution.
					</Fragment>
				)
			}
		]
	}
]
