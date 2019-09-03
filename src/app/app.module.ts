import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule} from './layouts';
import {FooterModule, LoginFormModule} from './shared/components';
import {AuthService, ScreenService, AppInfoService} from './shared/services';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {DisplayDataComponent} from './pages/display-data/display-data.component';
import {DxButtonModule, DxDataGridModule, DxFormModule, DxSwitchModule} from 'devextreme-angular';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        DisplayDataComponent
    ],
    imports: [
        BrowserModule,
        SideNavOuterToolbarModule,
        SideNavInnerToolbarModule,
        HttpClientModule,
        SingleCardModule,
        FooterModule,
        LoginFormModule,
        AppRoutingModule,
        DxButtonModule,
        DxDataGridModule,
        DxFormModule,
        DxSwitchModule
    ],
    exports: [
        HomeComponent,
        ProfileComponent,
        DisplayDataComponent,
    ],
    providers: [AuthService, ScreenService, AppInfoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
