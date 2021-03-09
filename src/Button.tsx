import React from "react";
import { Report, VisualDescriptor } from 'powerbi-client';
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
              <button onClick={this.getMarkInfo.bind(this)}> New Button</button>
          </div>
      );
    }

    async getVisInfo(): Promise<void> {

        const report = this.props.myReport as Report;
        const pages = await report.getPages();
        const visuals = await pages[1].getVisuals();

        for(const visual of visuals) {

          console.log('Visual: ', visual.title , ' Type: ', visual.type, ' Data: ');

          const capability = await visual.getCapabilities();
          capability.dataRoles?.forEach((role) => {
            // print the visual type
            console.log(role.name, ' Display Name: ', role.displayName);
          })

          console.log('______________________________________________');
        }
      }

    getMarkInfo(): void{
      //do something here
      console.log('Does nothing at the moment');
    }
}

export default Button;