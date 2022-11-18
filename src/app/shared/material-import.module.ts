import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

const NG_MATERIALS_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatIconModule,
];

@NgModule({
  imports: [...NG_MATERIALS_MODULES],
  exports: [...NG_MATERIALS_MODULES],
})
export class MaterialImportModule {}
