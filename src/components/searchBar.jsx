import React, { Component } from "react";

class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = { term: '' }; //we can take and reuse value of this input elsewhere
	}
	
	handleUpdate = (event) => {
		//change the state of term
		this.setState({
			term: event.target.value
		});
		this.props.searchFunction(event.target.value);
		}
	//   componentWillMount(){
	// 	  console.log('will mount');
	//   }
	//   componentDidMount(){
	// 	  console.log('did mount');
	//   }
	// shouldComponentUpdate(){
	// 	return false;
	// }

	render () {
		console.log('rendered');
		return (
			<input
			value={this.state.term}
			type="text"
			className="form-control form-search"
			onChange={this.handleUpdate}

			/>
		);
	}
}

export default SearchBar;