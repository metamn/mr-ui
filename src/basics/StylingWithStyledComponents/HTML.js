import React from "react";

export function LinkHTML({className, ...props}) {
	return (
		<a className={className} href={props.href} title={props.title}>
			{props.children}
		</a>
	)
}
