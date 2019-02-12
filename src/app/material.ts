import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatListModule],
  exports: [MatButtonModule, MatCardModule, MatListModule],
})
export class MaterialModule {}
