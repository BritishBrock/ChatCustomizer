import { FormControl, FormGroup } from "@angular/forms";

export var form = new FormGroup({
    username:new FormGroup({
      color:new FormControl(""),
      "background-color":new FormControl(""),
    }),
    message:new FormGroup({
        color:new FormControl(""),
    })
  })
