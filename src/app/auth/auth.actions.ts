import { createAction, props } from "@ngrx/store";
import { User } from "./models/user.model";


export const login = createAction(
  '[Authentication] User Login',
  props<{user: User}>()
)
