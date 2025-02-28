import { FormControl, FormGroup } from "@angular/forms";

export var form = new FormGroup({
    username:new FormGroup({
      "background-color":new FormControl(""),
      "padding":new FormControl(""),
      color:new FormControl(""),
      "margin":new FormControl(""),
    }),
    message:new FormGroup({
      "background-color":new FormControl(""),
      "padding":new FormControl(""),
      color:new FormControl(""),
      "margin":new FormControl(""),
    }),
    colon:new FormGroup({
      "background-color":new FormControl(""),
      "padding":new FormControl(""),
      color:new FormControl(""),
      "margin":new FormControl(""),
    }),
    "chat-line":new FormGroup({
      "background-color":new FormControl(""),
      "padding":new FormControl(""),
      color:new FormControl(""),
      "margin":new FormControl(""),
    })

  })



  export var formComponents:any = {
    "color":"color",
    "background-color":"color",
    "margin":"multi",
    "padding":"text",
  }
