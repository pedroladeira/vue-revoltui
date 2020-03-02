import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import { Colors, TxtColor, BgColor } from '../../theme';

interface IProps {
	title?: string | ReactNode;
	color?: Colors;
	fluid?: boolean;
}

export class RvNavbar extends Component<IProps> {

	get mainClassNames(): string {
		const { color } = this.props;

		return classNames(
			color ? BgColor[color] : BgColor.default,
			color ? TxtColor[color] : TxtColor.default
		);
	}

	render(): ReactNode {
		const { children } = this.props;
		return (
			<nav className={this.mainClassNames}>
				{children}
			</nav>
		)
	}
}
