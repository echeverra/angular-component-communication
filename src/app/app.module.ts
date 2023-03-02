import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DataService } from './data.service';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { DetailComponent } from './detail/detail.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AComponent,
    BComponent,
    DetailComponent,
    CComponent,
    DComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
