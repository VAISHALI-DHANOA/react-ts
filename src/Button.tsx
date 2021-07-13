import React from "react";
import { Page, Report, VisualDescriptor } from 'powerbi-client';
import 'powerbi-report-authoring';
import * as models from "powerbi-models";
import { convertToObject } from "typescript";

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
              <button onClick={this.showVisInfo.bind(this)}>Log Visual Info</button>
              <button onClick={this.applyFilter.bind(this)}>Apply Filter</button>
              <button onClick={this.registerEvents.bind(this)}>Register Report Events</button>
              <button onClick={this.getChangedVisuals.bind(this)}> Get Changed Visuals</button>
          </div>
      );
    }

    async showVisInfo(): Promise<void> {
      this.report = this.props.myReport as Report;
      this.pages = await this.report.getPages();
      this.visuals = await this.pages[1].getVisuals();

      for( const visual of this.visuals) {

        console.log('Visual: ', visual.title);
        console.log('Type: ', visual.type);

        if(visual.type !== 'slicer') {
          const result = await visual.exportData(models.ExportDataType.Summarized);
          const data = result.data.split('\r');
        //  console.log('Summarized Data: ', result.data);
          this.initialData.push({type: visual.type, result: result});
          console.log('Data for: ', data[0], ' --> ', data[1]);
        } else {
          const slicerState = await visual.getSlicerState();
          console.log('Get slicer state: ', slicerState);
        }

        if(visual.type !== 'slicer' && visual.type !== 'card') {
        const xField = await visual.getDataFields('Category');
        console.log('X Field: ', xField);
        const yField = await visual.getDataFields('Y');
        console.log('Y Field: ', yField);
      }

      const filters = await visual.getFilters();
      console.log('Filters: ', filters);

        // This info is not useful atm
        //const layout = visual.layout;
        // console.log(' Layout: ', layout);
        // const capability = await visual.getCapabilities();
        // capability.dataRoles?.forEach((role) => {
        //   // print the visual type
        //   console.log(role.name, ' Display Name: ', role.displayName);
        // })

      console.log('----------------------------------------------------');
     }

    }

    async registerEvents(): Promise<void> {


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

      async getChangedVisuals(): Promise<void> {

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

      async applyCrossFilter(): Promise<void> {

      }

      // This applies filter to all the visualization. The initial vis is reduced to show only the values which are contained in the "value" array.
      async applyFilter(): Promise<void> {
        try {
          const filter: models.IBasicFilter = {
            $schema: "http://powerbi.com/product/schema#basic",
            displaySettings: {
              isHiddenInViewMode: false
            },
            target: {
                table: "StateDim",
                column: "State"
            },
            filterType: models.FilterType.Basic,
            operator: "In",
            values:["New York"]

          };

          this.report = this.props.myReport as Report;
          this.pages = await this.report.getPages();
          this.visuals = await this.pages[1].getVisuals();


          for(const visual of this.visuals) {
              await visual.setFilters([filter]); //updateFilters also work

          }
        } catch (error) {
          console.log('Error --> ', error);
        }

      }

      async setSlicerStateBI(): Promise<void> {
        try {
          const filter: models.IBasicFilter = {
            $schema: "http://powerbi.com/product/schema#basic",
            displaySettings: {
              isHiddenInViewMode: false
            },
            target: {
                table: "COVID",
                column: "Date"
            },
            filterType: models.FilterType.Basic,
            operator: "In",
            values:["1/22/2020"]
          };

          this.report = this.props.myReport as Report;
          this.pages = await this.report.getPages();
          this.visuals = await this.pages[1].getVisuals();


          for(const visual of this.visuals) {
            if(visual.type === "slicer") {
              console.log('Found the slicer');
              await visual.setSlicerState({ filters: [filter] });
            }
          }
        } catch (error) {
          console.log('Error --> ', error);
        }
      }
}

export default Button;