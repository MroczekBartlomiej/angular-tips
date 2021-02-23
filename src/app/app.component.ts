import { Component, OnInit, VERSION } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
     this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      dateFrom: [""],
      dateTo: [""],
      description: [""],
      category: [""],
      amount: [""]
    });
  }
}
