import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import CantInvest from './components/CantInvest'
import Solutions1 from './components/Solutions1'
import Solutions2 from './components/Solutions2'
import WhyUs from './components/WhyUs'
import Team from './components/Team'
import Roadmap from './components/Roadmap'
import Mint from './components/Mint'
import Footer from './components/Footer'
import Helmet from 'react-helmet'
import texts from './texts/metadata'

function App() {
	return (
		<div className="App">
			<Helmet>
				{/*<!-- HTML Meta Tags -->*/}
				<title>{texts.Title}</title>
				<meta name="description" content="Shape Monster are one of the first NFT collections on the Moonbeam Network consisting of 1,111 algorithmically generated NFTs. "/>

				{/*<!-- Google / Search Engine Tags -->*/}
				<meta itemprop="name" content="Shape Monsters"/>
				<meta itemprop="description" content="Shape Monster are one of the first NFT collections on the Moonbeam Network consisting of 1,111 algorithmically generated NFTs. "/>
				<meta itemprop="image" content="https://shapes.monster/static/media/YellowMonster.d60dc68eadb27e76eddb.png"/>

				{/*<!-- Facebook Meta Tags -->*/}
				<meta property="og:url" content="https://shapes.monster"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="Shape Monsters"/>
				<meta property="og:description" content="Shape Monster are one of the first NFT collections on the Moonbeam Network consisting of 1,111 algorithmically generated NFTs. "/>
				<meta property="og:image" content="https://shapes.monster/static/media/YellowMonster.d60dc68eadb27e76eddb.png"/>

				{/*<!-- Twitter Meta Tags -->*/}
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="twitter:title" content="Shape Monsters"/>
				<meta name="twitter:description" content="Shape Monster are one of the first NFT collections on the Moonbeam Network consisting of 1,111 algorithmically generated NFTs. "/>
				<meta name="twitter:image" content="https://shapes.monster/static/media/YellowMonster.d60dc68eadb27e76eddb.png"/>
			</Helmet>
			<Navbar />
			<Welcome/>
			<CantInvest/>
			<Solutions1/>
			<Solutions2/>
			<WhyUs/>
			<Team />
			<Roadmap />
			<Mint />
			<Footer />
		</div>
	)
}

export default App
