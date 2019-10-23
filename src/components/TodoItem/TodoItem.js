// первый способ задать инлайн стили

// import React from "react"

// function TodoItem(props) {
// 	return (
// 		<div className="todo-item">

// 			<input 
// 				type="checkbox"
// 				style={{marginBottom: !props.item.text && "140px"}}
// 				checked={props.item.completed}
// 				onChange={() => props.handleChange(props.item.id)}
// 			 />
// 			<p
// 				style={{textDecoration: props.item.completed ? "line-through" : "none"}}
// 			>{props.item.text}</p>
// 		</div>
// 	)
// }

// export default TodoItem






// второй способ задать набор стилей 

import React from "react"

function TodoItem(props) {

	const completedStyle = {
        width: "100%",
        height: "100%",
		backgroundColor: "#ff008d"
    }


	return (
		<div className="todo-item">
			<label>
				<div style={{background: props.item.completed ? "#ff0b5a" : "gray"}}>
					<span style={props.item.completed ? completedStyle: null}></span>
				</div>
				<input 
					type="checkbox"
					style={{marginBottom: !props.item.text && "140px"}}
					checked={props.item.completed}
					onChange={() => props.handleChange(props.item.id)}
				/>
				<p
				>{props.item.text}</p>
			</label>
		</div>
	)
}

export default TodoItem