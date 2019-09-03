import {Component, OnInit} from '@angular/core';
import 'devextreme/data/odata/store';
import {Service} from '../../app.service';
import {DataModel} from './data.model';
import * as _ from 'lodash';

@Component({
    templateUrl: 'display-data.component.html'
})

export class DisplayDataComponent implements OnInit {
    priority: any[];
    myArray: any[];
    rowIndex = 0;

    myData: DataModel  = {
        Task_ID: 0,
        SSMA_TimeStamp: 'AAAAAAAAG1k=',
        Task_Assigned_Employee_ID: 7,
        Task_Completion: 100,
        Task_Customer_Employee_ID: null,
        Task_Description: '<div>Hello Word</div>',
        Task_Due_Date: '2019-01-31T00:00:00',
        Task_Owner_ID: 1,
        Task_Priority: 4,
        Task_Reminder: true,
        Task_Reminder_Date: '2019-01-20T00:00:00',
        Task_Reminder_Time: '2019-12-30T08:00:00',
        Task_Start_Date: '2019-01-15T00:00:00',
        Task_Status: 'Completed',
        Task_Subject: 'Мои данные',
    };

    constructor(private service: Service) {
        this.priority = [
            {name: 'High', value: 4},
            {name: 'Urgent', value: 3},
            {name: 'Normal', value: 2},
            {name: 'Low', value: 1}
        ];
    }

    ngOnInit() {
        this.init();
    }

    async init() {
        const myArray = await this.service.getMyData();
        this.myArray = myArray.value;
    }


    onFocusedRowChanged(event) {
        this.rowIndex = event.row.data.Task_ID + 1;
    }

     addData() {
        const data = _.cloneDeep(this.myData);
        data.Task_ID = this.rowIndex - 1;
        this.myArray.splice(this.rowIndex, 0, data);
        _.each(this.myArray, (item, index) => {
           item.Task_ID = index;
        });
        console.log(this.rowIndex);
    }

}
