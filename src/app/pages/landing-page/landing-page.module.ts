import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TranslocoModule } from "@ngneat/transloco";
import { LandingPageComponent } from "./landing-page.component";
import { LogInComponent } from "./log-in/log-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

@NgModule({
  declarations: [
    LandingPageComponent,
    LogInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterModule.forChild([
      { path: "", component: LandingPageComponent },
      { path: "log-in", component: LogInComponent },
      { path: "sign-up", component: SignUpComponent },
      { path: "forgot-password", component: ForgotPasswordComponent },
    ]),
  ],
  exports: [LandingPageComponent],
})
export class LandingPageModule {}
