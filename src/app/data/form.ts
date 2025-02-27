import { FormControl, FormGroup } from "@angular/forms";

export var form = new FormGroup({
    username:new FormGroup({
      color:new FormControl(""),
      "background-color":new FormControl(""),
    }),
    message:new FormGroup({
        color:new FormControl(""),
    }),
    colon:new FormGroup({
        color:new FormControl(""),
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
    "margin":"text",
    "padding":"text",
  }
