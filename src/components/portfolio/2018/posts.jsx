import React, { Fragment } from 'react'

export default [
	{
		title: 'snek.io',
		posts: [
			{
				title: 'Description',
				content: 'It was a project from the first semester of C# courses. The goal was to recreate the classic game \'Snake\' in Windows Forms. The adanced level of this project was adding multiplayer features (using sockets).'
			},
			{
				title: 'Menu',
				content: 'In the menu you can choose your speed, color of your snake, color of the food, background color, and your nickname that will appear on the leaderboards. On the left you can see a live-preview of your settings.'
			},
			{
				title: 'Game',
				content: 'Just like in the original game there is normal food and special food, where normal food gives you points equal to your speed and special giving ×10 the speed. In addition, the special food disappears after some time (scaled to your speed). After consuming any food your snake grows larger. The goal is to survive as long as you can without running into your tail. After losing, the score, snake length, and chosen speed is saved to the leaderboards.'
			},
			{
				title: 'Leaderboards',
				content: 'Here you can see all records on your network. It displays some basic information of the game. (Leaderboards database is hosted by MySQL on my PC, so for now it doesnt work on other networks)'
			},
			{
				title: 'Multiplayer',
				content: 'Each player can either host or join a game, by entering a hosting number and your nickname. After that a lobby window pops up where you can see all players\' nicknames in this room.'
			}
		]
	},
	{
		title: 'machine learning',
		posts: [
			{
				title: 'Description',
				content: <Fragment>It was a personal development project: learning more about how Artificial intelligence works. My goal was to fully understand and write code from the ground up without using existing libraries. Below you can find some projects I worked on using Machine Learning algorithms. <br />
					Disclaimer: graphs are only to explain the very basic idea.
				</Fragment>
			},
			{
				title: 'Genetic Algorithm',
				content: 'This algorithm focuses on perfecting something, just like in nature, we evolve and the fittest survives. Its comparable to how humans inherit features through genetics. In this example many 10PRINT designs are randomly created then after you chose your favorite 2, new ones are generated based on the previous bests.'
			},
			{
				title: 'Neural Network',
				content: 'This algorithm is the `brain`. Based on inputs it gives an output after processing the information. In this example I build in C# a program that first takes an image of a track to be created. Then from a given point cars are started and their goal is to go as far as possible. As shown on the picture, a car recieves distance inputs. It scans how far a wall is at all 8 directions and decides where to move next.'
			},
			{
				title: 'Neuroevolution',
				content: 'This algorithm merges the two previous ones. Now the `brain` gets better over time, the arrows here will represent the IQ level of a network. In this example I created a simulation of some balls trying to learn how to jump over the obstacles. Each of the 100 balls get the input of how far and how high is the obstacle, and how fast is it moving. Each of them have a unique set of arrows that help them decide whether they should jump or not. After all 100 balls are dead (hit a wall), a new, better generation of 100 new balls is made based & mutated off the best balls in the previous generation.'
			},
			{
				title: 'TicTacToe',
				content: 'A simple AI I made that learns by playing, if a move he makes is bad he remembers it and never does it again.'
			}
		]
	},
	{
		title: 'this.page',
		posts: [
			{
				title: 'Description',
				content: 'This page was built on Node.js, giving me a lot of flexibility when handling http requests. Typed in URL is sent to the server. The server then strips down the URL and looks up in a database informations about it. After receiving data it is sent to a html renderer EJS that creates the HTML page. Once done it\'s sent to the user.'
			},
			{
				title: 'Why bother?',
				content: 'The page is written in a clear and easy to read way, it helps in futher development. To some tiny extent the page was build following the MVC (model-view-controller) model.'
			}
		]
	}
]
