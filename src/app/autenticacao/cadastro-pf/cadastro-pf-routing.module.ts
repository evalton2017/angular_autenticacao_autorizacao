import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core'
import { CadastroPfComponent } from './components/cadastro-pf.component';
import { CadastrarPfComponent } from './components';

export const CadastroPjRoutes:Routes = [
    {
        path:'cadastro-pf',
        component:CadastroPfComponent,
        children:[
            {
                path:'',
                component:CadastrarPfComponent
            }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(CadastroPjRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class CadastroPfRoutingModule {
}

