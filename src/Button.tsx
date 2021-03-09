import React from "react";
import { Page, Report, VisualDescriptor } from 'powerbi-client';
import 'powerbi-report-authoring';
import * as models from "powerbi-models";
import { render } from "react-dom";
import { ExitStatus } from "typescript";

interface ButtonProps {myReport: any | Report};

class Button extends React.Component<ButtonProps, {}> {

    private renderedVis = new Array<string>();
    private report: any | Report = null;
    private pages: Page[] = [];
    private visuals: VisualDescriptor[] = [];
    private initialData: {type: string; result: models.IExportDataResult}[] = [];//{type: '', result: {data : ''}}[4];
    private finalData: {type: string; result: models.IExportDataResult}[] = []; //{type: '', result: {data : ''}}[4];


    constructor(props: ButtonProps) {
        super(props);
    }

    render(): JSX.Element {
      return (
          <div>
              <button onClick={this.getVisInfo.bind(this)}>Register Report Events</button>
              <button onClick={this.getMarkInfo.bind(this)}> Get Changed Visuals</button>
          </div>
      );
    }

    async getVisInfo(): Promise<void> {

       this.report = this.props.myReport as Report;
       this.pages = await this.report.getPages();
       this.visuals = await this.pages[1].getVisuals();

       for( const visual of this.visuals) {

        if(visual.type !== 'slicer') {
          const result = await visual.exportData(models.ExportDataType.Summarized);
          this.initialData.push({type: visual.type, result: result});
        }
      }

        this.report.on("visualRendered", (event: any) => {
          const vis = event.detail.name as string;
          this.renderedVis.push(vis);
        })

        /*
        // report.on("dataSelected", function(event) {
        //   console.log('Data Selected'); // , event.detail);
        // })

        // if you change a visual this is called
        // report.on("selectionChanged", function(event) {
        //   console.log("Selection changed ", event);
        // })
        */
      }

      async getMarkInfo(): Promise<void> {

          this.finalData = [];

          await this.checkVisChanged();

          console.log('Initial Data --> ', this.initialData);
          console.log('Final Data --> ', this.finalData);

          // Compare intial and finalData
          for(const inData of this.initialData) {
            for(const fiData of this.finalData) {
              if(inData.type === fiData.type) {
                if(inData.result.data === fiData.result.data) {
                  console.log('Data didnt change');
                } else {
                  console.log('Data definitely changed in type --> ', inData.type);
                }
              }
            }
          }
      }

      async checkVisChanged(): Promise<void> {

        for(const visual of this.visuals) {

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
          // capability.dataRoles?.forEach((role) => {
          //   // print the visual type
          //   console.log(role.name, ' Display Name: ', role.displayName);
          // })


          if(this.renderedVis.length) {

            for(const vis of this.renderedVis) {

              if(vis === visual.name && visual.type !== 'slicer') {
                console.log('Type --> ', visual.type, ' --> ', visual.title, 'has changed' );
                const result = await visual.exportData(models.ExportDataType.Summarized);
                this.finalData.push({type: visual.type, result: result});
              }
            }

          }

          console.log('______________________________________________');
        }
      }


}

export default Button;