import Line from '../assets/Line.svg'
import Phone from '../assets/Pinguinotelefono-unscreen.gif'
import texts from '../texts/welcome.json'
const Welcome = () => {
	return (
		<div className="welcome">

			<div className="welcome_row">
				<div className="single_column">
					<div className="text">
						<h1>{texts.Title}</h1>
						<img className="line" src={Line} alt="Line" />
						<p>{texts.subtitle}</p>
					</div>
				</div>
				<div className="phone">
					<img src={Phone} alt="Paine" />

					<div className="text">
						</div>
				</div>
			</div>
		</div>
	)
}

export default Welcome
