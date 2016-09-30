import * as React from "react";

interface HomeProps extends React.Props<any> {
    name: string;
    age: number;
}
interface IState {}

// the empty object is state
export class Home extends React.Component<HomeProps, IState> {

    constructor(props: HomeProps, context: any) {
        super(props, context);
    }

    render(): JSX.Element{

        return (

            <div>
                Hello World {this.props.name}, you are {this.props.age}, right?
            </div>

        );
    }
}