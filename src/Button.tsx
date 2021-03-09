import React from "react";

interface ButtonProps {myReport: any};

class Button extends React.Component<ButtonProps, {}>
{
    constructor(props: ButtonProps) {
        super(props);
    }

    render(): JSX.Element {
      return (
          <div>
              <button onClick={this.getVisInfo.bind(this)}>Click on me</button>
              <button onClick={this.getMarkInfo.bind(this)}> New butoon</button>
          </div>
      );
    }

    async getVisInfo(): Promise<void> {
        const pages = await this.props.myReport.getPages();
        console.log('Pages', pages);

    }

    getMarkInfo(): void{
      //do something here
    }
}

export default Button;