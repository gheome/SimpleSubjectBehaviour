import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { InteractionService } from '../../services/interaction.service';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  public arra: any = [];
  public name: string = "";

  constructor(private interactionService: InteractionService) {}

  ngOnInit() {

  }

  sendName(name){
    this.name = name
    this.interactionService.sendMessage(this.name)
  }

}







// const observable = new Observable(subscriber => {
//   try{
//   subscriber.next({"da": "provine de la obiect"});
//   subscriber.next(2);
//   subscriber.next(3);
//   subscriber.next(4);
//   subscriber.next(4);
//   subscriber.next(4);
//   subscriber.next(4);
//   subscriber.next(4);
//   subscriber.complete();
//   }
//   catch(err) {
//     console.log(err)
//   }
// });
// console.log("before")
// const subscription = observable.subscribe({
//   next(x) {
//     if(typeof(x) === "object")
//       console.log("got value " + x["da"]);
//     else {
//       console.log("got value " + x);
//     }
//   },
//   error(err) {
//     console.error("something wrong occurred: " + err);
//   },
//   complete() {
//     console.log("done");
//   }
// });
// console.log("just after subscribe");
// //const observable = new Observable(function subscribe(subscriber) {
// //     const id = setInterval(() => {
// //       subscriber.next('hi')
// //     }, 10000);
// //   });
// //   observable.subscribe(result => console.log(result))
