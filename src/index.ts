import { Observable } from "rxjs";

declare const a: Observable<string>;

a.subscribe({
  next: x => console.log(x)
});

export interface LanguageService {
  /**
   * @deprecated
   */
   deprecatedField:string
}
declare const ls:LanguageService

ls.deprecatedField
