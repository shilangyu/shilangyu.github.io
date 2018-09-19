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
	}
]
