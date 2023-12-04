import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ CoursesComponent ],
    exports: [ CoursesComponent ]
})

export class CoursesModule {}
