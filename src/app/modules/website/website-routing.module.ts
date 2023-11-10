import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { WebsiteComponent } from 'src/app/a_website/website/website.component';
import { FaqComponent } from 'src/app/paths/faq/faq.component';
import { IndexComponent } from 'src/app/paths/index/index.component';
import { InvestComponent } from 'src/app/paths/invest/invest.component';
import { PawnItemComponent } from 'src/app/paths/pawn/item/item.component';
import { PawnCalcComponent } from 'src/app/paths/pawn/pawn-calc/pawn-calc.component';
import { PawnComponent } from 'src/app/paths/pawn/pawn.component';
import { VentasComponent } from 'src/app/paths/ventas/ventas.component';
import { TiposItemComponent } from 'src/app/templates/administrative/tipos-item/tipos-item.component';
import { QrScannerComponent } from 'src/app/templates/qr-scanner/qr-scanner.component';
import { CotizacionComponent } from 'src/app/templates/website/cotizacion/cotizacion.component';
import { RegisterClientComponent } from 'src/app/templates/website/register-client/register-client.component';
const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'register',
        component: RegisterClientComponent
      },
      {
        path: 'pawn',
        children: [
          {
            path: '',
            component: PawnComponent,
          },
          {
            path: 'cotizacion',
            component: CotizacionComponent,
          },
          {
            path: 'qr',
            component: QrScannerComponent,
          },
          {
            path: 'calc',
            component: PawnCalcComponent,
          },
          {
            path: 'item',
            component: PawnItemComponent,
          },
          {
            path: '**',
            component: PawnComponent,
          }
        ]
      },
      {
        path: 'invest',
        component: InvestComponent
      },
      {
        path: 'sellings',
        component: VentasComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'abc',
        // component: WebsiteComponent,
        children: [
          {
            path: 'tipos_item',
            component: TiposItemComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
