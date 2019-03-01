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
				title: 'Opis',
				content: `Był to mój personalny projekt, który dotyczył stworzenia algorytmu nauczy się rozpoznawać ręcznie pisane cyfry. Podzadaniem, które sobie stworzyłem to napisanie każdej części pogramu w innym języku programowania.`
			},
			{
				title: 'Dane',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/DR-mnist.png'} /> Dane, na których mój algorytm się
						uczył, były wzięte ze sławnej bazy 'mnist'; baza tysiący ręcznię narysowanych cyfr. Dane
						te były zamieniane w pliki tekstowe, gdzie każdy piksel został zapisany jako pozycja i
						jasność.
						<I src={'/assets/pics/portfolio/2019/DR-dataset.png'} />
					</Fragment>
				)
			},
			{
				title: 'Serwer',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/DR-server.png'} />
						Serwer był napisany w <Link href="https://golang.org/">Golang</Link>. Służył on do
						przetwarzenia danych o treningowych i testowych cyfrach wcześniej przygotowanych. Jak
						skończył był gotowy na przyjmowanie żądań które prosiły o owe dane. Potrafił on też
						komunikować się z algorytmem by 'zgadywać' narysowane cyfry.
					</Fragment>
				)
			},
			{
				title: 'Trener',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/DR-trainer.png'} />
						Trener był napisany w <Link href="https://www.python.org/">Python</Link>. Odpowiadał on
						za uczenie algorytmu. Najpierw zbierał dane treningowe i testowe. Potem trenował
						algorytm, a na końcu testował by ocenić jego skuteczność.
					</Fragment>
				)
			},
			{
				title: 'Zgadywacz',
				content: `Zgadywacz był napisany w c++. Korzystał on z nauczonego algorytmu by zgadywać jaka cyfra została narysowana.`
			},
			{
				title: 'Interakcja',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/DR-interaction.png'} />
						Interakcja była napisana w JavaScript. Tutaj można przetestować nasz wytrenowany
						algorytm. Rysuje sie cyfre w wyznaczonym polu, po czym wysyła sie zapytanie do serwera
						jaka cyfra została narysowana. Zgadnięcie algorytmu jest wyświetlane pod narysowaną
						liczbą.
					</Fragment>
				)
			},
			{
				title: 'Wizualizacja',
				content: (
					<Fragment>
						<I src={'/assets/pics/portfolio/2019/DR-visualisation.png'} />
						Wizualizacja danych była napisana w{' '}
						<Link href="https://processing.org/">Processing</Link> (Java). Ona służyła pokazywania
						jak algorytm sie uczył z czasem.
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
