import Head from 'next/head';
import {useFlipper} from '../useFlipper';

const Home = () => {
	const { Flipper, FlippedOn, FlippedOff } = useFlipper();
	const { Flipper: Flipper2, FlippedOn: FlippedOn2, FlippedOff: FlippedOff2 } = useFlipper();
	const { Flipper: Flipper3, FlippedOn: FlippedOn3, FlippedOff: FlippedOff3 } = useFlipper();
	return (
		<div>
			<Head>
				<title>useFlipper Example</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h3>Simple Flipper</h3>
			<Flipper>Button</Flipper>
			<FlippedOn>On</FlippedOn>
			<FlippedOff>Off</FlippedOff>

      <h3>Two flippers</h3>
			<Flipper2>Button 1</Flipper2>  <Flipper2>Button 2</Flipper2>
			<FlippedOn2>On</FlippedOn2>
			<FlippedOff2>Off</FlippedOff2>

			<h3>Rendered content as a flipper</h3>
			<Flipper3>
				<FlippedOn3>On</FlippedOn3>
				<FlippedOff3>Off</FlippedOff3>
			</Flipper3>
		</div>
	)
}

export default Home;
