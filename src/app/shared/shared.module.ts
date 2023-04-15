import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { LabelComponent } from './components/label/label.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [ButtonComponent, LabelComponent, LoadingComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [LoadingComponent],
})
export class SharedModule {}
