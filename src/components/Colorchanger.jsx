import * as React from "react";
import Box from "@mui/material/Box";

function ColorChange(color) {
	console.log(color);
	return (
		
		<Box
			className="box"
			sx={{
				background: color.bg,
				width: 500,
				height: 50,
				border: 3,
			}}
			
		/>
	);
}
export default ColorChange