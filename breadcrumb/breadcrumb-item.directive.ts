import { Directive } from '@angular/core';

/**
 * This directive is used to customize the breadcrumb label behavior
 * *appBreadcrumbItem directive can be used in the child element of app-breadcrumb
 * Usage: refer to the demo - app.component.html
 */
@Directive({
  selector: '[appBreadcrumbItem]',
})
export class BreadcrumbItemDirective {}
