import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MutexParamsAdminSharedModule } from 'app/shared';
import {
  ProduitComponent,
  ProduitDetailComponent,
  ProduitUpdateComponent,
  ProduitDeletePopupComponent,
  ProduitDeleteDialogComponent,
  produitRoute,
  produitPopupRoute
} from './';

const ENTITY_STATES = [...produitRoute, ...produitPopupRoute];

@NgModule({
  imports: [MutexParamsAdminSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ProduitComponent,
    ProduitDetailComponent,
    ProduitUpdateComponent,
    ProduitDeleteDialogComponent,
    ProduitDeletePopupComponent
  ],
  entryComponents: [ProduitComponent, ProduitUpdateComponent, ProduitDeleteDialogComponent, ProduitDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MutexParamsAdminProduitModule {}
