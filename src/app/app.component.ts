import { Component, ViewEncapsulation  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { TemplateRef } from '@angular/core';
import { ViewChild, input } from '@angular/core';
import { NgTemplateOutlet, NgIf } from '@angular/common';
import { computed } from '@angular/core';
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, FormsModule, CounterComponent, CurrencyPipe, DatePipe, TitleCasePipe, NgTemplateOutlet, NgIf],

  template: `

      <app-test [widthPx]="50"/>
      <app-test>
        <h3 class="card-title">My Card Title</h3>
        <p>This is some content.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </app-test>
      <div style="padding-top: 50px">
        <p> Hello Barbara, Welcome to Mboa Digital. <br>
        We are happy to have you!<br>
        Click on this button to register as a member</p> <button> Regiter</button>
      </div>
      <main>
          <h2>Hello {{ firstName }}!</h2>
          <input type="text" [(ngModel)]="firstName" /> <br>
          <h1>Counter: {{ initialCount }}</h1>
          <app-counter [(count)]="initialCount"></app-counter>

            @for (item of items; track item.id; let idx = $index, e = $even) {
              <p>Item #{{ idx }}: {{ item.name }}</p>
            }

            <h1>Purchases from {{ company | titlecase }} on {{ purchasedOn | date }}</h1>
            <!-- Transform the amount to a currency-formatted string -->
          <p>Total: {{ amount | currency }}</p>
          <p>The event will occur at {{ scheduledOn | date:'hh:mm:ss' }}.</p> <br>

          <!-- firstName and lastName are concatenated before the result is passed to the uppercase pipe -->
        {{ firstName + (lastName).toLowerCase() }}
      </main>

      <section>
  <ng-container>
    <h3>User bio</h3>
    <p>Here's some info about the user</p>
  </ng-container>
</section>

 <h2>Your profile</h2>
    <ng-container *ngTemplateOutlet="profileTemplate()" />
    <ng-template #admin>This is the admin profile</ng-template>
    <ng-template #basic>This is the basic profile</ng-template>

    <ng-container *ngIf="permissions == 'admin'">
      <h1>Admin Dashboard</h1>
    </ng-container>
        <!-- Total Whitespace: 20 -->
 
        `,
  styles: ` div { color: pink;  } `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
  
  
export class AppComponent {
  title = 'Anne Barbara';
  firstName: string = 'Ada';
  lastName: string = 'Anne';
  permissions = 'admin';
  initialCount = 18;
  a = 10; b = 11;
  items = [{ id: 1, name: 'anne' }, { id: 2, name: 'Mich' }, { id: 3, name: 'Lydia' }]
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
  // scheduledOnString: string = '2024-03-15T10:30:00Z'; // Example date string
  scheduledOn: string = '2024-03-15T10:30:00Z'; 

  // isAdmin = input(false);
  // adminTemplate = viewChild('admin', { read: TemplateRef });
  // basicTemplate = viewChild('basic', { read: TemplateRef });
  // profileTemplate = viewChild(() => this.isAdmin() ? this.adminTemplate() : this.basicTemplate());

  isAdmin = false; // Remplacez input(false) par une simple variable
  @ViewChild('admin', { read: TemplateRef }) adminTemplate!: TemplateRef<any>;
  @ViewChild('basic', { read: TemplateRef }) basicTemplate!: TemplateRef<any>;

  profileTemplate = computed(() => this.isAdmin ? this.adminTemplate : this.basicTemplate);
  
}

// export class KebabCasePipe implements PipeTransform {
//   transform(value: string): string {
//     return value.toLowerCase().replace(/ /g, '-');
//   }
// }
