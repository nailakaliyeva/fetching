import React from "react";

export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			myArray: []
		};
	}

	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/naila")
			.then(response => response.json())
			.then(data => this.setState({ myArray: data }));
	}

	render() {
		return (
			<div>
				<div className="text-center text mt-5">TO-DO LIST</div>

				<input
					className="col-6 mx-auto mt-5"
					onKeyPress={e => {
						if (e.key === "Enter") {
							let newArray = this.state.myArray;
							newArray.push({
								label: e.target.value,
								done: false
							});
							fetch(
								"https://assets.breatheco.de/apis/fake/todos/user/naila",
								{
									method: "PUT",
									body: JSON.stringify(newArray),
									headers: {
										"Content-Type": "application/json"
									}
								}
							);

							this.setState({ myArray: newArray });
						}
					}}
				/>
				{this.state.myArray.map((item, index) => {
					return item.label;
				})}
			</div>

			//<i
			//className="fas fa-times text-danger"
			//onClick={() => {
			//	this.setState({
			//		array: this.state.myArray.splice(
			//			index,
			//			1
			//also it's a good practice to do it this way:
			//let x = this.state.myArray
			//x.splice(index, 1)
			//this.setState({myArray: x})
		);
	}
}
