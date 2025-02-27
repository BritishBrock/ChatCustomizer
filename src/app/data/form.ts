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
      "margin":new FormControl(""),
    })

  })
