import React from "react";
import { Report } from 'powerbi-client';
import 'powerbi-report-authoring';

interface ButtonProps {myReport: any | Report};

class Button extends React.Component<ButtonProps, {}>
{
    constructor(props: ButtonProps) {
        super(props);
    }

    render(): JSX.Element {
      return (
          <div>
              <button onClick={this.getVisInfo.bind(this)}>Get Marks of Visual 1</button>
              <button onClick={this.getMarkInfo.bind(this)}> New butoon</button>
          </div>
      );
    }

    async getVisInfo(): Promise<void> {

        const report = this.props.myReport as Report;
        const pages = await report.getPages();
        const visuals = await pages[1].getVisuals();
        const capability = await visuals[0].getCapabilities();
        console.log('Capability', capability);
        capability.dataRoles?.forEach((role) => {
          // print the visual type
          console.log(role.name, role.displayName);
        })
    }

    getMarkInfo(): void{
      //do something here
    }
}

export default Button;