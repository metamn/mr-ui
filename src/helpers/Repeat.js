/**
 * Imitates the for loop inside JSX
 * - https://reactjs.org/docs/jsx-in-depth.html
 */
export default function Repeat(props) {
	let ret = [];
	let startAt = props.startAt;
	let endAt = startAt + props.numberOfTimes;

	for (let i = startAt; i < endAt; i++) {
		ret.push(props.children(i));
	}

	return ret;
}
