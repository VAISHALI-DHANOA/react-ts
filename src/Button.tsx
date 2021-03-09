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
              <button onClick={this.getMarkInfo.bind(this)}> New Button</button>
          </div>
      );
    }

    async getVisInfo(): Promise<void> {

        const report = this.props.myReport as Report;
        report.on("dataSelected", function(event) {
          console.log('Data Selected'); // , event.detail);
        })



        report.on("visualRendered", function(event) {
          console.log('Visual Rendered' , event);
        })

        // if you change a visual this is called
        report.on("selectionChanged", function(event) {
          console.log("Selection changed ", event);
        })

        const pages = await report.getPages();
        const visuals = await pages[1].getVisuals();

        for(const visual of visuals) {

          console.log('Visual: ', visual.type , ' Type: ', visual.name);

            // gets the data field on the y-axis
            // const field = await visual.getDataFields('Y');
            // console.log('Field ', field);

            // Not working
            // const property = await visual.getProperty({
            //   objectName: "legend",
            //   propertyName: "visible"});

            //   console.log('Property ', property.value);

            // const filters = await visual.getFilters();
            // console.log('Filters, ', filters);


          // const capability = await visual.getCapabilities();
          // console.log("Capability ", capability);

          // capability.dataRoles?.forEach((role) => {
          //   // print the visual type
          //   console.log(role.name, ' Display Name: ', role.displayName);
          // })

          console.log('______________________________________________');
        }
      }

    getMarkInfo(): void{
      //do something here
      console.log('Does nothing at the moment');
    }
}

export default Button;